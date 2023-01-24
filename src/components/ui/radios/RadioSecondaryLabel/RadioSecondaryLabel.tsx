import React, { FC, useState } from "react";
import styles from "./RadioSecondaryLabel.module.scss";

export interface RadioSecondaryLabelProps {
  valueRadio: number;
  title: string;
  isActive: boolean;
}
const RadioSecondaryLabel: FC<RadioSecondaryLabelProps> = ({ title, isActive, valueRadio }) => {
  const [value, setValue] = useState(0);

  const emitValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    console.log(value);
    valueRadio = value;
  };

  return (
    <label className={isActive ? styles["radio-secondary-label_active"] : styles["radio-secondary-label"]}>
      <input className={styles["radio-secondary-label__field"]} type="radio" value={value} onChange={emitValue} />

      <p className={styles["radio-secondary-label__title"]}>{title}</p>
    </label>
  );
};

export default RadioSecondaryLabel;
