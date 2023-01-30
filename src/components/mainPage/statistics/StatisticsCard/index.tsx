import React, { FC } from "react";
import DarkIcon from "../../../general/DarkIcon/DarkIcon";
import styles from "./index.module.scss";

export interface StatisticsCardProps {
  icon: string;
  title: string;
  span: string;
  subtitle: string;
}

const StatisticsCard: FC<StatisticsCardProps> = ({ icon, title, span, subtitle }) => {
  return (
    <div className={styles["statistics-card"]}>
      <div className={styles["statistics-card__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["statistics-card__title"]}>
          {title} <span className={styles["statistics-card__span"]}> {span} </span>
        </p>
        <p className={styles["statistics-card__subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
