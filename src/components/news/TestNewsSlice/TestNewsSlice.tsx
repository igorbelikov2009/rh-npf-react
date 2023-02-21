import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./TestNewsSlice.module.scss";

const TestNewsSlice = () => {
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  return (
    <div className={styles["block"]}>
      <div className={styles["block__head"]}>
        <h1 className={styles["block__heading"]}>Тестирование NewsSlice </h1>

        {/* <div>
          {formatedDateNews.map((item) => (
            <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} paragraphs={item.paragraphs} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TestNewsSlice;
