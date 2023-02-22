import React, { FC, useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink from "../components/news/NewsLink/NewsLink";
import Article from "../components/newsPage/Article/Article";
import { useAppDispanch, useAppSelector } from "../hooks/redux";
import { INews } from "../models/types";
import { getFormatedNews } from "../store/reducers/newsReducer";
import "../styles/dist/NewsPage.css";

const NewsPage: FC = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id) + 1;
  const [isHovered, setHovered] = useState(false);

  // Получаем данные с newsReducer и обрабатываем их.
  const dispatch = useAppDispanch();
  const { respon, isLoading, error } = useAppSelector((state) => state.newsReducer);
  const news = respon.formatedDateNews;
  useEffect(() => {
    dispatch(getFormatedNews());
  }, [dispatch]);

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = useMemo(() => {
    return [...news].filter((item) => {
      return item.id === prevID || item.id === nextID;
    });
  }, [news, nextID, prevID]);

  // Оставляем в массиве только те новости, ID которых соответствуют id.
  const currentNews: INews[] = useMemo(() => {
    return [...news].filter((item) => {
      return item.id === Number(id);
    });
  }, [news, id]);

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

          {isLoading && <h1>Loading...</h1>}
          {error && (
            <h1>
              <> {error} </>
            </h1>
          )}

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
