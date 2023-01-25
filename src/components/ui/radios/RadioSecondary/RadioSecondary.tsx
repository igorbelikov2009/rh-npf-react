import React, { FC, SetStateAction, useState } from "react";
import { RadioItemProps } from "../../../mainPage/calculator/Calc/Calc";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

interface RadioSecondaryProps {
  radioItems: RadioItemProps[];
  // emitValue: (event: React.ChangeEvent<HTMLInputElement>) => void;

  emitValue: (event: React.SetStateAction<string>) => void;
}

const RadioSecondary: FC<RadioSecondaryProps> = ({ radioItems, emitValue }) => {
  const [valueRadio, setValueRadio] = useState<SetStateAction<string>>("65");

  const onChangeRadio = (value: string) => {
    console.log(value);
    setValueRadio(value);

    if (valueRadio) {
      emitValue(valueRadio);
    }
    console.log(value);
  };

  return (
    <div className={styles["radio-secondary"]}>
      {radioItems.map((item) => (
        <RadioSecondaryLabel
          key={item.value}
          title={item.title}
          value={item.value}
          name={item.name}
          isActive={item.value === valueRadio}
          emitValue={onChangeRadio}
        />
      ))}
    </div>
  );
};

export default RadioSecondary;
