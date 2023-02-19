import React, { FC } from "react";
import styles from "./NewsItem.module.scss";

interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
}

const NewsItem: FC<NewsItemProps> = ({ id, title, date, paragraphs }) => {
  return (
    <div className={styles["news-item"]}>
      <h3 className={styles["news-item__id-date"]}>id: {id} </h3>
      <p className={styles["news-item__heading"]}> {title} </p>
      <p className={styles["news-item__id-date"]}> {date} </p>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles["news-item__paragraph"]}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default NewsItem;
