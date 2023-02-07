import React, { FC, SetStateAction, useState } from "react";
import RadioPrimaryLabel from "../RadioPrimaryLabel/RadioPrimaryLabel";
import { RadioItemProps } from "../RadioSecondary/RadioSecondary";
import styles from "./RadioPrimary.module.scss";

export interface RadioPrimaryProps {
  radioItems: RadioItemProps[];
  emitValue: (event: React.SetStateAction<string>) => void;
  currentValue: string;
}

const RadioPrimary: FC<RadioPrimaryProps> = ({ radioItems, currentValue, emitValue }) => {
  const [valueRadio, setValueRadio] = useState<SetStateAction<string>>(currentValue);

  const onChangeRadio = (value: SetStateAction<string>) => {
    setValueRadio(value);
    if (valueRadio) {
      emitValue(value);
    }
  };

  return (
    <div className={styles["radio-primary"]}>
      <div className={styles["radio-primary__flex-container"]}>
        {radioItems.map((item) => (
          <RadioPrimaryLabel
            key={item.value}
            title={item.title}
            value={item.value}
            name={item.name}
            isActive={item.value === valueRadio}
            emitValue={onChangeRadio}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioPrimary;
