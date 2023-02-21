import React, { FC } from "react";
import { INews } from "../../../../models/types";
import styles from "./NewsItem.module.scss";

const NewsItem: FC<INews> = ({ id, title, date, paragraphs }) => {
  return (
    <div className={styles["news-item"]}>
      <h3 className={styles["news-item__id-date"]}>id: {id} </h3>
      <p className={styles["news-item__heading"]}> {title} </p>
      <p className={styles["news-item__id-date"]}> {date} </p>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles["news-item__paragraph-before"]}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default NewsItem;
