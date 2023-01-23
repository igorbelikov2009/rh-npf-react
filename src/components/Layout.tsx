import { Outlet } from "react-router-dom";
import React, { FC } from "react";
import Footer from "./Footer";
import TopMenu from "./TopMenu";

const Layout: FC = () => {
  return (
    <>
      <TopMenu />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
