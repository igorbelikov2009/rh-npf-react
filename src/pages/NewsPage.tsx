import React, { FC, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink from "../components/news/NewsLink/NewsLink";
import Article, { ArticleProps } from "../components/newsPage/Article/Article";
import { formatedDateNews } from "../data/DataNews/DataNews";
import "../styles/dist/NewsPage.css";

const NewsPage: FC = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id) + 1;
  const [isHovered, setHovered] = useState(false);

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = useMemo(() => {
    return [...formatedDateNews].filter((item) => {
      return item.id === prevID || item.id === nextID;
    });
  }, [nextID, prevID]);
  // console.log(anotherNews);

  const currentNews: ArticleProps[] = useMemo(() => {
    return [...formatedDateNews].filter((item) => {
      return item.id === Number(id);
    });
  }, [id]);
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
          {/* <Link className="news-page__link-title" to="/news">
              К списку новостей
            </Link> */}

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
