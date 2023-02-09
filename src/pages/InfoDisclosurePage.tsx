import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import infoImage from "../assets/images/info/infoTop.jpg";
import GeneralInfo from "../components/infoDisclosure/GeneralInfo/GeneralInfo";
import "../styles/dist/InfoDisclosurePage.css";
import FundPerformance from "../components/infoDisclosure/fundPerformance/FundPerformance/FundPerformance";

const InfoDisclosurePage: FC = () => {
  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
      <GeneralInfo />
      <FundPerformance />
    </>
  );
};

export default InfoDisclosurePage;
