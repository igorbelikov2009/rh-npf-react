import React from "react";

import StatisticsCard, { StatisticsCardProps } from "../StatisticsCard";
import styles from "./index.module.scss";

const Statistics = () => {
  const cards: StatisticsCardProps[] = [
    {
      icon: "Calendar",
      title: "17 лет",
      span: "на рынке",
      subtitle: 'Фонд "Ренессанс пенсии" основан в 2002 году',
    },
    {
      icon: "High Rate",
      title: "Высокий ",
      span: "рейтинг",
      subtitle: "Надежность ruАА- по оценке Эксперт РА",
    },
    {
      icon: "Users",
      title: "41 000",
      span: "человек",
      subtitle: " участники пенсионной программы",
    },
    {
      icon: "Partner",
      title: "150",
      span: "компаний",
      subtitle: "заботятся о пенсиях сотрудников",
    },
    {
      icon: "Bank",
      title: "17 млрд",
      span: "рублей",
      subtitle: "пенсионных резервов в Фонде",
    },
  ];

  return (
    <section className={styles["statistics"]}>
      <div className={styles["statistics__container"]}>
        <h2 className={styles["statistics__heading"]}>Фонд в цифрах</h2>

        <div className={styles["statistics__block"]}>
          {cards.map((card) => (
            <StatisticsCard
              key={card.icon}
              icon={card.icon}
              span={card.span}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
