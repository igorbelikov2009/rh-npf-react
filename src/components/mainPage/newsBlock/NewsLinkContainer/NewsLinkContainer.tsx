import React, { FC, useEffect, useRef, useState } from "react";
import NewsLink, { NewsLinkProps } from "../../../news/NewsLink/NewsLink";
import styles from "./NewsLinkContainer.module.scss";

interface NewsLinkContainerProps {
  isClear: boolean;
  link: NewsLinkProps;
}

const NewsLinkContainer: FC<NewsLinkContainerProps> = ({ isClear, link }) => {
  const [linkContainerWidth, setLinkContainerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLinkContainerWidth(ref.current ? ref.current.offsetWidth : 0);
    console.log(linkContainerWidth);
  }, []);

  return (
    <div ref={ref} className={isClear ? styles["container__clear"] : styles["container__blurry"]}>
      {/* ref="newsLinkContainer" */}
      <NewsLink date={link.date} title={link.title} id={link.id} />
    </div>
  );
};

export default NewsLinkContainer;
