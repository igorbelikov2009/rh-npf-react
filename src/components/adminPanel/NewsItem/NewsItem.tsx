import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { useAppDispanch } from "../../../hooks/redux";
import { INews } from "../../../models/types";
import { deleteNewsItem } from "../../../store/reducers/newsReducer";
import styles from "./NewsItem.module.scss";

const NewsItem: FC<INews> = ({ id, title, date, paragraphs }) => {
  // const history = unstable_HistoryRouter();
  const dispatch = useAppDispanch();

  const handleHistory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // history.push(`/news/${id}`);
  };
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteNewsItem(id));
  };

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

      <div className={styles["news-item__container-button"]}>
        <Button variant="outline-success" className="mt-2" onClick={handleHistory}>
          Открыть
        </Button>

        <Button variant={"outline-danger"} onClick={handleRemove}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default NewsItem;
