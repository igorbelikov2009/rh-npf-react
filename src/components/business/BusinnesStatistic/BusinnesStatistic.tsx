import React from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./BusinnesStatistic.module.scss";

interface ICard {
  icon: string;
  title: string;
}

const BusinnesStatistic = () => {
  const cards: ICard[] = [
    {
      icon: "Invest",
      title: "Полная прозрачность инвестиционного процесса",
    },
    {
      icon: "Group",
      title: "Представители крупных международных компаний составляют Попечительский Совет Фонда",
    },
    {
      icon: "Stock",
      title: "Возможность гибкого формирования корпоративной пенсионной программы",
    },
    {
      icon: "Partner",
      title: "Команда высококлассных специалистов в области управления пенсионными фондами",
    },
  ];

  return (
    <section className={styles["businnes-statistic"]}>
      <h2 className={styles["businnes-statistic__heading"]}>
        Для заключения договора негосударственного пенсионного обеспечения вы можете обратиться в офис Фонда. Договор
        будет оформлен на основании пенсионных правил Фонда по пенсионной Схеме 1, с именными пенсионными счетами или
        Схеме 2. С солидарным пенсионным счетом.
      </h2>

      <h2 className={styles["businnes-statistic__subheading"]}>Преимущества Фонда</h2>

      <div className={styles["businnes-statistic__container"]}>
        {cards.map((card, index) => (
          <div key={index} className={styles["businnes-statistic__card"]}>
            <div className={styles["businnes-statistic__icon"]}>
              <DarkIcon icon={card.icon} />
            </div>

            <p className={styles["businnes-statistic__title"]}>{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinnesStatistic;
