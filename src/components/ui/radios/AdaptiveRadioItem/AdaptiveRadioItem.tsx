import React, { FC, useState } from "react";
import styles from "./AdaptiveRadioItem.module.scss";

export interface IAdaptiveRadioItem {
  value: string;
  id: string;
  title: string;
  name: string;
}

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  name: string;
  isActive: boolean;
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ value, id, title, name, isActive, emitValue }) => {
  const [, setValueRadio] = useState<string>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio(event.target.value);
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["adaptive-radio-item_active"] : styles["adaptive-radio-item"]}>
      {title}
      <input
        className="adaptive-radio-item__input"
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={radioHandler}
      />
    </label>
  );
};

export default AdaptiveRadioItem;
