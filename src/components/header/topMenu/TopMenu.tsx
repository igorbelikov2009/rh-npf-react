import React, { FC, useState } from "react";
import "./TopMenu.scss";
import { Link } from "react-router-dom";
import Logotypes from "../../general/Logotypes/Logotypes";
// import TripleIcon from "../../general/TripleIcon/TripleIcon";
import Hamburger from "../../../assets/icons/triple/Hamburger/Dark.svg";
import User from "../../../assets/icons/triple/User/dark.svg";

const TopMenu: FC = () => {
  const [isBackgroundWhite] = useState(true);

  return (
    <header className={isBackgroundWhite ? "top-menu top-menu_news" : "top-menu "}>
      <div className="top-menu__container">
        <div className="top-menu__row">
          <div className="top-menu__left-block">
            <div className="top-menu__button-lines">
              <img src={Hamburger} alt="Hamburger" className="triple-icon" />
            </div>

            <div className="top-menu__logotype">
              <Logotypes isBackgroundWhite={isBackgroundWhite} />
            </div>

            <div className="top-menu__nav">
              <Link className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"} to="/">
                Главная
              </Link>
              <Link
                className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/about"
              >
                О нас
              </Link>
              <Link
                className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/business"
              >
                Для бизнеса
              </Link>
              <Link
                className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/contacts"
              >
                Контакты
              </Link>
              <Link className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"} to="/news">
                Новости
              </Link>
              <Link
                className={isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/investment"
              >
                Инвестиции
              </Link>
            </div>
          </div>

          <div className="top-menu__right-block">
            <div className="top-menu__contacts">
              <div className="top-menu__phone">
                <a className="top-menu__phone-link" href="tel:+78002004766">
                  <div
                    className={
                      isBackgroundWhite ? "top-menu__phone-number  top-menu__title_news" : "top-menu__phone-number"
                    }
                  >
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
