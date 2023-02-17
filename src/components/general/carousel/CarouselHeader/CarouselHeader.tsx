import React, { FC } from "react";
import Arrows from "../Arrows/Arrows";
import styles from "./CarouselHeader.module.scss";

export interface CarouselHeaderProps {
  headerTitle?: string;
  headerSubtitle?: string;
  isHoveredLeft: boolean;
  isBlurredLeft: boolean;
  isHoveredRight: boolean;
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
  isHoveredLeft,
  isHoveredRight,
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
          isHoveredLeft={isHoveredLeft}
          isHoveredRight={isHoveredRight}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </section>
  );
};

export default CarouselHeader;
