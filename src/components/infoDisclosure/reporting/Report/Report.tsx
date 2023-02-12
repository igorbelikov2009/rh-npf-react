import React, { FC } from "react";
import ArchiveLink from "../../../general/ArchiveLink/ArchiveLink";
import styles from "./Report.module.scss";

export interface IReport {
  heading: string;
  archiveLinks: {
    href: string;
    title: string;
    subtitle: string;
  }[];
}

const Report: FC<IReport> = ({ heading, archiveLinks }) => {
  return (
    <div>
      <div className={styles["block-header"]}>
        <p className={styles["block-header__heading"]}>{heading}</p>
      </div>
      {archiveLinks.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} subtitle={link.subtitle} />
      ))}
    </div>
  );
};

export default Report;
