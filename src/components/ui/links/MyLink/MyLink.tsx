import React, { FC } from "react";
import styles from "./MyLink.module.scss";

export interface IMyLink {
  href: string;
  children: React.ReactNode;
}

interface MyLinkProps {
  isActive: boolean;
  href: string;
  children: React.ReactNode;
}

const MyLink: FC<MyLinkProps> = ({ isActive, href, children }) => {
  return (
    <a className={isActive ? styles["link_active"] : styles["link"]} href={href}>
      {children}
    </a>
  );
};

export default MyLink;
