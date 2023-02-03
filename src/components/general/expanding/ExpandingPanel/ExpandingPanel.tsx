import React, { FC } from "react";
import DarkIcon from "../../DarkIcon/DarkIcon";
import styles from "./ExpandingPanel.module.scss";

export interface ExpandingPanelProps {
  isContentVisible: boolean;
  tableName: string;
  onClickExpanding: () => void;
}

const ExpandingPanel: FC<ExpandingPanelProps> = ({ isContentVisible, tableName, onClickExpanding }) => {
  return (
    <div className={styles["expanding__row"]} onClick={onClickExpanding}>
      <h2 className={styles["expanding__title"]}>{tableName}</h2>

      <button className="expanding__button">
        <div className={isContentVisible ? styles["expanding__plus-rotate"] : styles["expanding__plus"]}>
          <DarkIcon isDecreased={true} icon="Plus Thin" />
        </div>

        <div className={isContentVisible ? styles["expanding__minus-rotate"] : styles["expanding__minus"]}>
          <DarkIcon isDecreased={true} icon="Minus Thin" />
        </div>
      </button>
    </div>
  );
};

export default ExpandingPanel;
