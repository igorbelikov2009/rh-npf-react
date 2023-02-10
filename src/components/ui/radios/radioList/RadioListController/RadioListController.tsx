import React, { FC } from "react";
import styles from "./RadioListController.module.scss";

interface RadioListControllerProps {
  value: string;
  isVisible: boolean;
  onClickController: () => void;
}

const RadioListController: FC<RadioListControllerProps> = ({ value, isVisible, onClickController }) => {
  return (
    <div className={styles["controller"]}>
      <div className={styles["changing-title"]}>
        <div className={isVisible ? styles["border_gray"] : styles["border_white"]}>
          <div
            className={isVisible ? styles["container_backgr-gray"] : styles["container_backgr-white"]}
            onClick={onClickController}
          >
            <div className={styles["controller-date"]}>
              <div>
                <p className={styles["controller-date"]}>{value}</p>
              </div>
            </div>

            <div className={styles["icon"]}>
              <img
                className={isVisible ? styles["image_rotate-180"] : styles["image_rotate-0"]}
                src="/icons/triple/Arrow Down/Dark.svg"
                alt="Arrow Down"
              />
            </div>
          </div>

          <div className={isVisible ? styles["white-line_height-2"] : styles["white-line_height-1"]}>
            <div className={isVisible ? styles["black-line_width-0"] : styles["black-line_width-50"]}></div>

            <div className={isVisible ? styles["black-line_width-0"] : styles["black-line_width-50"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioListController;
