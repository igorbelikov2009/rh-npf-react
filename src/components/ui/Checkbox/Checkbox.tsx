import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  checkedValue: boolean;
  toogleChecked: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ checkedValue, toogleChecked }) => {
  const checkboxHandler = () => {
    toogleChecked();
  };

  return (
    <label role="checkbox" aria-checked={true} aria-labelledby="foo" className={styles["r-checkbox"]}>
      <span className={styles["r-checkbox__checker"]}></span>

      <div
        className={checkedValue ? styles["r-checkbox__switch_visible"] : styles["r-checkbox__switch_invisible"]}
      ></div>

      <input
        type="checkbox"
        checked={checkedValue}
        onChange={checkboxHandler}
        className={styles["r-checkbox__input"]}
      />

      <div className={styles["r-checkbox__agree-link"]}>Выход на пенсию в 55/60 лет*</div>
    </label>
  );
};

export default Checkbox;
