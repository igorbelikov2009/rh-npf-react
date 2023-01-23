import React, { FC, useState } from "react";
import "./TopMenu.scss";
// import { Link } from "react-router-dom";

import Logotypes from "../../general/Logotypes/Logotypes";
import MenuLink, { MenuLinkProps } from "../../ui/MenuLink/MenuLink";
import TripleIcon from "../../general/TripleIcon/TripleIcon";

const TopMenu: FC = () => {
  const [isBackgroundWhite] = useState(true);
  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const [isHamburgerHovered, setHamburgerHovered] = useState(false);

  const TopMenuLinks: MenuLinkProps[] = [
    { to: "/", children: "Главная" },
    { to: "/about", children: "О нас" },
    { to: "/business", children: "Для бизнеса" },
    { to: "/contacts", children: "Контакты" },
    { to: "/news", children: "Новости" },
    { to: "/investment", children: "Инвестиции" },
  ];

  return (
    <header className={isBackgroundWhite ? "top-menu top-menu__with-border" : "top-menu "}>
      <div className="top-menu__container">
        <div className="top-menu__left-block">
          <div
            onMouseOver={() => setHamburgerHovered(true)}
            onMouseOut={() => setHamburgerHovered(false)}
            className="top-menu__hamburger"
          >
            <TripleIcon icon="Hamburger" light={!isBackgroundWhite} hovered={isHamburgerHovered} />
          </div>

          <div>
            <Logotypes isBackgroundWhite />
          </div>

          <div className="top-menu__nav">
            {TopMenuLinks.map((link) => (
              <MenuLink key={link.to} to={link.to} isBackgroundWhite>
                {link.children}
              </MenuLink>
            ))}
          </div>
        </div>

        <div className="top-menu__right-block">
          <div className="top-menu__contacts">
            <div className="top-menu__phone">
              <a
                className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                href="tel:+78002004766"
              >
                8 800 200-47-66
              </a>
            </div>
          </div>

          <div
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            className="top-menu__private-office"
          >
            <TripleIcon icon="User" light={!isBackgroundWhite} hovered={isPrivateOfficeHovered} />

            <p className={isBackgroundWhite ? "top-menu__title  top-menu__title_news" : "top-menu__title"}>
              Личный кабинет
            </p>
          </div>
        </div>
      </div>

      {/* // <transition name="call-back">
    //   <CallBackForm v-if="isCallBackFormVisible" @closeCallBack="closeCallBack" />
    // </transition>

    // <transition name="login-form">
    //   <LoginForm v-show="isLoginFormVisible" @closeLoginForm="closeLoginForm" />
    // </transition>

    // <transition name="menu-mobil">
    //   <MenuMobil v-if="isMenuMobilVisible" @closeMenuMobil="closeMenuMobil" />
    // </transition> */}
    </header>
  );
};

export default TopMenu;
