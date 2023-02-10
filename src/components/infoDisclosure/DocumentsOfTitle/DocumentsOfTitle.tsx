import React, { FC } from "react";
import ArchiveLink, { ArchiveLinkProps } from "../../general/ArchiveLink/ArchiveLink";
import styles from "./DocumentsOfTitle.module.scss";

const DocumentsOfTitle: FC = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/documents-of-title/foundationCharter.pdf",
      title: "Устав фонда",
    },
    {
      href: "/pdf/infoOpening/documents-of-title/license.pdf",
      title: "Лицензия",
    },
    {
      href: "/pdf/infoOpening/documents-of-title/Свидетельство о государственной регистрации негосударственного пенсионного фонда-1576772418041.pdf",
      title: "Свидетельство о государственной регистрации негосударственного пенсионного фонда",
    },
    {
      href: "/pdf/infoOpening/documents-of-title/Свидетельство о постановке на учет в налоговом органе-1576772424907.pdf",
      title: "Свидетельство о постановке на учет в налоговом органе",
    },
  ];

  return (
    <section className={styles["documents-of-title"]}>
      <div className={styles["documents-of-title__container"]}>
        <h1 className={styles["documents-of-title__heading"]}>Правоустанавливающие документы</h1>

        <div className={styles["documents-of-title__list"]}>
          {links.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsOfTitle;
