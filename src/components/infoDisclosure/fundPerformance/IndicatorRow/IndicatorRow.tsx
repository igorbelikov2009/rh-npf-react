import React, { FC } from "react";
import styles from "./IndicatorRow.module.scss";

export interface IIndicatorRow {
  title: string;
  index: string;
  // subtitle: string;
}

const IndicatorRow: FC<IIndicatorRow> = ({ title, index }) => {
  return (
    <div className={styles["indicator-row"]}>
      <p className={styles["indicator-row__title"]}>{title}</p>

      <p className={styles["indicator-row__index"]}>{index}</p>
    </div>
  );
};

export default IndicatorRow;
