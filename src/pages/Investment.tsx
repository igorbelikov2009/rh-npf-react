import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import investImage from "../assets/images/invest/investTop.jpg";

const Investment: FC = () => {
  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />
    </>
  );
};

export default Investment;
