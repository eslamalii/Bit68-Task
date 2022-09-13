import React from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
