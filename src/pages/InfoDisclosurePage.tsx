import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import infoImage from "../assets/images/info/infoTop.jpg";
import GeneralInfo from "../components/infoDisclosure/GeneralInfo/GeneralInfo";
import "../styles/dist/InfoDisclosurePage.css";

const InfoDisclosurePage: FC = () => {
  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
      <GeneralInfo />
    </>
  );
};

export default InfoDisclosurePage;
