import React, { FC, SetStateAction, useState } from "react";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

// interface ValueRadioItem {
//   ageMan: string;
//   ageWoman: string;
// }

export interface RadioItemProps {
  value: string;
  title: string;
  name: string;
}

export interface RadioProps {
  radioItems: RadioItemProps[];
  emitValue: (event: React.SetStateAction<string>) => void;
}

const RadioSecondary: FC<RadioProps> = ({ radioItems, emitValue }) => {
  const [valueRadio, setValueRadio] = useState<SetStateAction<string>>("65");

  const onChangeRadio = (value: SetStateAction<string>) => {
    setValueRadio(value);
    if (valueRadio) {
      emitValue(value);
    }
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
