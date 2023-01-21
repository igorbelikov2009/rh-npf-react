/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import styles from "./Logotypes.module.scss";
import logoColored from "../../../assets/logotype/logoColored.svg";
import logoWhite from "../../../assets/logotype/logoWhite.svg";
import logoColoredSmall from "../../../assets/logotype/logoColoredSmall.svg";
import logoWhiteSmall from "../../../assets/logotype/logoWhiteSmall.svg";

interface LogotypesProps {
  isBackgroundWhite: Boolean;
}

const Logotypes: FC<LogotypesProps> = ({ isBackgroundWhite }) => {
  // console.log(isBackgroundWhite);

  return (
    <a className={styles["logotype-link"]} href="#">
      <div className={styles["logotype-link__block"]}>
        <img src={isBackgroundWhite ? logoColored : logoWhite} alt="logotype" />
      </div>

      <div className={styles["logotype-link__block"]}>
        <img src={isBackgroundWhite ? logoColoredSmall : logoWhiteSmall} alt="logotype" />
      </div>
    </a>
  );
};

export default Logotypes;
