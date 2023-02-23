import React, { FC } from "react";
import { ISpecDepositoryBlock } from "../../../../models/types";
import styles from "./SpecDepositoryBlock.module.scss";

const SpecDepositoryBlock: FC<ISpecDepositoryBlock> = ({ subheading, title, subtitle }) => {
  return (
    <div>
      <p className={styles["spec-depository__paragraph"]}>
        <span className={styles["spec-depository__subheading"]}> {subheading} </span>

        <span className={styles["spec-depository__title"]}> {title} </span>
      </p>

      <p className={styles["spec-depository__paragraph"]}>
        <span className={styles["spec-depository__title"]}> {subtitle} </span>
      </p>
    </div>
  );
};

export default SpecDepositoryBlock;
