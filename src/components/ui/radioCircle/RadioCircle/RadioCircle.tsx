import React, { FC } from "react";
import styles from "./RadioCircle.module.scss";
import RadioCircleItem, { IRadioCircleItem } from "../RadioCircleItem/RadioCircleItem";

// export interface IRadioCircleItem {
//     value: string;
//     title: string;
//   }

interface RadioCircleProps {
  radioItems: IRadioCircleItem[];
  currentValue: string;
  emitValue: (value: string) => void;
}

const RadioCircle: FC<RadioCircleProps> = ({ radioItems, currentValue, emitValue }) => {
  const onChangeRadioItem = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["radio-circle"]}>
      <div className={styles["radio-circle__items-container"]}>
        {radioItems.map((item, index) => (
          <RadioCircleItem
            key={index}
            value={item.value}
            title={item.title}
            isActive={item.value === currentValue}
            emitValue={onChangeRadioItem}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioCircle;
