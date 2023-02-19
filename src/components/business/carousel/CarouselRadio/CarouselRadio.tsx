import React, { FC } from "react";
import styles from "./CarouselRadio.module.scss";

interface CarouselRadioProps {
  value: string;
  emitValue: (event: string) => void;
}

const CarouselRadio: FC<CarouselRadioProps> = ({ emitValue, value }) => {
  const onChangeCarouselRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <>
      <input
        className={styles["carousel__radio"]}
        type="radio"
        name="card"
        value={value}
        onChange={onChangeCarouselRadio}
      />
    </>
  );
};

export default CarouselRadio;
