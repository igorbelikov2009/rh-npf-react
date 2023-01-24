import React, { FC, useState } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
  //   value: number;
}

const Slider: FC<SliderProps> = ({ title, name, min, max, step }) => {
  const [value, setValue] = useState(0);

  const emitValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValue(Number(event.target.value));
    console.log(value);
  };

  return (
    <div className={styles["slider"]}>
      <div className={styles["slider__description"]}>
        <p className={styles["slider__title"]}>{title}</p>

        <p className={styles["slider__output"]}>{value}</p>
      </div>

      <input
        className={styles["slider-bicolor"]}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={emitValue}
      />
    </div>
  );
};

export default Slider;
