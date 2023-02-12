import React, { FC, SetStateAction, useState } from "react";
import RadioPrimary from "../../../ui/radios/RadioPrimary/RadioPrimary";
import { RadioItemProps } from "../../../ui/radios/RadioSecondary/RadioSecondary";
import SpecDepositoryBlock, { ISpecDepositoryBlock } from "../SpecDepositoryBlock/SpecDepositoryBlock";
import styles from "./SpecDepository.module.scss";

const SpecDepository: FC = () => {
  const [isVisible, setVisible] = useState(true);
  const [currentValue] = useState("0");

  const radioItems: RadioItemProps[] = [
    {
      name: "information",
      value: "0",
      title: "Действующие",
    },
    {
      name: "information",
      value: "1",
      title: "Договоры прекращены",
    },
  ];

  const depository1: ISpecDepositoryBlock = {
    subheading: "АО ВТБ Специализированный депозитарий",
    title:
      "лицензия на осуществление деятельности в качестве специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов №22-000-1-00005 от 25 ноября 1997 года (бессрочная).",
    subtitle: "Договор №96 заключен 27.09.2010 г., бессрочный, действует",
  };

  const depository2: ISpecDepositoryBlock = {
    subheading: "ООО «Дойче Банк»",
    title:
      "лицензия № 22-000-1-00060 от 25.01.2005г., на осуществление деятельности специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов, выданную Федеральной Службой по финансовым рынкам, срок окончания: лицензия предоставлена на срок 5 лет.",
    subtitle: "Договор №16-1/NPF/789 от 28.11.2008 г., на срок один год, прекращен 26.09.2010 г.",
  };

  const onClickRadioPrimary = (value: SetStateAction<string>) => {
    onChangeVisiblity();
  };

  const onChangeVisiblity = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <section className={styles["spec-depository"]}>
        <div className={styles["spec-depository__container"]}>
          <h2 className={styles["spec-depository__heading"]}>Специализированный депозитарий</h2>

          <div className={styles["spec-depository__param-switch"]}>
            <RadioPrimary radioItems={radioItems} currentValue={currentValue} emitValue={onClickRadioPrimary} />
          </div>

          <div>
            {isVisible ? (
              <SpecDepositoryBlock
                subheading={depository1.subheading}
                title={depository1.title}
                subtitle={depository1.subtitle}
              />
            ) : (
              <SpecDepositoryBlock
                subheading={depository2.subheading}
                title={depository2.title}
                subtitle={depository2.subtitle}
              />
            )}
          </div>
        </div>
      </section>

      <section className={styles["spec-depository__interactions"]}>
        <div className={styles["spec-depository__container"]}>
          <p className={styles["spec-depository__description"]}>
            Для информационного взаимодействия АО НПФ «Ренессанс пенсии», являясь участником системы электронного
            документооборота, использует обмен электронными документами в системе электронного документооборота АО ВТБ
            Специализированный депозитарий.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpecDepository;
