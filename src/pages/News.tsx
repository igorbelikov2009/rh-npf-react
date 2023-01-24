import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import newsImage from "../assets/images/news/newsTop.jpg";

const News: FC = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />
    </>
  );
};

export default News;
