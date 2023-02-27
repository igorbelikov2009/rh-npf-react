import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import newsImage from "../assets/images/news/newsTop.jpg";
import ListNews from "../components/news/ListNews/ListNews";
// import GoodsData from "../components/mainPage/examples/GoodsData/GoodsData";

const News: FC = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
      {/* <GoodsData /> */}
    </>
  );
};

export default News;
