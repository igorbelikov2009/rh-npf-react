import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import AdaptiveRadioItem from "../AdaptiveRadioItem/AdaptiveRadioItem";
import styles from "./AdaptiveRadio.module.scss";

interface AdaptiveRadioProps {
  radioItems: IOptionItem[];
  emitValue: (event: any, id: string) => void;
  currentValue: string;
}

const AdaptiveRadio: FC<AdaptiveRadioProps> = ({ radioItems, currentValue, emitValue }) => {
  const onChangeRadio = (value: React.SetStateAction<string>, id: string) => {
    emitValue(value, id);
  };

  return (
    <div className={styles["adaptive-radio"]}>
      {radioItems.map((item) => (
        <AdaptiveRadioItem
          key={item.value}
          title={item.date}
          value={item.value}
          id={item.id}
          name={item.name}
          isActive={item.value === currentValue}
          emitValue={onChangeRadio}
        />
      ))}
    </div>
  );
};

export default AdaptiveRadio;
