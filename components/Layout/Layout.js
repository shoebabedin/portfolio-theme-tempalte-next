import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";



const Layout = ({ children }) => {
  return (
    <>
      <Preloader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
