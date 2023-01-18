import { Link, useMatch } from "react-router-dom";
import React, { FC } from "react";
interface CustomLinkProps {
  children: any;
  to: any;
}

const CustomLink: FC<CustomLinkProps> = ({ children, to, ...props }) => {
  //параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину еденичку.
    end: to.length === 1,
  });
  //   console.log(match);

  return (
    <Link to={to} className="routes" style={{ color: match ? "var(--color-active)" : "white" }} {...props}>
      {children}
    </Link>
  );
};

export { CustomLink };
