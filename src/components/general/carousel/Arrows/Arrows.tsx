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
        className={isNoCursorLeft ? "arrows__left-arrow_no-cursor arrows__left-arrow" : "arrows__left-arrow"}
        onClick={onClickLeft}
      >
        <img
          className="
                  arrows__left-image arrows__not-visible
                "
          src="/icons/triple/Arrow Right/Colored.svg"
          alt="arrow"
        />

        <img
          className={isBlurredLeft ? "arrows__opacity-04 arrows__left-image" : "arrows__left-image"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>

      <div
        className={isNoCursorRight ? "arrows__right-arrow_no-cursor arrows__right-arrow" : "arrows__right-arrow"}
        onClick={onClickRight}
      >
        <img
          className="
                  arrows__right-image arrows__not-visible
                "
          src="/icons/triple/Arrow Right/Colored.svg"
          alt="arrow"
        />

        <img
          className={isBlurredRight ? "arrows__opacity-04 arrows__right-image" : "arrows__right-image"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Arrows;
