import React, { FC, useState } from "react";
import "./TopMenu.scss";
import { Link } from "react-router-dom";
import Logotypes from "../../general/Logotypes/Logotypes";

const TopMenu: FC = () => {
  const [ifBackgroundWhite] = useState(true);

  return (
    <header className={ifBackgroundWhite ? "top-menu top-menu_news" : "top-menu "}>
      <div className="top-menu__container">
        <div className="top-menu__row">
          <div className="top-menu__left-block">
            <button className="top-menu__button-lines">TripleIcon icon="Hamburger"</button>

            <div className="top-menu__logotype">
              <Logotypes isBackgroundWhite={ifBackgroundWhite} />
            </div>

            <div className="top-menu__nav">
              <Link className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"} to="/">
                Главная
              </Link>
              <Link
                className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/about"
              >
                О нас
              </Link>
              <Link
                className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/business"
              >
                Для бизнеса
              </Link>
              <Link
                className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
                to="/contacts"
              >
                Контакты
              </Link>
              <Link className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"} to="/news">
                Новости
              </Link>
              <Link
                className={ifBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link"}
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
                  <p
                    className={
                      ifBackgroundWhite
                        ? "top-menu__phone-number  top-menu__button-title_news"
                        : "top-menu__phone-number"
                    }
                  >
                    8 800 200-47-66
                  </p>
                </a>

                <button
                  className={
                    ifBackgroundWhite ? "top-menu__call-back  top-menu__call-back_new" : "top-menu__call-backs"
                  }
                >
                  Обратный звонок
                </button>
              </div>
            </div>

            <div className="top-menu__button-switch">
              <button className="top-menu__button-icons">icon</button>

              <p
                className={
                  ifBackgroundWhite ? "top-menu__button-title  top-menu__button-title_news" : "top-menu__button-title"
                }
              >
                Личный кабинет
              </p>
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
