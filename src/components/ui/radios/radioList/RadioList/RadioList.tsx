import React, { FC, useState } from "react";
import { IAdaptiveRadioItem } from "../../AdaptiveRadioItem/AdaptiveRadioItem";
import RadioListController from "../RadioListController/RadioListController";
import "./RadioList.scss";

export interface RadioListProps {
  // title: string
  // value: string
  // id: string
  isRadioListVisible: boolean;
  radioItems: IAdaptiveRadioItem[];
  currentValue: string;
  currentId: string;
}

const RadioList: FC<RadioListProps> = ({ isRadioListVisible, radioItems, currentValue, currentId }) => {
  const [radioValue, setRadioValue] = useState(currentValue);
  const [id, setId] = useState(currentId);

  const onClickRadioListController = () => {};

  return (
    <div className="gui-radio-list">
      <RadioListController
        value={radioValue}
        isVisible={isRadioListVisible}
        onClickController={onClickRadioListController}
      />
      {/* <GuiRadioListController
      :value="radioValue"
      :ifRadioListVisible="isRadioListVisible"
      :radioListElements="radioListElements"
      @onClickRadioListController="onClickRadioListController"
    /> */}

      <div
        className={isRadioListVisible ? "gui-radio-list__select-options_show" : "gui-radio-list__select-options_hide"}
      >
        {/* <GuiRadioListOptionBlock
        :radioListElements="radioListElements"
        @onChangeRadioListBlock="onChangeRadioListBlock"
        @onClickRadioListBlock="onClickRadioListBlock"
      /> */}
      </div>
    </div>
  );
};

export default RadioList;
