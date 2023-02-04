import React from "react";
import ExpandingAnswer, { IObjectQuestionsAnswers } from "../../general/expanding/ExpandingAnswer/ExpandingAnswer";
import QuestionAnswerTable from "../QuestionAnswerTable/QuestionAnswerTable";
import styles from "./QuestionsAnswers.module.scss";

const QuestionsAnswers = () => {
  const arrayQuestionsAnswers: IObjectQuestionsAnswers[] = [
    {
      question: "Могу ли я перевести в АО НПФ «Ренессанс пенсии» пенсионные накопления (накопительную пенсию)?",
      answer: [
        " АО НПФ «Ренессанс пенсии» в настоящий момент не занимается управлением накопительной части государственной пенсии, ориентирован на работу по пенсионным программам в рамках негосударственного пенсионного обеспечения.",
      ],
      isParagraph: true,
    },
    {
      question: "В чем преимущества участия в пенсионной программе над долгосрочным вкладом в банке?",
      answer: [
        "Участникам предоставляется возможность увеличения собственных вложенных средств за счет инвестиционного дохода и взносов компании. Софинансирование компании, предусмотренное большинством пенсионных программ, существенно увеличивает вклад сотрудника.",
        "Участникам пенсионных программ предоставляются налоговые льготы.",
      ],
      isParagraph: true,
    },
    {
      question: "Какие гарантии того, что Фонд выполнит свои обязательства?",
      answer: [
        "Фонд отвечает по своим обязательствам всем принадлежащим ему имуществом в соответствии с Федеральным законом от 07.05.1998 №75-ФЗ «О негосударственных пенсионных фондах». За деятельностью Фонда осуществляется жесткий контроль со стороны Банка России. Специализированный депозитарий осуществляет ежедневный контроль над составом инвестиционного портфеля Фонда. При нарушении законодательно установленных требований к инвестированию, специализированный депозитарий незамедлительно информирует об этом Банк России.",
        "По закону Фонд должен проходить ежегодные независимые аудиторские и актуарные проверки. Данные таких проверок, результаты деятельности Фонда, публикуемые в открытом доступе на сайте Банка России, позволяют корпоративным клиентам и частным лицам получать достоверную информацию о финансовом состоянии Фонда.",
      ],
      isParagraph: true,
    },
    {
      question: "Что такое страховой резерв?",
      answer: [
        "Страховой резерв - это средства, формируемые Фондом для обеспечения дополнительных гарантий выполнения долгосрочных обязательств перед участниками. Страховой резерв учитывается отдельно от собственных средств Фонда и не используется для покрытия расходов Фонда. В соответствии с законодательством РФ страховой резерв Фонда должен составлять не менее 5% от резерва покрытия пенсионных обязательств.",
      ],
      isParagraph: true,
    },
    {
      question: "Как начисляется инвестиционный доход?",
      answer: [
        "Доход рассчитывается Фондом ежегодно по итогам инвестирования пенсионных резервов за истекший год. Величина инвестиционного дохода по каждому отдельному счету зависит от периода инвестирования средств в течение года.",
        "АО НПФ 'Пенсионные решения' (ранее - АО НПФ 'Ренессанс пенсии') ежегодно отчитывается перед участниками о состоянии их пенсионных счетов и начисленном инвестиционном доходе. Информацию об инвестициях за прошедший год участники могут найти в личном кабинете на сайте Фонда или позвонив по телефону горячей линии.",
      ],
      isParagraph: true,
    },
  ];

  return (
    <section className={styles["questions-answers"]}>
      <h1 className={styles["questions-answers__heading"]}>Вопросы и ответы</h1>

      {arrayQuestionsAnswers.map((obj, index) => (
        <ExpandingAnswer
          key={index}
          question={obj.question}
          answer={obj.answer}
          isParagraph={obj.isParagraph}
          isParagraphBefore={obj.isParagraphBefore}
        />
      ))}

      <QuestionAnswerTable />
    </section>
  );
};

export default QuestionsAnswers;
