/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useMemo, useState, useEffect } from "react";
import UserDate from "../../../../api/UserDate/UserDate";
import { INews } from "../../../../models/types";
import { newsAPI } from "../../../../services/NewsService";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./ExampleDate.module.scss";

const ExampleDate: FC = () => {
  const [selectedYear] = useState("2021");
  const [news, setNews] = useState<INews[]>([]);
  const { data: webNews } = newsAPI.useFetchAllNewsQuery(100);

  useEffect(() => {
    if (webNews) {
      setNews(webNews);
    }
  }, [webNews]);

  const newsSortedByDate: INews[] = useMemo(() => {
    return [...news].sort((a, b) => (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1));
  }, [news]);
  // console.log(newsSortedByDate);

  // В отсортированном по дате массиве изменяем id, делаем его равным индексу.
  // Получаем массив используемый для дальнейших вычислениях.
  const newsUsedForComputing = useMemo(() => {
    return [...newsSortedByDate].map((item, index) => ({
      id: Number(index),
      title: String(item.title),
      date: String(item.date),
      paragraphs: item.paragraphs,
    }));
  }, [newsSortedByDate]);
  // console.log(newsUsedForComputing);

  // Полученный массив форматируем по дате
  const formatedDateNews: INews[] = useMemo(() => {
    return [...newsUsedForComputing].map((item, index) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));
  }, [newsUsedForComputing]);
  // console.log(formatedDateNews);

  // // получаем radioYears (radioItems)
  // const radioYears = useMemo(() => {
  //   return [...newsUsedForComputing]
  //     .map((item) => new Date(item.date).getFullYear())
  //     .filter((item, index, self) => index === self.indexOf(item))
  //     .map((item, index) => ({
  //       id: String(index),
  //       name: String(item),
  //       value: String(item),
  //     }));
  // }, [newsUsedForComputing]);
  // // console.log(radioYears);

  // // новости, отфильтрованные по годам
  // const newsFilteredByYear = useMemo(() => {
  //   return [...newsUsedForComputing].filter((item) => {
  //     return new Date(item.date).getFullYear() === Number(selectedYear);
  //   });
  // }, [newsUsedForComputing, selectedYear]);
  // // console.log(newsFilteredByYear);

  // // форматируем по дате новости, отфильтрованные по годам
  // const formatedFilteredByYear: INews[] = useMemo(() => {
  //   return [...newsFilteredByYear].map((item, index) => ({
  //     id: Number(item.id),
  //     title: String(item.title),
  //     date: String(UserDate.format(new Date(item.date))),
  //     paragraphs: item.paragraphs,
  //   }));
  // }, [newsFilteredByYear]);
  // // console.log(formatedFilteredByYear);

  return (
    <div className={styles["block"]}>
      <div className={styles["block__head"]}>
        <h1 className={styles["block__heading"]}> Сортировка новостей по дате </h1>
        <p className={styles["block__paragraph"]}>Командуем в терминале: json-server --watch db.json --port 5000</p>

        {/* <div>
          {formatedDateNews.map((item) => (
            <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} paragraphs={item.paragraphs} />
          ))}
        </div> */}

        <div>
          {formatedDateNews &&
            formatedDateNews.map((item) => (
              <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} paragraphs={item.paragraphs} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExampleDate;

/*
  const sortedAndFormatedDateNews: INew[] = newsSortedByDate.map((item, index) => ({
    // id: Number(item.id),
    id: Number(index),
    title: String(item.title),
    date: String(UserDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

*/
