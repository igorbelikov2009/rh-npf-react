import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink, { NewsLinkProps } from "../components/news/NewsLink/NewsLink";
import Article, { IArticle } from "../components/newsPage/Article/Article";
import "../styles/dist/NewsPage.css";

const NewsPage: FC = () => {
  const [isHovered, setHovered] = useState(false);
  const link: IArticle = {
    id: 37, // проба
    title: "НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку",
    date: "2015-11-07T09:00:00.000Z",
    paragraphs: [
      "Информируем вас, что в период с 15 по 18 июня 2021 включительно офис Фонда по адресу: 115114, г. Москва, Дербеневская наб., д. 7, стр. 22 работает в обычном режиме для посетителей.",
      "Мы предоставим поддержку всем клиентам по обычному графику Пн. – Пт.: с 9:00 до 19:00 по московскому времени в режиме дистанционного обслуживания:",
      "Для звонков из Москвы и других стран +7 495 933-47-66",
      "Для звонков из других регионов России 8 800 200-47-66",
    ],
  };
  const { id } = useParams();

  return (
    <div className="news-page">
      <div className="news-page__head">
        <div className="news-page__container">
          <div
            className="news-page__link-to-news"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <div className="news-page__icons">
              <TripleIcon hovered={isHovered} light={false} icon="Arrow Down" />
            </div>
            <p className="news-page__link-title">К списку новостей</p>
          </div>

          {/* <router-link
          className="news-page__link-to-news"
          :to="{ name: 'newsPage' }"
          @mouseover="isLinkToNewsHovered = true"
          @mouseout="isLinkToNewsHovered = false"
        >
          <div className="news-page__icons">
            <TripleIcon :hovered="isLinkToNewsHovered" icon="Arrow Down" />
          </div>
          <p className="news-page__link-title">К списку новостей</p>
        </router-link> */}

          {link ? <Article link={link} /> : <div> Новости с ID {id} не найдено</div>}

          <div className="news-page__footer">
            <h1 className="news-page__footer-heading">Другие новости</h1>
            <NewsLink date={link.date} title={link.title} id={Number(id)} />
            <NewsLink date={link.date} title={link.title} id={Number(id)} />

            {/* <NewsLink
            v-for="article in anotherNews"
            :key="article.id"
            :title="article.title"
            :date="article.date"
            :id="article.id"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
