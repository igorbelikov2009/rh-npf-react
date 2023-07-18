import React, { FC, SetStateAction, useState } from "react";
import { depository1, depository2, optionsItemsSpecDepository } from "../../../../data/InfoDisclosurePageData";

import RadioPrimary from "../../../ui/radios/RadioPrimary/RadioPrimary";
import SpecDepositoryBlock from "../SpecDepositoryBlock/SpecDepositoryBlock";
import styles from "./SpecDepository.module.scss";

const SpecDepository: FC = () => {
  const [isVisible, setVisible] = useState(true);
  const [currentValue] = useState("0");

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
            <RadioPrimary
              optionsItems={optionsItemsSpecDepository}
              currentValue={currentValue}
              emitValue={onClickRadioPrimary}
            />
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
