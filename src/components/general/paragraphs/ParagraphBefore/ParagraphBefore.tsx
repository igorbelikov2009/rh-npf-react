import React, { FC } from "react";
import { ParagraphProps } from "../Paragraph/Paragraph";
import styles from "./ParagraphBefore.module.scss";

const ParagraphBefore: FC<ParagraphProps> = ({ text }) => {
  return <p className={styles["paragraph-before"]}>{text}</p>;
};

export default ParagraphBefore;
