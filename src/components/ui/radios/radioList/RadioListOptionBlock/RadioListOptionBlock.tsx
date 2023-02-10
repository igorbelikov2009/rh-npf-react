import React, { FC } from "react";
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
  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
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
            isActive={option.value === currentValue}
            emitValue={onChangeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioListOptionBlock;
