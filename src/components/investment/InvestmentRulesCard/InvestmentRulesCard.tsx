import React, { FC } from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./InvestmentRulesCard.module.scss";

export interface InvestmentRulesCardProps {
  icon: string;
  title: string;
}

const InvestmentRulesCard: FC<InvestmentRulesCardProps> = ({ icon, title }) => {
  return (
    <div className={styles["investment-rules__block"]}>
      <div className={styles["investment-rules__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <p className={styles["investment-rules__title"]}>{title}</p>
    </div>
  );
};

export default InvestmentRulesCard;
