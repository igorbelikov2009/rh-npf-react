import React, { FC, useState } from "react";
import NewsLink, { NewsLinkProps } from "../../../news/NewsLink/NewsLink";
import styles from "./NewsLinkContainer.module.scss";

interface NewsLinkContainerProps {
  isClear: boolean;
  link: NewsLinkProps;
}

const NewsLinkContainer: FC<NewsLinkContainerProps> = ({ isClear, link }) => {
  const [linkContainerWidth, setLinkContainerWidth] = useState("");

  return (
    <article className={isClear ? styles["container__clear"] : styles["container__blurry"]}>
      {/* ref="newsLinkContainer" */}
      <NewsLink date={link.date} title={link.title} id={link.id} />
    </article>
  );
};

export default NewsLinkContainer;
