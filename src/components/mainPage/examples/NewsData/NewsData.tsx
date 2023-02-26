import React, { useEffect } from "react";
import { useAppDispanch, useAppSelector } from "../../../../hooks/redux";
import { getFormatedNews } from "../../../../store/reducers/newsReducer";
import NewsItem from "../../../adminPanel/NewsItem/NewsItem";
import styles from "./NewsData.module.scss";

const NewsData = () => {
  const dispatch = useAppDispanch();
  const { respon, isLoading, error } = useAppSelector((state) => state.newsReducer);
  const news = respon.formatedDateNews;

  useEffect(() => {
    dispatch(getFormatedNews());
  }, [dispatch]);

  return (
    <div className={styles["block"]}>
      <div className={styles["block__head"]}>
        {isLoading && <h1>Loading...</h1>}
        {error && (
          <h1>
            <> {error} </>
          </h1>
        )}
        <h1 className={styles["block__heading"]}> NewsData </h1>

        {/* <p className={styles["block__paragraph"]}>Командуем в терминале: json-server --watch db.json --port 5000</p> */}

        <div>
          {news &&
            news.map((item) => (
              <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} paragraphs={item.paragraphs} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsData;
