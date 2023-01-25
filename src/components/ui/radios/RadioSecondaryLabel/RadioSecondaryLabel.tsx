import React, { FC, useState } from "react";
import styles from "./RadioSecondaryLabel.module.scss";

export interface RadioSecondaryLabelProps {
  value: string;
  title: string;
  name: string;
  isActive?: boolean;
  emitValue: (event: any) => void;
}
const RadioSecondaryLabel: FC<RadioSecondaryLabelProps> = ({ value, title, isActive, name, emitValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueRadio, setValueRadio] = useState<string>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValueRadio(event.target.value);

    emitValue(event.target.value);
    // console.log(valueRadio);
  };

  return (
    <label className={isActive ? styles["radio-secondary-label_active"] : styles["radio-secondary-label"]}>
      <input
        className={styles["radio-secondary-label__field"]}
        type="radio"
        value={value}
        name={name}
        onChange={radioHandler}
      />

      <p className={styles["radio-secondary-label__title"]}>{title}</p>
    </label>
  );
};

export default RadioSecondaryLabel;
