import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import newsImage from "../assets/images/news/newsTop.jpg";
import ListNews from "../components/news/ListNews/ListNews";

const News: FC = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
    </>
  );
};

export default News;
