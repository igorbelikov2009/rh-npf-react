import React from "react";
import TopBlock from "../components/general/TopBlock";
import taxationImage from "../assets/images/taxation/taxationTop.jpg";

const Taxation = () => {
  return (
    <>
      <TopBlock
        heading="Налогооблажение"
        subheading="Порядок налогообложения при выплате пенсий и выкупных сумм"
        image={taxationImage}
      />
    </>
  );
};

export default Taxation;
