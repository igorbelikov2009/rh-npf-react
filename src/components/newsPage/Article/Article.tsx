import React, { FC } from "react";
import UserDate from "../../../api/UserDate/UserDate";
import styles from "./Article.module.scss";

export type IArticle = {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
};

interface ArticleProps {
  link: IArticle;
}

const Article: FC<ArticleProps> = ({ link }) => {
  const formattedDate = UserDate.format(new Date(link.date));

  return (
    <div className={styles["news"]}>
      <div className={styles["news__header"]}>
        <h1 className={styles["news__header-heading"]}> {link.title} </h1>

        <p className={styles["news__header-date"]}> {formattedDate} </p>

        {link.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles["news__paragraph"]}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Article;
