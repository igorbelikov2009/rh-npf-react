import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../../../../models/types";
import Option from "../Option/Option";
import styles from "./OptionBlock.module.scss";

interface OptionsBlockProps {
  radioItems: IAdaptiveRadioItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  onClickOptionsBlock: () => void;
  currentValue: string;
}

// ControllerOption здесь всё чётко
const OptionBlock: FC<OptionsBlockProps> = ({ radioItems, emitValue, onClickOptionsBlock, currentValue }) => {
  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    emitValue(value, id);
    // console.log(value, id);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickOptionsBlock}>
      <div className={styles["scrollable-block"]}>
        {radioItems.map((option, index) => (
          <Option
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

export default OptionBlock;
