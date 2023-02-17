import React, { FC } from "react";
import "./Arrows.scss";

export interface ArrowsProps {
  isNoCursorLeft: boolean;
  isBlurredLeft: boolean;
  isNoCursorRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Arrows: FC<ArrowsProps> = ({
  isNoCursorLeft,
  isBlurredLeft,
  isNoCursorRight,
  isBlurredRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className="arrows">
      <div
        className={isNoCursorLeft ? "arrows__left-arrow_cursor-default" : "arrows__left-arrow_cursor-pointer"}
        onClick={onClickLeft}
      >
        <img className="arrows__left-image" src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredLeft ? "arrows__left-image_opacity-04" : "arrows__left-image_opacity-1"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>

      <div
        className={isNoCursorRight ? "arrows__right-arrow_cursor-default" : "arrows__right-arrow_cursor-pointer"}
        onClick={onClickRight}
      >
        <img className="arrows__right-image" src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredRight ? "arrows__right-image_opacity-04" : "arrows__right-image_opacity-1"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Arrows;
