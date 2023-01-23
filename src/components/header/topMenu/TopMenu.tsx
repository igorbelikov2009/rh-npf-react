import React, { FC, useState } from "react";
import "./TopMenu.scss";
import { Link } from "react-router-dom";
import Logotypes from "../../general/Logotypes/Logotypes";
// import TripleIcon from "../../general/TripleIcon/TripleIcon";
import Hamburger from "../../../assets/icons/triple/Hamburger/Dark.svg";
import User from "../../../assets/icons/triple/User/dark.svg";
import MenuLink from "../../ui/MenuLink/MenuLink";

const TopMenu: FC = () => {
  const [isBackgroundWhite] = useState(true);

  return (
    <header className={isBackgroundWhite ? "top-menu top-menu_news" : "top-menu "}>
      <div className="top-menu__container">
        <div className="top-menu__left-block">
          <div className="top-menu__icon-hamburger">
            <img src={Hamburger} alt="Hamburger" className="triple-icon" />
          </div>

          <div className="top-menu__logotype">
            <Logotypes isBackgroundWhite={isBackgroundWhite} />
          </div>

          <div className="top-menu__nav">
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/">
              Главная
            </MenuLink>
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/about">
              О нас
            </MenuLink>
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/business">
              Для бизнеса
            </MenuLink>
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/contacts">
              Контакты
            </MenuLink>
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/news">
              Новости
            </MenuLink>
            <MenuLink isBackgroundWhite={isBackgroundWhite} to="/investment">
              Инвестиции
            </MenuLink>
          </div>
        </div>

        <div className="top-menu__right-block">
          <div className="top-menu__contacts">
            <div className="top-menu__phone">
              <a className="top-menu__phone-link" href="tel:+78002004766">
                <div className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}>
                  8 800 200-47-66
                </div>
              </a>
            </div>
          </div>

          <div className="top-menu__private-office">
            <img src={User} alt="Hamburger" className="triple-icon" />

            <div className={isBackgroundWhite ? "top-menu__title  top-menu__title_news" : "top-menu__title"}>
              Личный кабинет
            </div>
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
