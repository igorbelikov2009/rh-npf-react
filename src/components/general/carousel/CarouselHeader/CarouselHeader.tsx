import React, { FC } from "react";
import Arrows from "../Arrows/Arrows";
import styles from "./CarouselHeader.module.scss";

export interface CarouselHeaderProps {
  headerTitle?: string;
  headerSubtitle?: string;
  isNoCursorLeft: boolean;
  isBlurredLeft: boolean;
  isNoCursorRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
  // arrows: ArrowsProps;
}

const CarouselHeader: FC<CarouselHeaderProps> = ({
  headerTitle,
  headerSubtitle,
  isBlurredLeft,
  isBlurredRight,
  isNoCursorLeft,
  isNoCursorRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <section className={styles["carousel-header"]}>
      <div className={styles["carousel-header__headings"]}>
        <h1 v-if="ifHasHeaderTitle" className={styles["carousel-header__title"]}>
          {headerTitle}
        </h1>
        <p v-if="ifHasHeaderSubtitle" className={styles["carousel-header__subtitle"]}>
          {headerSubtitle}
        </p>

        <Arrows
          isBlurredLeft={isBlurredLeft}
          isBlurredRight={isBlurredRight}
          isNoCursorLeft={isNoCursorLeft}
          isNoCursorRight={isNoCursorRight}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </section>
  );
};

export default CarouselHeader;
