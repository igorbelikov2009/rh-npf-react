import React, { FC } from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./InvestmentRulesCard.module.scss";

export interface InvestmentRulesCardProps {
  icon: string;
  title: string;
}

const InvestmentRulesCard: FC<InvestmentRulesCardProps> = ({ icon, title }) => {
  return (
    <div className={styles["investment-card"]}>
      <div className={styles["investment-card__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["investment-card__title"]}>{title}</p>
      </div>
    </div>
  );
};

export default InvestmentRulesCard;
