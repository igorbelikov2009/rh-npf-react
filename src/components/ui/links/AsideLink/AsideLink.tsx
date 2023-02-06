import { Link, useMatch } from "react-router-dom";
import React, { FC } from "react";
import styles from "./AsideLink.module.scss";

export interface AsideLinkProps {
  children: string;
  to: string;
}

const AsideLink: FC<AsideLinkProps> = ({ children, to, ...props }) => {
  //параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
    end: to.length === 1,
  });
  //   console.log(match);

  return (
    <Link to={to} className={match ? styles["link_active"] : styles["link"]} {...props}>
      {children}
    </Link>
  );
};

export default AsideLink;
