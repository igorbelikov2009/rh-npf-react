import React, { FC } from "react";
import styles from "./SpecDepositoryBlock.module.scss";

export interface ISpecDepositoryBlock {
  subheading: string;
  title: string;
  subtitle: string;
}

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
