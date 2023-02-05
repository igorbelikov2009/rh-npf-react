import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import supportImage from "../assets/images/support/supportTop.jpg";
import "../styles/dist/ServiceSupport.css";
import QuestionsAnswers from "../components/serviceSupport/QuestionsAnswers/QuestionsAnswers";
import PensionPrograms from "../components/serviceSupport/PensionPrograms/PensionPrograms";

const ServiceSupportPage: FC = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />

      <div className="support-servise-page">
        <QuestionsAnswers />
        <PensionPrograms />
      </div>
    </>
  );
};

export default ServiceSupportPage;
