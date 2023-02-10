import React, { FC, useState } from "react";
import { IOptionItem } from "../../../select/OptionsBlock/OptionsBlock";
import { IAdaptiveRadioItem } from "../../AdaptiveRadioItem/AdaptiveRadioItem";
import RadioListOption from "../RadioListOption/RadioListOption";
import styles from "./RadioListOptionBlock.module.scss";

interface OptionsBlockProps {
  radioItems: IAdaptiveRadioItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  onClickOptionsBlock: () => void;
  currentValue: string;
}

const RadioListOptionBlock: FC<OptionsBlockProps> = ({ radioItems, emitValue, onClickOptionsBlock, currentValue }) => {
  const [selectedValue, setSelectedValue] = useState(currentValue);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idOption, setIdOption] = useState("0");

  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    setSelectedValue(value);
    setIdOption(id);
    emitValue(value, id);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickOptionsBlock}>
      <div className={styles["scrollable-block"]}>
        {radioItems.map((option, index) => (
          <RadioListOption
            key={index}
            date={option.title}
            value={option.value}
            id={option.id}
            isActive={option.value === selectedValue}
            emitValue={onChangeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioListOptionBlock;
