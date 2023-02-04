import React from "react";
import QuestionAnswerTable from "../QuestionAnswerTable/QuestionAnswerTable";
import styles from "./QuestionsAnswers.module.scss";

const QuestionsAnswers = () => {
  return (
    <section className={styles["questions-answers"]}>
      <h1 className={styles["questions-answers__heading"]}>Вопросы и ответы</h1>

      <QuestionAnswerTable />
    </section>
  );
};

export default QuestionsAnswers;
