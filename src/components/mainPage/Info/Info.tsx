import React from "react";
import "./Info.scss";
import imageBuilding from "../../../assets/images/main/building.jpg";
import imageGirl from "../../../assets/images/main/girl.jpg";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";

const Info = () => {
  return (
    <section className="info">
      <div className="info__head">
        <h1 className="info__heading">
          Ренессанс пенсии входит в число десяти крупнейших негосударственных пенсионных фондов России
        </h1>

        <p className="info__subheading">
          По состоянию на 31 марта 2019 фонд ведет более 150 корпоративных пенсионных планов, объем резервов которых
          превышает 18 млрд. рублей.
        </p>
      </div>

      <div className="info__row">
        <div className="info__block">
          <img className="info__image" src={imageGirl} alt="girl" />

          <div className="info__offer">
            <h1 className="info__title">Для себя</h1>

            <p className="info__subtitle">
              Сохраните уровень дохода после окончания карьеры — оформите индивидуальный пенсионный план и формируйте
              собственную пенсию.
            </p>
            <div className="info__button-container">
              <PrimaryButton children="Хочу знать больше" />
            </div>
          </div>
        </div>

        <div className="info__block">
          <img className="info__image" src={imageBuilding} alt="building" />

          <div className="info__offer">
            <h1 className="info__title">Для бизнеса</h1>

            <p className="info__subtitle">
              Корпоративные пенсионные программы дополнят соц пакет сотрудников и станут долгосрочным инструментом
              мотивации персонала.
            </p>
            <div className="info__button-container">
              <PrimaryButton children="Отправить заявку" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
