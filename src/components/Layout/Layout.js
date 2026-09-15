import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";
import Toast from "../UI/toast/Toast.jsx";
import BackToTop from "../UI/back-to-top/BackToTop.jsx";
import useScrollReveal from "../../hooks/useScrollReveal";

const Layout = () => {
  const { pathname } = useLocation();
  useScrollReveal();

  // start every page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <Carts />
      <main>
        <Routes />
      </main>
      <Footer />
      <Toast />
      <BackToTop />
    </div>
  );
};

export default Layout;
