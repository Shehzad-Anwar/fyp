import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import createEmotionCache from "../../src/createEmotionCache";
import cookies from "next-cookies";
import Admin from "../../models/Admin";
import SuperAdmin from "../../models/SuperAdmin";
import Error from "next/error";
import mongoose from "mongoose";

const clientSideEmotionCache = createEmotionCache();

export default function Dashboard({ Check, ...props }) {
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  if (Check == false) {
    return <Error statusCode={404} />;
  } else
    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Dashboard</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <FullLayout>
              {/* <Component {...pageProps} /> */}
              <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                  <SalesOverview />
                </Grid>

                <Grid item xs={12} lg={4}>
                  <DailyActivity />
                </Grid>
                <Grid item xs={12} lg={8}>
                  <ProductPerfomance />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <BlogCard />
                </Grid>
              </Grid>
            </FullLayout>
          </CssBaseline>
        </ThemeProvider>
      </CacheProvider>
    );
}

Dashboard.propTypes = {
  // Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  const { user } = cookies(context);
  let Check = false;
  if (user) {
    try {
      const PromiseAdmin = Admin.findOne(
        {
          _id: user.userId,
          email: user.email,
        },
        { password: 0, resetToken: 0 }
      );
      const PromiseSuperAdmin = SuperAdmin.findOne(
        {
          _id: user.userId,
          email: user.email,
        },
        { password: 0, resetToken: 0 }
      );
      const isAdmin = await PromiseAdmin;
      const isSuperAdmin = await PromiseSuperAdmin;

      if (isAdmin || isSuperAdmin) Check = true;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    props: { Check }, // will be passed to the page component as props
  };
}
