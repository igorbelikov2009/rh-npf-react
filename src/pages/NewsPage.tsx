import React, { FC } from "react";
import { useParams } from "react-router-dom";

const NewsPage: FC = () => {
  const { id } = useParams();
  return <div>Вы открыли страницу с ID:{id} </div>;
};

export default NewsPage;
