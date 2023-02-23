import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import Option from "../Option/Option";
import styles from "./OptionsBlock.module.scss";

interface OptionsBlockProps {
  arrayOptionsBlock: IOptionItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  onClickOptionsBlock: () => void;
  currentValue: string;
}

const OptionsBlock: FC<OptionsBlockProps> = ({ arrayOptionsBlock, emitValue, onClickOptionsBlock, currentValue }) => {
  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    emitValue(value, id);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickOptionsBlock}>
      <div className={styles["scrollable-block"]}>
        {arrayOptionsBlock.map((option, index) => (
          <Option
            key={index}
            date={option.date}
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

export default OptionsBlock;
