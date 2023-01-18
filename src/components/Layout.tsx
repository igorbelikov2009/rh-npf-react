import { Outlet } from "react-router-dom";
import React, { FC } from "react";
import { CustomLink } from "./ui/CustomLink";
import Footer from "./Footer";

const Layout: FC = () => {
  return (
    <>
      <header className="header">
        <CustomLink to="/">Главная</CustomLink>
        <CustomLink to="/about">О нас</CustomLink>
        <CustomLink to="/business">Для бизнеса</CustomLink>
        <CustomLink to="/contacts">Контакты</CustomLink>
        <CustomLink to="/news">Новости</CustomLink>
        <CustomLink to="/investment">Инвестиции</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
