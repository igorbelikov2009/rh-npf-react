import React, { FC, useState } from "react";
import styles from "./AdaptiveRadioItem.module.scss";

export interface IAdaptiveRadioItem {
  value: string;
  id: string;
  title: string;
  name?: string;
}

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  name?: string;
  isActive: boolean;
  emitValue: (event: any, id: string) => void;
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ value, id, title, name, isActive, emitValue }) => {
  const [, setValueRadio] = useState<string>();

  // React.ChangeEvent<HTMLInputElement>
  const radioHandler = (event: any) => {
    setValueRadio(event.target.value);
    emitValue(event.target.value, id);
    // console.log(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["adaptive-radio-item_active"] : styles["adaptive-radio-item"]}>
      {title}
      <input
        className={styles["adaptive-radio-item__input"]}
        type="radio"
        name={name}
        value={value}
        id={id}
        onClick={radioHandler}
      />
    </label>
  );
};

export default AdaptiveRadioItem;
