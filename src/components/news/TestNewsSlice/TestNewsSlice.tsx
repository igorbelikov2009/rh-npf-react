import React, { useEffect } from "react";
import { useAppDispanch, useAppSelector } from "../../../hooks/redux";
import { fetchUsers } from "../../../store/redusers/ActionCreater";
import styles from "./TestNewsSlice.module.scss";

const TestNewsSlice = () => {
  const dispatch = useAppDispanch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={styles["block"]}>
      <div className={styles["block__head"]}>
        <h1 className={styles["block__heading"]}>Тестирование NewsSlice </h1>

        {isLoading && <h1>Идёт загрузка...</h1>}

        {error && <h1>Ошибка при загрузке</h1>}

        <div>{JSON.stringify(users, null, 2)}</div>
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
