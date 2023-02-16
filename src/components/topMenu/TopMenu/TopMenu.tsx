import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useEffect, useState } from "react";
import styles from "./TopMenu.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

import Logotypes from "../../general/Logotypes/Logotypes";
import MenuLink, { MenuLinkProps } from "../../ui/links/MenuLink/MenuLink";
import TripleIcon from "../../general/TripleIcon/TripleIcon";
import MenuMobil from "../MenuMobil/MenuMobil";
import LoginForm from "../LoginForm/LoginForm";
import CallBack from "../CallBack/CallBack";

const TopMenu: FC = () => {
  const navigate = useNavigate();
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const [isHamburgerHovered, setHamburgerHovered] = useState(false);
  const [isMenuMobilVisible, setMenuMobilVisible] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isCallBackVisible, setCallBackVisible] = useState(false);

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

  const openLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const closeLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    document.body.style.overflow = "";
  };

  const openMenuMobil = () => {
    setMenuMobilVisible(true);
    document.body.style.overflow = "hidden";
  };
  const closeMenuMobil = () => {
    setMenuMobilVisible(false);
    document.body.style.overflow = "";
  };

  const openCallBack = () => {
    setCallBackVisible(!isCallBackVisible);
    // document.body.style.overflow = "hidden";
  };

  const closeCallBack = () => {
    setCallBackVisible(false);
    // document.body.style.overflow = "";
  };

  return (
    <header className={isBackgroundWhite ? styles["top-menu__with-border"] : styles["top-menu"]}>
      <div className={styles["top-menu__container"]}>
        <div className={styles["top-menu__left-block"]}>
          <div
            onMouseOver={() => setHamburgerHovered(true)}
            onMouseOut={() => setHamburgerHovered(false)}
            onClick={openMenuMobil}
            className={styles["top-menu__hamburger"]}
          >
            <TripleIcon icon="Hamburger" light={!isBackgroundWhite} hovered={isHamburgerHovered} />
          </div>

          <div onClick={() => navigate("/", { replace: true })}>
            <Logotypes isBackgroundWhite={isBackgroundWhite} />
          </div>

          <div className={styles["top-menu__nav"]}>
            {TopMenuLinks.map((link) => (
              <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
                {link.children}
              </MenuLink>
            ))}
          </div>
        </div>

        <div className={styles["top-menu__right-block"]}>
          <div className={styles["top-menu__contacts"]}>
            <div className={styles["top-menu__phone"]}>
              <a
                className={isBackgroundWhite ? styles["top-menu__link_news"] : styles["top-menu__link"]}
                href="tel:+78002004766"
              >
                8 800 200-47-66
              </a>

              <button
                onClick={openCallBack}
                className={isBackgroundWhite ? styles["top-menu__call-back_news"] : styles["top-menu__call-back"]}
              >
                Обратный звонок
              </button>
            </div>
          </div>

          <div
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            className={styles["top-menu__private-office"]}
          >
            <TripleIcon icon="User" light={!isBackgroundWhite} hovered={isPrivateOfficeHovered} />

            <p
              onClick={openLoginForm}
              className={isBackgroundWhite ? styles["top-menu__title_news"] : styles["top-menu__title"]}
            >
              Личный кабинет
            </p>
          </div>
        </div>
      </div>

      <LoginForm isVisible={isLoginFormVisible} closeLoginForm={closeLoginForm} />
      <MenuMobil isVisible={isMenuMobilVisible} closeMenuMobil={closeMenuMobil} />

      <AnimatePresence>
        {isCallBackVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <CallBack isVisible={isCallBackVisible} closeCallBack={closeCallBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopMenu;
