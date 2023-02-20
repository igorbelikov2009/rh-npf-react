import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import newsImage from "../assets/images/news/newsTop.jpg";
import ListNews from "../components/news/ListNews/ListNews";
import ExampleDate from "../components/mainPage/examples/ExampleDate/ExampleDate";

const News: FC = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
      <ExampleDate />
    </>
  );
};

export default News;
