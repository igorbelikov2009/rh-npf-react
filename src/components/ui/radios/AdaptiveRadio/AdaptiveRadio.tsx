import React, { FC, SetStateAction, useState } from "react";
import AdaptiveRadioItem, { IAdaptiveRadioItem } from "../AdaptiveRadioItem/AdaptiveRadioItem";
import styles from "./AdaptiveRadio.module.scss";

interface AdaptiveRadioProps {
  radioItems: IAdaptiveRadioItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  initialValue: string;
}

const AdaptiveRadio: FC<AdaptiveRadioProps> = ({ radioItems, initialValue, emitValue }) => {
  const [valueRadio, setValueRadio] = useState<SetStateAction<string>>(initialValue);
  const [, setIdOption] = useState("0");

  const onChangeRadio = (value: React.SetStateAction<string>, id: string) => {
    setValueRadio(value);
    setIdOption(id);
    emitValue(value, id);
  };

  return (
    <div className={styles["adaptive-radio"]}>
      {radioItems.map((item, index) => (
        <AdaptiveRadioItem
          key={index}
          title={item.title}
          value={item.value}
          id={item.id}
          name={item.name}
          isActive={item.value === valueRadio}
          emitValue={onChangeRadio}
        />
      ))}
    </div>
  );
};

export default AdaptiveRadio;
