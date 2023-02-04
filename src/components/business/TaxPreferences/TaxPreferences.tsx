import React, { useState } from "react";
import TripleIcon from "../../general/TripleIcon/TripleIcon";
import "./TaxPreferences.scss";

interface TaxPreferencesProps {
  isVisible: boolean;
}

const TaxPreferences = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <section className="tax-preferences">
      <div className="tax-preferences__wrapper">
        <div className="tax-preferences__container">
          <div className="tax-preferences__selections">
            <button
              className={
                isVisible ? "tax-preferences__select tax-preferences__select_actived" : "tax-preferences__select"
              }
              onClick={() => setVisible(true)}
            >
              <TripleIcon hovered={isVisible} light={false} icon="Company" />

              <p className="tax-preferences__title">
                Для
                <span className="tax-preferences__title_span">компании</span>
              </p>
            </button>

            <button
              className={
                !isVisible ? "tax-preferences__select tax-preferences__select_actived" : "tax-preferences__select"
              }
              onClick={() => setVisible(false)}
            >
              <TripleIcon hovered={!isVisible} light={false} icon="Users" />

              <p className="tax-preferences__title">
                Для <span className="tax-preferences__title_span">сотрудников</span>
              </p>
            </button>
          </div>

          <div className="tax-preferences__options">
            <h1 className="tax-preferences__heading">Налоговые преференции</h1>

            {isVisible && (
              <div className="tax-preferences__company">
                <h2 className="tax-preferences__subheading">Страховые взносы пп. 5 п. 1 ст. 422 НК РФ</h2>

                <p className="tax-preferences__description">
                  Пенсионные взносы в пользу работников в рамках пенсионной программы не облагаются страховыми взносами
                  (30% от фонда оплаты труда) в федеральный бюджет: ПФР, ФОМС, ФСС
                </p>

                <p className="tax-preferences__description"></p>

                <h2 className="tax-preferences__subheading">Налог на прибыль (20%) пп. 16 п.1 ст. 255 НК РФ</h2>

                <p className="tax-preferences__description">
                  Пенсионные взносы работодателя в пользу сотрудников на именные пенсионные счета относятся на расходы
                  по оплате труда в размере до 12% от фонда оплаты труда и уменьшают налогооблагаемую базу по налогу на
                  прибыль.
                </p>
              </div>
            )}

            {!isVisible && (
              <div className="tax-preferences__workers">
                <h2 className="tax-preferences__subheading">Социальный налоговый вычет п.4 п.1 ст.219 НК РФ</h2>

                <p className="tax-preferences__description">
                  Возможность получить социальный налоговый вычет в размере 13% от суммы уплаченных взносов по личному
                  договору негосударственного пенсионного обеспечения (максимальный размер суммы взносов для получения
                  налогового вычета - 120.000 рублей/год).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxPreferences;
