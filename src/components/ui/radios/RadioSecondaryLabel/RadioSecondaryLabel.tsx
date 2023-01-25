import React, { FC, useState } from "react";
import { RadioLabelProps } from "../../../../models/types";
import styles from "./RadioSecondaryLabel.module.scss";

const RadioSecondaryLabel: FC<RadioLabelProps> = ({ value, title, name, isActive, emitValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueRadio, setValueRadio] = useState<string>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValueRadio(event.target.value);
    emitValue(event.target.value);
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
