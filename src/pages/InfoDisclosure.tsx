import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import infoImage from "../assets/images/info/infoTop.jpg";

const InfoDisclosure: FC = () => {
  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
    </>
  );
};

export default InfoDisclosure;
