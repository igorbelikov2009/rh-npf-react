import React, { FC, useState } from "react";
import { RadioItemProps } from "../../../mainPage/calculator/Calc/Calc";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

interface RadioSecondaryProps {
  radioItems: RadioItemProps[];
  // emitValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emitValue: (event: React.SetStateAction<number>) => void;
}

const RadioSecondary: FC<RadioSecondaryProps> = ({ radioItems, emitValue }) => {
  const [valueRadio, setValueRadio] = useState(65);

  const onChangeRadio = (value: any) => {
    setValueRadio(value);
    emitValue(value);
    console.log(value, valueRadio);
  };

  return (
    <div className={styles["radio-secondary"]}>
      {radioItems.map((item) => (
        <RadioSecondaryLabel
          key={item.value}
          title={item.title}
          value={item.value}
          isActive={item.value === valueRadio}
          emitValue={onChangeRadio}
        />
      ))}

      {/* //   v-for="(radioItem, index) in radioItems"
    //   :key="index"
    //   :value="radioItem.value"
    //   :isActive="radioItem.value === valueRadio"
    //   :title="radioItem.title"
    // onCha ="onChangeRadio"
    */}
    </div>
  );
};

export default RadioSecondary;
