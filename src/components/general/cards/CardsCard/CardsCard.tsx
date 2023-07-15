import React, { FC } from "react";
import { ICard } from "../../../../models/types";
import DarkIcon from "../../../general/DarkIcon/DarkIcon";
import styles from "./CardsCard.module.scss";

const CardsCard: FC<ICard> = ({ icon, title, span, subtitle }) => {
  return (
    <div className={styles["cards-card"]}>
      <div className={styles["cards-card__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["cards-card__title"]}>
          {title}
          <span className={styles["cards-card__span"]}> {span} </span>
        </p>

        <p className={styles["cards-card__subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardsCard;
