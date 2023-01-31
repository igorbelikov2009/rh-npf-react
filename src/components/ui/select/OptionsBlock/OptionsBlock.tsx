import React, { FC, useState } from "react";
import Option from "../Option/Option";
import styles from "./OptionsBlock.module.scss";

interface IOptionItem {
  date: string;
  value: string;
  id: string;
}

interface OptionsBlockProps {
  selectionOptions: IOptionItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
}

const OptionsBlock: FC<OptionsBlockProps> = ({ selectionOptions, emitValue }) => {
  const [selectedValue, setSelectedValue] = useState("2021-11-30T09:00:00.000Z");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idOption, setIdOption] = useState("0");

  const onClickSelectionBlock = () => {};

  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    setSelectedValue(value);
    setIdOption(id);
    emitValue(value, id);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickSelectionBlock}>
      <div className={styles["scrollable-block"]}>
        {selectionOptions.map((option, index) => (
          <Option
            key={index}
            date={option.date}
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

export default OptionsBlock;

/*
    //   <GuiSelectionOption
    //     v-for="(selectionElement, index) in selectionElements"
    //     :key="index"
    //     :date="selectionElement.date"
    //     :value="selectionElement.value"
    //     :id="selectionElement.id"
    //     :isActive="selectionElement.value === selectedValue"
    //     @change="onChangeSelectionBlock"
    //   />
*/