import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import managementImage from "../assets/images/management/managementTop.jpg";
import "../styles/dist/ManagementPage.css";
import Management from "../components/management/Management/Management";

const ManagementPage: FC = () => {
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />

      <div className="management-page">
        <Management />
      </div>
    </>
  );
};

export default ManagementPage;
