import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import managementImage from "../assets/images/management/managementTop.jpg";

const Management: FC = () => {
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />
    </>
  );
};

export default Management;
