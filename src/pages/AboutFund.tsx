import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";
import AboutUs from "../components/aboutFund/AboutUs";
import Statistics from "../components/mainPage/statistics/Statistics";

const AboutFund: FC = () => {
  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      <AboutUs />
      <Statistics />
    </>
  );
};

export default AboutFund;
