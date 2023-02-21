import React, { useState, useEffect, useMemo } from "react";
import UserDate from "../../../../api/UserDate/UserDate";
import { INews } from "../../../../models/types";
import { newsAPI } from "../../../../services/NewsService";
import CarouselHeader from "../../../general/carousel/CarouselHeader/CarouselHeader";
import MainCarousel from "../MainCarousel/MainCarousel";
import styles from "./NewsBlock.module.scss";

const NewsBlock = () => {
  // для CarouselHeader
  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isBlurredLeft, setIsBlurredLeft] = useState(true);
  const [isHoveredRight, setIsHoveredRight] = useState(true);
  const [isBlurredRight, setIsBlurredRight] = useState(false);

  // для MainCarousel // вычисляем и скролим scrollableElement
  const screenWidth = document.documentElement.clientWidth; // получаем ширину экрана
  const [widthLink, setWidthLink] = useState(0); // ширина контейнера ссылок
  const [amountChildren, setAmountChildren] = useState(0); // количество детей newsContainer
  const [overallWidth, setOverallWidth] = useState(0); // общая длина newsContainer
  const [scrollWidth, setScrollWidth] = useState(0); // длина прокрутки scrollableElement
  const [right, setRight] = useState(0); // значение прокрутки scrollableElement, записываемое в его атрибут style

  //
  const [q, setQ] = useState(0); // значение счётчика, индекс columns[q], который по центру экрана
  const [j, setJ] = useState(0); // если (screenWidth > 855), то по центру экрана два элемента:
  //  columns[q] и columns[j]

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
  // =========================================

  const getWidthColumn = (width: React.SetStateAction<number>) => {
    setWidthLink(width);
  };
  // console.log(widthLink);

  useEffect(() => {
    // получаем количество детей массива, новостных колонок (NewsLinkContainer)
    setAmountChildren(news.length);
    // высчитываем общую длину карусельной ленты (carousel-tape)
    setOverallWidth(widthLink * amountChildren);
  }, [amountChildren, news.length, widthLink]);
  // console.log("amountChildren :" + amountChildren);
  // console.log("overallWidth:" + overallWidth);
  // =================================

  // Получаем значение q
  const getValueQOnClickArrowLeft = () => {
    if (q !== 0) {
      setQ((prev) => prev - 1);
    }
    if (q < 0) {
      setQ(0);
    }
  };
  const getValueQOnClickArrowRight = () => {
    if (screenWidth < 855) {
      if (q < amountChildren - 1) {
        setQ((prev) => prev + 1);
      }
    }
    if (screenWidth > 855) {
      if (q < amountChildren - 2) {
        setQ((prev) => prev + 1);
      }
    }
  };
  // console.log("q: " + q);

  // get value j в зависимости от ширины экрана screenWidth (< 855 или > 855 )
  // во время постройки DOM, определяем данный метод в хук useEffect.
  useEffect(() => {
    if (screenWidth < 855) {
      setJ(q);
    } else {
      setJ(q + 1);
    }
  }, [q, screenWidth]);
  // console.log("q: " + q, "j: " + j);

  // scrolling
  // скролим влево
  useEffect(() => {
    setScrollWidth(q * widthLink);
    setRight(q * widthLink);
  }, [q, widthLink]);

  // скролим вправо
  useEffect(() => {
    setScrollWidth(q * widthLink);
    setRight(q * widthLink);
    if (screenWidth < 855) {
      if (scrollWidth >= overallWidth) {
        setRight(overallWidth - widthLink);
      }
    }
    if (screenWidth > 855) {
      if (scrollWidth >= overallWidth - widthLink) {
        setRight(overallWidth - 2 * widthLink);
      }
    }
  }, [overallWidth, q, screenWidth, scrollWidth, widthLink]);
  // console.log("scrollWidth :" + scrollWidth);
  // console.log("right =" + right);

  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const changeColorArrowsOnClickArrowLeft = () => {
    setIsHoveredRight(true);
    setIsBlurredRight(false);

    if (q === 1) {
      setIsHoveredLeft(false);
      setIsBlurredLeft(true);
    }
  };

  const changeColorArrowOnClickArrowRight = () => {
    setIsHoveredLeft(true);
    setIsBlurredLeft(false);

    if (screenWidth < 855) {
      if (j === amountChildren - 1) {
        setIsHoveredRight(false);
        setIsBlurredRight(true);
      }
    } else if (screenWidth > 855) {
      if (j === amountChildren - 2) {
        setIsHoveredRight(false);
        setIsBlurredRight(true);
      }
    }
  };

  // клик по левой стрелке
  const onClickLeftArrow = () => {
    getValueQOnClickArrowLeft();
    changeColorArrowsOnClickArrowLeft();
  };

  // клик по правой стрелке
  const onClickRightArrow = () => {
    getValueQOnClickArrowRight();
    changeColorArrowOnClickArrowRight();
  };

  return (
    <div>
      <CarouselHeader
        headerTitle="Новости"
        isBlurredLeft={isBlurredLeft}
        isBlurredRight={isBlurredRight}
        isHoveredLeft={isHoveredLeft}
        isHoveredRight={isHoveredRight}
        onClickLeft={onClickLeftArrow}
        onClickRight={onClickRightArrow}
      />

      <div className={styles["carousel"]}>
        <div className={styles["scrollableElement"]} style={{ right: `${right}px` }}>
          <MainCarousel qq={q} jj={j} carouselLinks={formatedDateNews} emitWidthColumn={getWidthColumn} />
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
