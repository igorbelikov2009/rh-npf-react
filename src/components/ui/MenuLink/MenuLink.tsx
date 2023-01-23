import { Link, useMatch } from "react-router-dom";
import React, { FC } from "react";
import styles from "./MenuLink.module.scss";

interface MenuLinkProps {
  children: string;
  to: string;
  isBackgroundWhite: boolean;
}

const MenuLink: FC<MenuLinkProps> = ({ children, to, isBackgroundWhite, ...props }) => {
  //параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину еденичку.
    end: to.length === 1,
  });
  //   console.log(match);

  if (isBackgroundWhite) {
    return (
      <Link to={to} className={match ? styles["link-dark_active"] : styles["link-dark"]} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} className={match ? styles["link-light_active"] : styles["link-light"]} {...props}>
      {children}
    </Link>
  );
};

export default MenuLink;
