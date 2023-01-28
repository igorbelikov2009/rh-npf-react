import React, { FC } from "react";
import { NewsLinkProps } from "../../../news/NewsLink/NewsLink";
import NewsLinkContainer from "../NewsLinkContainer/NewsLinkContainer";
import styles from "./MainCarousel.module.scss";

interface MainCarouselProps {
  qq: number;
  jj: number;
  carouselLinks: NewsLinkProps[];
}

const MainCarousel: FC<MainCarouselProps> = ({ jj, qq, carouselLinks }) => {
  return (
    <div className={styles["carousel-tape"]}>
      {carouselLinks &&
        carouselLinks.map((link, index) => (
          <NewsLinkContainer key={link.id} isClear={index === qq || jj === index} link={link} />
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
