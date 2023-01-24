import React, { FC } from "react";
import { RadioItemProps } from "../../../mainPage/calculator/Calc/Calc";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

interface RadioSecondaryProps {
  radioItems: RadioItemProps[];
}

const RadioSecondary: FC<RadioSecondaryProps> = ({ radioItems }) => {
  return (
    <div className={styles["radio-secondary"]}>
      {radioItems.map((item) => (
        <RadioSecondaryLabel key={item.value} title={item.title} valueRadio={item.value} isActive />
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
