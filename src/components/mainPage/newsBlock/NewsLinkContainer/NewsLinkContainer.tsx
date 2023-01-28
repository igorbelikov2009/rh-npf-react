import React, { FC, useEffect, useRef, useState } from "react";
import NewsLink, { NewsLinkProps } from "../../../news/NewsLink/NewsLink";
import styles from "./NewsLinkContainer.module.scss";

interface NewsLinkContainerProps {
  isClear: boolean;
  link: NewsLinkProps;
  emitValueWidth: (value: React.SetStateAction<number>) => void;
}

const NewsLinkContainer: FC<NewsLinkContainerProps> = ({ isClear, link, emitValueWidth }) => {
  const [width, setWidth] = useState(0);
  const refNewsLinkContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refNewsLinkContainer.current) {
      setWidth(refNewsLinkContainer.current.offsetWidth);
      // console.log(width);
    }
    emitValueWidth(width);
  }, [emitValueWidth, width]);

  return (
    <div ref={refNewsLinkContainer} className={isClear ? styles["container__clear"] : styles["container__blurry"]}>
      <NewsLink date={link.date} title={link.title} id={link.id} />
    </div>
  );
};

export default NewsLinkContainer;
