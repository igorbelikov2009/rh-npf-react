import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import mainImage from "../assets/images/main/mainTop.jpg";
import Info from "../components/mainPage/Info/Info";
import Statistics from "../components/mainPage/statistics/Statistics/Statistics";
import Calculator from "../components/mainPage/calculator/Calc/Calc";
import ImagesCalculator from "../components/mainPage/ImagesCalculator/ImagesCalculator";
import NewsBlock from "../components/mainPage/newsBlock/NewsBlock";

const MainPage: FC = () => {
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
      <Statistics />
      <Calculator />
      <ImagesCalculator />
      <NewsBlock />
    </>
  );
};

export default MainPage;
