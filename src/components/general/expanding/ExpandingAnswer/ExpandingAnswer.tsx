import React, { FC, useState } from "react";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import styles from "./ExpandingAnswer.module.scss";

export interface ExpandingAnswerProps {
  question: string;
  answer: string[];
}

const ExpandingAnswer: FC<ExpandingAnswerProps> = ({ question, answer }) => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={styles["expanding"]}>
      <ExpandingPanel isContentVisible={isVisible} panelName={question} onClickExpanding={expanderHandler} />

      {isVisible && (
        <div
          className={isVisible ? styles["expanding__content-enter-active"] : styles["expanding__content-leave-active"]}
        >
          <div className={styles["expanding__content"]}>
            {answer.map((paragraph, index) => (
              <p key={index} className={styles["expanding__paragraph"]}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandingAnswer;
