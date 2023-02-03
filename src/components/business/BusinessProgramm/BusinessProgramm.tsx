import React from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./BusinessProgramm.module.scss";

interface ICard {
  icon: string;
  header: string;
  titles: string[];
}

const BusinessProgramm = () => {
  const cards: ICard[] = [
    {
      icon: "Case",
      header: "Работодатель (Вкладчик)",
      titles: ["Определяет условия программы", "Уплачивает взносы в фонд"],
    },
    {
      icon: "Man",
      header: "Сотрудник (Участник)",
      titles: [
        "Заключает личный договор",
        "Уплачивает взносы в фонд",
        "Выполняет условия программы",
        "Получает пенсию или выкупную сумму",
      ],
    },
    {
      icon: "Bank",
      header: "Фонд",
      titles: [
        "Аккумулирует взносы вкладчика (Участника) ведет учет, распределяет нвестиционный доход",

        "Выплачивает негосударственные пенсии участникам",
      ],
    },
    {
      icon: "Settings",
      header: "Управляющая компания",
      titles: [
        "Определяет условия программы",
        "Уплачивает взносы в фонд",
        "Управляет портфелем ценных бумаг",
        "Инвестирует с целью получения дохода",
      ],
    },
  ];

  return (
    <section className={styles["business-programm"]}>
      <div className={styles["business-programm__container"]}>
        <div className={styles["business-programm__header"]}>
          <h1 className={styles["business-programm__heading"]}>Как работает корпоративная пенсионная программа</h1>
        </div>

        <div className={styles["business-programm__block"]}>
          {cards.map((card, index) => (
            <div key={index} className={styles["card"]}>
              <div className={styles["card__top-block"]}>
                <div className={styles["card__icon"]}>
                  <DarkIcon icon={card.icon} />
                </div>

                <h2 className={styles["card__header"]}>{card.header}</h2>
              </div>

              <div className={styles["card__titles"]}>
                {card.titles.map((title, index) => (
                  <p key={index} className={styles["card__title"]}>
                    {title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProgramm;
