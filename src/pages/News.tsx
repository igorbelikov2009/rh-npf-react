import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import newsImage from "../assets/images/news/newsTop.jpg";
import ListNews from "../components/news/ListNews/ListNews";
// import GoodsData from "../components/mainPage/examples/GoodsData/GoodsData";
// import ExampleDate from "../components/mainPage/examples/ExampleDate/ExampleDate"; // не удаляй
// import NewsData from "../components/mainPage/examples/NewsData/NewsData";

const News: FC = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
      {/* <ExampleDate />
      <GoodsData /> */}
      {/* <NewsData /> */}
    </>
  );
};

export default News;
