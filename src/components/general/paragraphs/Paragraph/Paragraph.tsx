import React, { FC } from "react";
import styles from "./Paragraph.module.scss";

export interface ParagraphProps {
  text: string;
}

const Paragraph: FC<ParagraphProps> = ({ text }) => {
  return <p className={styles["paragraph"]}>{text}</p>;
};

export default Paragraph;
