import React, { FC, useState } from "react";
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
import HidingArchive from "../components/infoDisclosure/hidingArchive/HidingArchive/HidingArchive";
import StructureAndRules from "../components/infoDisclosure/StructureAndRules/StructureAndRules";
import AssetValueRules from "../components/infoDisclosure/AssetValueRules/AssetValueRules";
import IncomeChangeRegulation from "../components/infoDisclosure/IncomeChangeRegulation/IncomeChangeRegulation";
import PortfolioStructure from "../components/infoDisclosure/PortfolioStructure/PortfolioStructure";

const InfoDisclosurePage: FC = () => {
  const [isHidingArchiveVisible, setHidingArchiveVisible] = useState(false); // false
  const [isArchiveShareholdersVisible, setArchiveShareholdersVisible] = useState(false); // false
  const [isArchivePensionVisible, setArchivePensionVisible] = useState(false); // false
  const [isArchiveReportingVisible, setArchiveReportingVisible] = useState(false); // false
  const [isArchiveAssetValueRulesVisible, setArchiveAssetValueRulesVisible] = useState(false); // false

  const onClickHidingArchive = () => {
    setHidingArchiveVisible(false);
    setArchiveShareholdersVisible(false);
    setArchivePensionVisible(false);
    setArchiveReportingVisible(false);
    setArchiveAssetValueRulesVisible(false);

    document.body.style.overflow = "";
  };

  const onClickArchiveShareholders = () => {
    setHidingArchiveVisible((prev) => !prev);
    setArchiveShareholdersVisible((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const onClickArchivePension = () => {
    setHidingArchiveVisible((prev) => !prev);
    setArchivePensionVisible((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const onClickArchiveAssetValueRules = () => {
    setHidingArchiveVisible((prev) => !prev);
    setArchiveAssetValueRulesVisible((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
      <GeneralInfo />
      <FundPerformance />
      <DocumentsOfTitle />
      <StructureAndRules
        onClickArchiveShareholders={onClickArchiveShareholders}
        onClickArchivePension={onClickArchivePension}
      />

      <PortfolioStructure />
      <IncomeChangeRegulation />
      <AssetValueRules onClickArchiveAssetValueRules={onClickArchiveAssetValueRules} />
      <HidingArchive
        isVisible={isHidingArchiveVisible}
        isArchiveShareholdersVisible={isArchiveShareholdersVisible}
        isArchivePensionVisible={isArchivePensionVisible}
        isArchiveReportingVisible={isArchiveReportingVisible}
        isArchiveAssetValueRulesVisible={isArchiveAssetValueRulesVisible}
        onClickHidingArchive={onClickHidingArchive}
      />
      <Other />
      <ManagementCompanies />
      <SpecDepository />
      <Notifics />
    </>
  );
};

export default InfoDisclosurePage;
