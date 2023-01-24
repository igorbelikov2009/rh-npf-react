import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import supportImage from "../assets/images/support/supportTop.jpg";

const ServiceSupport: FC = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />
    </>
  );
};

export default ServiceSupport;
