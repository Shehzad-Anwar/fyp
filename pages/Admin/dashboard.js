import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import createEmotionCache from "../../src/createEmotionCache";
import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import AdminDashboard from "../Admin";
import cookies from "next-cookies";
import Admin from "../../models/Admin";
import SuperAdmin from "../../models/SuperAdmin";
import Error from "next/error";
import mongoose from "mongoose";

const clientSideEmotionCache = createEmotionCache();

const Dashboard = ({ Check, ...props }) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (Check == false) {
    return <Error statusCode={404} />;
  } else
    return (
      <>
        <CacheProvider value={emotionCache}>
          <AdminDashboard {...pageProps} />
        </CacheProvider>
        {/* <SideBar name={"Admin"} /> */}
      </>
    );
};

export default Dashboard;

Dashboard.propTypes = {
  // Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  // pageProps: PropTypes.object.isRequired,
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
