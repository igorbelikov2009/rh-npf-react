import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../../../../models/types";
import Controller from "../Controller/Controller";
import OptionBlock from "../OptionBlock/OptionBlock";
import styles from "./ControllerOption.module.scss";

interface ControllerOptionProps {
  isRadioListVisible: boolean;
  radioItems: IAdaptiveRadioItem[];
  currentValue: string;
  onClickController: () => void;
  emitOnChangeRadioListBlock: (value: React.SetStateAction<string>, id: string) => void;
  emitOnClickRadioListBlock: () => void;
}

const ControllerOption: FC<ControllerOptionProps> = ({
  isRadioListVisible,
  radioItems,
  currentValue,
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
      <Controller value={currentValue} isVisible={isRadioListVisible} onClickController={onClickRadioListController} />

      <div className={isRadioListVisible ? styles["select-options_show"] : styles["select-options_hide"]}>
        <OptionBlock
          radioItems={radioItems}
          currentValue={currentValue}
          emitValue={onChangeRadioListBlock}
          onClickOptionsBlock={onClickRadioListBlock}
        />
      </div>
    </div>
  );
};

export default ControllerOption;
