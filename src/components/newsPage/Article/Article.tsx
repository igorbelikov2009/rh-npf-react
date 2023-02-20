import React, { FC } from "react";
import styles from "./Article.module.scss";

export type ArticleProps = {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
};

const Article: FC<ArticleProps> = ({ title, date, paragraphs }) => {
  return (
    <div className={styles["news"]}>
      <div className={styles["news__header"]}>
        <h1 className={styles["news__header-heading"]}> {title} </h1>

        <p className={styles["news__header-date"]}> {date} </p>

        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles["news__paragraph"]}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Article;
