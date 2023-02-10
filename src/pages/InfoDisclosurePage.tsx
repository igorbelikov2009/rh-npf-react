import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import infoImage from "../assets/images/info/infoTop.jpg";
import GeneralInfo from "../components/infoDisclosure/GeneralInfo/GeneralInfo";
import "../styles/dist/InfoDisclosurePage.css";
import FundPerformance from "../components/infoDisclosure/fundPerformance/FundPerformance/FundPerformance";
import DocumentsOfTitle from "../components/infoDisclosure/DocumentsOfTitle/DocumentsOfTitle";
import Notifics from "../components/infoDisclosure/notifics/Notifics/Notifics";
import SpecDepository from "../components/infoDisclosure/specDepository/SpecDepository/SpecDepository";
import ManagementCompanies from "../components/infoDisclosure/ManagementCompanies/ManagementCompanies";
import Other from "../components/infoDisclosure/Other/Other";

const InfoDisclosurePage: FC = () => {
  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
      <GeneralInfo />
      <FundPerformance />
      <DocumentsOfTitle />

      <Other />
      <ManagementCompanies />
      <SpecDepository />
      <Notifics />
    </>
  );
};

export default InfoDisclosurePage;
