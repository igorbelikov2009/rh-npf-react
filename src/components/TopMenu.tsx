import React, { FC, useEffect, useState } from "react";
import "../styles/TopMenu.scss";
import { useLocation, useNavigate } from "react-router-dom";

import Logotypes from "./general/Logotypes/Logotypes";
import MenuLink, { MenuLinkProps } from "./ui/links/MenuLink/MenuLink";
import TripleIcon from "./general/TripleIcon/TripleIcon";

const TopMenu: FC = () => {
  const navigate = useNavigate();
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const [isHamburgerHovered, setHamburgerHovered] = useState(false);
  const pathname = useLocation().pathname;
  // console.log(pathname);

  const TopMenuLinks: MenuLinkProps[] = [
    { to: "/about", children: "О нас" },
    { to: "/investment", children: "Инвестиции" },
    { to: "/business", children: "Для бизнеса" },
    { to: "/news", children: "Новости" },
    { to: "/support", children: "Поддержка" },
    { to: "/contacts", children: "Контакты" },
  ];

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/about" ||
      pathname === "/business" ||
      pathname === "/info" ||
      pathname === "/investment" ||
      pathname === "/managment" ||
      pathname === "/news" ||
      pathname === "/notfoundpage" ||
      pathname === "/support" ||
      pathname === "/taxation"
    ) {
      setIsBackgroundWhite(false);
    } else {
      setIsBackgroundWhite(true);
    }
  }, [pathname]);

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

          <div onClick={() => navigate("/", { replace: true })}>
            <Logotypes isBackgroundWhite={isBackgroundWhite} />
          </div>

          <div className="top-menu__nav">
            {TopMenuLinks.map((link) => (
              <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
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
