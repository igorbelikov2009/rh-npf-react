import React, { FC } from "react";
import { IOptionItem } from "../../../../../models/types";
import Controller from "../Controller/Controller";
import OptionBlock from "../OptionBlock/OptionBlock";
import styles from "./ControllerOption.module.scss";

interface ControllerOptionProps {
  isRadioListVisible: boolean;
  optionsItems: IOptionItem[];
  currentValue: string;
  onClickController: () => void;
  emitOnChangeRadioListBlock: (value: React.SetStateAction<string>, id: string) => void;
  emitOnClickRadioListBlock: () => void;
}

const ControllerOption: FC<ControllerOptionProps> = ({
  isRadioListVisible,
  optionsItems,
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
          optionsItems={optionsItems}
          currentValue={currentValue}
          emitValue={onChangeRadioListBlock}
          onClickOptionsBlock={onClickRadioListBlock}
        />
      </div>
    </div>
  );
};

export default ControllerOption;
