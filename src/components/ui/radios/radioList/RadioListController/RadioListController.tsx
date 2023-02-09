import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../AdaptiveRadioItem/AdaptiveRadioItem";
import "./RadioListController.scss";

interface RadioListControllerProps {
  value: string;
  isVisible: boolean;
  radioItems: IAdaptiveRadioItem[];
  onClickController: () => void;
}

const RadioListController: FC<RadioListControllerProps> = ({ value, isVisible, radioItems, onClickController }) => {
  return (
    <div className="radio-list-controller">
      <div className="radio-list-controller__changing-title">
        <div className={isVisible ? "radio-list-controller__border_gray" : "radio-list-controller__border_white"}>
          <div
            className={
              isVisible
                ? "radio-list-controller__container_backgr-gray"
                : "radio-list-controller__container_backgr-white"
            }
            onClick={onClickController}
          >
            <div className="radio-list-controller__controller-date">
              <div>
                <p className="radio-list-controller-date">{value}</p>
              </div>
            </div>

            <div className="radio-list-controller__icon">
              <img
                className={
                  isVisible ? "radio-list-controller__image_rotate-180" : "radio-list-controller__image_rotate-0"
                }
                src="/icons/triple/Arrow Down/Dark.svg"
                alt="Arrow Down"
              />
            </div>
          </div>

          <div
            className={
              isVisible ? "radio-list-controller__white-line_height-2" : "radio-list-controller__white-line_height-1"
            }
          >
            <div
              className={
                isVisible ? "radio-list-controller__black-line_width-0" : "radio-list-controller__black-line_width-50"
              }
            ></div>

            <div
              className={
                isVisible ? "radio-list-controller__black-line_width-0" : "radio-list-controller__black-line_width-50"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioListController;
