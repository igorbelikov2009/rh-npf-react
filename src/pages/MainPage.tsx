import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import mainImage from "../assets/images/main/mainTop.jpg";
import Info from "../components/mainPage/Info/Info";

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
    </>
  );
};

export default MainPage;
