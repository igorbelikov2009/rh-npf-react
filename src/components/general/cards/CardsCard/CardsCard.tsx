import React, { FC } from "react";
import DarkIcon from "../../../general/DarkIcon/DarkIcon";
import styles from "./CardsCard.module.scss";

export interface CardsCardProps {
  icon: string;
  title?: string;
  span?: string;
  subtitle: string;
}

const CardsCard: FC<CardsCardProps> = ({ icon, title, span, subtitle }) => {
  return (
    <div className={styles["cards-card"]}>
      <div className={styles["cards-card__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["cards-card__title"]}>
          {title} <span className={styles["cards-card__span"]}> {span} </span>
        </p>
        <p className={styles["cards-card__subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardsCard;
