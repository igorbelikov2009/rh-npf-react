import React, { FC, useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UserDate from "../api/UserDate/UserDate";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink from "../components/news/NewsLink/NewsLink";
import Article from "../components/newsPage/Article/Article";
import { INews } from "../models/types";
import { newsAPI } from "../services/NewsService";
import "../styles/dist/NewsPage.css";

const NewsPage: FC = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id) + 1;
  const [isHovered, setHovered] = useState(false);

  // Получаем данные с сервера и обрабатываем их.===============
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

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = useMemo(() => {
    return [...formatedDateNews].filter((item) => {
      return item.id === prevID || item.id === nextID;
    });
  }, [formatedDateNews, nextID, prevID]);
  // console.log(anotherNews);

  const currentNews: INews[] = useMemo(() => {
    return [...formatedDateNews].filter((item) => {
      return item.id === Number(id);
    });
  }, [formatedDateNews, id]);
  // console.log(currentNews);

  return (
    <div className="news-page">
      <div className="news-page__head">
        <div className="news-page__container">
          <Link
            to="/news"
            className="news-page__link-to-news"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <div className="news-page__icons">
              <TripleIcon hovered={isHovered} light={false} icon="Arrow Down" />
            </div>
            <p className="news-page__link-title">К списку новостей</p>
          </Link>

          {currentNews ? (
            currentNews.map((news, index) => (
              <Article key={index} id={news.id} date={news.date} title={news.title} paragraphs={news.paragraphs} />
            ))
          ) : (
            <div> Новости с ID {id} не найдено</div>
          )}

          <div className="news-page__footer">
            <h1 className="news-page__footer-heading">Другие новости</h1>

            {anotherNews &&
              anotherNews.map((item, index) => (
                <NewsLink key={index} date={item.date} title={item.title} id={Number(item.id)} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
