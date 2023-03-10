import React, { FC, useState } from "react";
import UserDate from "../../../../api/UserDate/UserDate";
import { contentsNotifics } from "../../../../data/InfoDisclosurePageData";
import { INotificsContent } from "../../../../models/types";
import RadioCircle from "../../../ui/radioCircle/RadioCircle/RadioCircle";
import { IRadioCircleItem } from "../../../ui/radioCircle/RadioCircleItem/RadioCircleItem";
import NotificsContent from "../NotificsContent/NotificsContent";
import styles from "./Notifics.module.scss";

const Notifics: FC = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const formattedContents: INotificsContent[] = contentsNotifics.map((item) => ({
    date: String(UserDate.format(new Date(item.date))),
    description: String(item.description),
  }));
  const radioItems: IRadioCircleItem[] = contentsNotifics
    .map((item) => new Date(item.date).getFullYear())
    .map((item, index) => ({ title: String(item), value: String(index) }));
  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <section className={styles["notifics"]}>
      <div className={styles["notifics__container"]}>
        <h2 className={styles["notifics__heading"]}>Уведомления</h2>

        <div className={styles["notifics__triple-param-switch"]}>
          <RadioCircle currentValue={currentValue} radioItems={radioItems} emitValue={onChangeRadio} />
        </div>

        <div className={styles["notifics__content"]}>
          {formattedContents.map((content: INotificsContent, index: React.Key | null | undefined) => (
            <NotificsContent key={index} content={content} isVisible={Number(currentValue) === index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifics;
