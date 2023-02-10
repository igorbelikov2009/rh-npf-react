import React, { SetStateAction, useState } from "react";
import RadioPrimary from "../../ui/radios/RadioPrimary/RadioPrimary";
import { RadioItemProps } from "../../ui/radios/RadioSecondary/RadioSecondary";
import styles from "./ManagementCompanies.module.scss";

const ManagementCompanies = () => {
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

  const onClickRadioPrimary = (value: SetStateAction<string>) => {
    onChangeVisiblity();
  };

  const onChangeVisiblity = () => {
    setVisible((prev) => !prev);
  };

  return (
    <section className={styles["management-companies"]}>
      <div className={styles["management-companies__container"]}>
        <h2 className={styles["management-companies__heading"]}>Управляющие компании</h2>

        <div className={styles["management-companies__param-switch"]}>
          <RadioPrimary radioItems={radioItems} currentValue={currentValue} emitValue={onClickRadioPrimary} />
        </div>

        <div className={styles["management-companies__content"]}>
          {isVisible ? (
            <div>
              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-bold"]}>
                  Акционерное общество «Сбер Управление Активами»
                </span>

                <span className={styles["management-companies__paragraph-small"]}>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными
                  фондами и негосударственными пенсионными фондами № 21-000-1-00010 от 12 сентября 1996 года.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор №УК-110/2009 заключен 31.07.2009 г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор №УК-117/2009 заключен 07.10.2009 г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  <br />
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-bold"]}>
                  Акционерное общество «Управляющая компания «ТРАНСФИНГРУП»
                </span>

                <span className={styles["management-companies__paragraph-small"]}>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными
                  фондами и негосударственными пенсионными фондами № 21–000–1–00052 от 6 ноября 2001 года.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 32/ДУ заключен 17.03.2015 г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  <br />
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-bold"]}>
                  Акционерное общество «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ»
                </span>

                <span className={styles["management-companies__paragraph-small"]}>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, <br />
                  паевыми инвестиционными фондами и негосударственными пенсионными фондами, <br />№ 21-000-1-00054 от 3
                  декабря 2001 года.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 250518/1, заключен 25.05.2018г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 200220/1, заключен 20.02.2020г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 200220/2, заключен 20.02.2020г., бессрочный, действует.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 311220/1, заключен 31.12.2020г., бессрочный, действует.
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-bold"]}>
                  Акционерное общество «Сбербанк Управление Активами» (до переименования в ноябре 2012 г. - ЗАО
                  «Управляющая Компания «Тройка Диалог»)
                </span>
                <span className={styles["management-companies__paragraph-small"]}>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными
                  фондами и негосударственными пенсионными фондами № 21-000-1-00010 от 12 сентября 1996 года.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор №УК-111/2009 заключен 31.07.2009 г., бессрочный, прекращен 28.02.2013 г. Договор № УК-51/2012
                  заключен 19.12.2012 г., бессрочный, прекращен 31.01.2014 г. Договор №УК-52/2012 заключен 19.12.2012
                  г., бессрочный, прекращен 31.01.2014 г.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  <br />
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-bold"]}>ООО «УК «Ренессанс Капитал»</span>

                <span className={styles["management-companies__paragraph-small"]}>
                  лицензия № 21-000-1-00587 от 15.11.2008г. на право осуществления деятельности по управлению
                  инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами,
                  выданная Федеральной службой по финансовым рынкам, срок окончания: лицензия бессрочная. Лицензия №
                  077-09401-001000 от 05.09.2006г., на право осуществления деятельности по управлению ценными бумагами,
                  выданная Федеральной Службой по финансовым рынкам, срок окончания: лицензия бессрочная.
                </span>
              </p>

              <p className={styles["management-companies__paragraph"]}>
                <span className={styles["management-companies__paragraph-small"]}>
                  Договор № 294/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009 г., Договор №
                  295/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009 г.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManagementCompanies;
