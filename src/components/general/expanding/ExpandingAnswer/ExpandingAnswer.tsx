import React, { FC, useState } from "react";
import Paragraph from "../../paragraphs/Paragraph/Paragraph";
import ParagraphBefore from "../../paragraphs/ParagraphBefore/ParagraphBefore";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import styles from "./ExpandingAnswer.module.scss";

export interface IObjectQuestionsAnswers {
  question: string;
  answer: string[];
  isParagraph?: boolean;
  isParagraphBefore?: boolean;
}

const ExpandingAnswer: FC<IObjectQuestionsAnswers> = ({ question, answer, isParagraph, isParagraphBefore }) => {
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
          {isParagraph && (
            <div className={styles["expanding__content"]}>
              <Paragraph paragraphs={answer} />
            </div>
          )}
          {isParagraphBefore && (
            <div className={styles["expanding__content"]}>
              <ParagraphBefore paragraphs={answer} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandingAnswer;
