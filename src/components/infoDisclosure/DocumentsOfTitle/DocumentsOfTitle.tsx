import React, { FC } from "react";
import { linksDocumentsOfTitle } from "../../../data/InfoDisclosurePageData";
import ArchiveLink from "../../general/ArchiveLink/ArchiveLink";
import styles from "./DocumentsOfTitle.module.scss";

const DocumentsOfTitle: FC = () => {
  return (
    <section className={styles["documents-of-title"]}>
      <div className={styles["documents-of-title__container"]}>
        <h1 className={styles["documents-of-title__heading"]}>Правоустанавливающие документы</h1>

        <div className={styles["documents-of-title__list"]}>
          {linksDocumentsOfTitle.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsOfTitle;
