/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import CarouselHeader from "../../general/carousel/CarouselHeader/CarouselHeader";
import styles from "./NewsBlock.module.scss";

const NewsBlock = () => {
  const [isNoCursorLeft, setIsNoCursorLeft] = useState(true);
  const [isBlurredLeft, setIsBlurredLeft] = useState(true);
  const [isNoCursorRight, setIsNoCursorRight] = useState(false);
  const [isBlurredRight, setIsBlurredRight] = useState(false);
  const onClickLeftArrow = () => {};
  const onClickRightArrow = () => {};

  return (
    <div>
      <CarouselHeader
        headerTitle="Новости"
        isBlurredLeft={isBlurredLeft}
        isBlurredRight={isBlurredRight}
        isNoCursorLeft={isNoCursorLeft}
        isNoCursorRight={isNoCursorRight}
        onClickLeft={onClickLeftArrow}
        onClickRight={onClickRightArrow}
      />

      <div className={styles["carousel"]}>
        <div className={styles["carousel-tape"]}>
          {/* style={{"scrollableElementStyle"}} */}
          {/*  ref="scrollableElement" */}

          {/* <MainCarouselTape
      
        /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
