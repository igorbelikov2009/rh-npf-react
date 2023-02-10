import React, { FC, useState } from "react";
import RadioCircle from "../../../ui/radioCircle/RadioCircle/RadioCircle";
import { IRadioCircleItem } from "../../../ui/radioCircle/RadioCircleItem/RadioCircleItem";
import NotificsContent, { INotificsContent } from "../NotificsContent/NotificsContent";
import styles from "./Notifics.module.scss";

const Notifics: FC = () => {
  const [currentValue, setCurrentValue] = useState("0");

  const contents: INotificsContent[] = [
    {
      // date: '12.01.2021',
      date: "2021-01-12T00:00:00.000",
      description:
        "АО НПФ «Ренессанс пенсии» заключил договор доверительного управления пенсионными резервами №311220/1 от 31 декабря 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
    },
    {
      // date: '21.02.2020',
      date: "2020-02-21T00:00:00.000",
      description:
        "АО НПФ «Ренессанс пенсии» заключил договоры доверительного управления пенсионными резервами №200220/1 от 20 февраля 2020 года и №200220/2 от 20 февраля 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
    },
    {
      // date: '29.05.2018',
      date: "2018-05-29T00:00:00.000",
      description:
        "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» заключил договор доверительного управления пенсионными резервами № 250518/1 от 25 мая 2018 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
    },
  ];

  const radioItems: IRadioCircleItem[] = contents
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
          {contents.map((content, index) => (
            <NotificsContent key={index} content={content} isVisible={Number(currentValue) === index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifics;
