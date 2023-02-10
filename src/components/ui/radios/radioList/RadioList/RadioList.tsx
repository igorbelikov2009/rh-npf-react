import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../AdaptiveRadioItem/AdaptiveRadioItem";
import RadioListController from "../RadioListController/RadioListController";
import RadioListOptionBlock from "../RadioListOptionBlock/RadioListOptionBlock";
import styles from "./RadioList.module.scss";

export interface RadioListProps {
  isRadioListVisible: boolean;
  radioItems: IAdaptiveRadioItem[];
  currentValue: string;
  currentId: string;
  onClickController: () => void;
  emitOnChangeRadioListBlock: (value: React.SetStateAction<string>, id: string) => void;
  emitOnClickRadioListBlock: () => void;
}

const RadioList: FC<RadioListProps> = ({
  isRadioListVisible,
  radioItems,
  currentValue,
  currentId,
  onClickController,
  emitOnChangeRadioListBlock,
  emitOnClickRadioListBlock,
}) => {
  const onClickRadioListController = () => {
    onClickController();
  };

  const onChangeRadioListBlock = (value: React.SetStateAction<string>, id: string) => {
    emitOnChangeRadioListBlock(value, id);
  };
  const onClickRadioListBlock = () => {
    emitOnClickRadioListBlock();
  };

  return (
    <div className={styles["list"]}>
      <RadioListController
        value={currentValue}
        isVisible={isRadioListVisible}
        onClickController={onClickRadioListController}
      />

      <div className={isRadioListVisible ? styles["select-options_show"] : styles["select-options_hide"]}>
        <RadioListOptionBlock
          radioItems={radioItems}
          currentValue={currentValue}
          emitValue={onChangeRadioListBlock}
          onClickOptionsBlock={onClickRadioListBlock}
        />
      </div>
    </div>
  );
};

export default RadioList;
