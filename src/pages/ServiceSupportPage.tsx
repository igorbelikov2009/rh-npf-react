import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import supportImage from "../assets/images/support/supportTop.jpg";
import "../styles/dist/ServiceSupport.css";
import QuestionsAnswers from "../components/serviceSupport/QuestionsAnswers/QuestionsAnswers";
import PensionPrograms from "../components/serviceSupport/PensionPrograms/PensionPrograms";
import SupportForm from "../components/serviceSupport/SupportForm/SupportForm";

const ServiceSupportPage: FC = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />

      <div className="support-servise-page">
        <div id="questionsAnswers">
          <QuestionsAnswers />
        </div>

        <PensionPrograms />

        <div id="form">
          <SupportForm />
        </div>
      </div>
    </>
  );
};

export default ServiceSupportPage;
