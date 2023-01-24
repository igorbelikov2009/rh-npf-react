import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import businessImage from "../assets/images/businnes/businnesTop.jpg";

const Business: FC = () => {
  return (
    <>
      <TopBlock
        heading="Для бизнеса"
        subheading="Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя."
        image={businessImage}
      />
    </>
  );
};

export default Business;
