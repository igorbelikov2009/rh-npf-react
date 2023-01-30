import React from "react";
import InvestmentRulesCard, { InvestmentRulesCardProps } from "../InvestmentRulesCard/InvestmentRulesCard";
import styles from "./InvestmentRules.module.scss";

const InvestmentRules = () => {
  const cards: InvestmentRulesCardProps[] = [
    { icon: "Money", title: "Сохранение и приумножение средств вкладчиков и участников" },
    { icon: "Separation", title: "Диверсификация активов" },

    { icon: "Magnifier", title: "Четкий контроль и прозрачность всех операций" },
    {
      icon: "Book",
      title: "Соответствие Российским законодательным требованиям и лучшим мировым практикам",
    },
    {
      icon: "Partner",
      title: "Независимость в выборе партнеров – на основе открытых тендеров",
    },
  ];

  return (
    <div className={styles["investment-rules"]}>
      <h1 className={styles["investment-rules__heading"]}>Правила инвестирования</h1>

      <div className={styles["investment-rules__cards"]}>
        {cards.map((card, index) => (
          <InvestmentRulesCard key={index} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentRules;
