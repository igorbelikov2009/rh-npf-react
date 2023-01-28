import React, { FC, useState } from "react";
import { NewsLinkProps } from "../../../news/NewsLink/NewsLink";
import NewsLinkContainer from "../NewsLinkContainer/NewsLinkContainer";
import styles from "./MainCarousel.module.scss";

interface MainCarouselProps {
  qq: number;
  jj: number;
  carouselLinks: NewsLinkProps[];
  emitValueWidth: (value: React.SetStateAction<number>) => void;
}

const MainCarousel: FC<MainCarouselProps> = ({ jj, qq, carouselLinks, emitValueWidth }) => {
  const [width, setWidth] = useState(0);
  const getLinkContainerWidth = (widthLink: React.SetStateAction<number>) => {
    setWidth(widthLink);
    // console.log(width);
    emitValueWidth(width);
  };

  return (
    <div className={styles["carousel-tape"]}>
      {carouselLinks &&
        carouselLinks.map((link, index) => (
          <NewsLinkContainer
            key={index}
            isClear={index === qq || jj === index}
            link={link}
            emitValueWidth={getLinkContainerWidth}
          />
        ))}
    </div>
  );
};

export default MainCarousel;

/*
   v-for="(carouselLink, index) in carouselLinks"
      :key="index"
      :isClear="index === qq || jj === index"
      :newsLinkTitle="carouselLink.title"
      :newsLinkDate="carouselLink.date"
      :newsLinkId="carouselLink.id"
      @getLinkContainerWidth="getLinkContainerWidth" 
*/
