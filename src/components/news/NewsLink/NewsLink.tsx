import React, { FC } from "react";
import styles from "./NewsLink.module.scss";

export interface NewsLinkProps {
  title: string;
  date: string;
  id: number;
  paragraphs?: string[];
}

const NewsLink: FC<NewsLinkProps> = ({ title, date, id }) => {
  return (
    <div className={styles["news-link"]}>
      <p className={styles["news-link__title"]}> {title} </p>

      <p className={styles["news-link__date"]}>{date}</p>
    </div>
  );
};

export default NewsLink;
