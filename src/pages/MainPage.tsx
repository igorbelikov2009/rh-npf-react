import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import mainImage from "../assets/images/main/mainTop.jpg";
import Info from "../components/mainPage/Info/Info";
import Calculator from "../components/mainPage/calculator/Calc/Calc";
import ImagesCalculator from "../components/mainPage/ImagesCalculator/ImagesCalculator";
import NewsBlock from "../components/mainPage/newsBlock/NewsBlock/NewsBlock";
import Cards from "../components/general/cards/Cards/Cards";
import { ICard } from "../models/types";

const MainPage: FC = () => {
  const cards: ICard[] = [
    {
      icon: "Calendar",
      title: "17 лет",
      span: "на рынке",
      subtitle: 'Фонд "Ренессанс пенсии" основан в 2002 году',
    },
    {
      icon: "High Rate",
      title: "Высокий ",
      span: "рейтинг",
      subtitle: "Надежность ruАА- по оценке Эксперт РА",
    },
    {
      icon: "Users",
      title: "41 000",
      span: "человек",
      subtitle: " участники пенсионной программы",
    },
    {
      icon: "Partner",
      title: "150",
      span: "компаний",
      subtitle: "заботятся о пенсиях сотрудников",
    },
    {
      icon: "Bank",
      title: "17 млрд",
      span: "рублей",
      subtitle: "пенсионных резервов в Фонде",
    },
  ];

  return (
    <>
      <TopBlock
        heading="Уверенность в будущем,"
        headingSpan=" доступная каждому"
        subheading="Обеспечьте себе стабильность и приступайте"
        subheadingSpan=" к реализации своих самых смелых планов!"
        image={mainImage}
      />
      <Info />
      <Cards cards={cards} />

      <div id="calculator">
        <Calculator />
      </div>

      <ImagesCalculator />
      <NewsBlock />
    </>
  );
};

export default MainPage;
