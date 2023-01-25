import React, { FC, useState } from "react";
import styles from "./RadioSecondaryLabel.module.scss";

export interface RadioSecondaryLabelProps {
  value: any;
  title: string;
  isActive: boolean;
  emitValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioSecondaryLabel: FC<RadioSecondaryLabelProps> = ({ title, isActive, value, emitValue }) => {
  const [valueRadio, setValueRadio] = useState(0);

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio(Number(event.target.value));
    value = valueRadio;
    emitValue(value);
    console.log(value);
  };

  return (
    <label className={isActive ? styles["radio-secondary-label_active"] : styles["radio-secondary-label"]}>
      <input className={styles["radio-secondary-label__field"]} type="radio" value={value} onChange={onChangeRadio} />

      <p className={styles["radio-secondary-label__title"]}>{title}</p>
    </label>
  );
};

export default RadioSecondaryLabel;
