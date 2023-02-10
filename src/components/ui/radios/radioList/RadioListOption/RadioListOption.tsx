import React, { FC, useState } from "react";
import styles from "./RadioListOption.module.scss";

interface OptionProps {
  isActive: boolean;
  date: string;
  value: string;
  id: string;
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
}

const RadioListOption: FC<OptionProps> = ({ isActive, date, value, id, emitValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueRadio, setValueRadio] = useState("");

  const selectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio(event.target.value);
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["option-active"] : styles["option"]}>
      {date}
      <input className={styles["input"]} type="radio" value={value} id={id} name="date" onChange={selectHandler} />
    </label>
  );
};

export default RadioListOption;
