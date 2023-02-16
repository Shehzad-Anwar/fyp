import "../styles/globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { initialCart } from "../redux/actions";
import { signin } from "../redux/actions/Auth";
import { useCookies } from "react-cookie";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  // let { User } = useSelector((state) => state.AuthReducer);
  const [cookie, setCookie, removeCookie] = useCookies(["user", "token"]);
  const [key, setKey] = useState();
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(60));
    router.events.on("routeChangeComplete", () => setProgress(100));
    try {
      if (localStorage.getItem("cart")) {
        dispatch(initialCart(JSON.parse(localStorage.getItem("cart"))));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    // console.log("Redux", User);
  }, [router.query]);

  useEffect(() => {
    console.log("Second useEffact");
    getUser();
    setKey(Math.random());
  }, [router.pathname === "/"]);

  const getUser = async () => {
    const token = cookie.token;
    if (token) {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Account/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      response = await response.json();
      if (response.status === false) {
        removeCookie();
        setUser({ status: false });
        setKey(Math.random());
        router.push("/");
        return;
      } else {
        setCookie("user", JSON.stringify(response), {
          path: "/",
          maxAge: 259200,
          sameSite: true,
          secure: process.env.NODE_ENV === "production",
        });
        dispatch(signin(response));
        setUser({
          status: true,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
        });
      }
    }
  };

  const logOut = () => {
    setCookie("user", null, {
      path: "/",
      expires: new Date(1),
      secure: process.env.NODE_ENV === "production",
    });
    setCookie("token", null, {
      path: "/",
      expires: new Date(1),
      secure: process.env.NODE_ENV === "production",
    });
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };

  return (
    <>
      {key && router.pathname.startsWith("/Admin") !== true && (
        <Navbar key={key} user={user} logOut={logOut} />
      )}
      <Component {...pageProps} getUser={getUser} user={user} />
      {router.pathname.startsWith("/Admin") !== true && <Footer />}
    </>
  );
}

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <MyApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default App;
