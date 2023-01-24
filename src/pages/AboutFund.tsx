import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";

const AboutFund: FC = () => {
  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />
    </>
  );
};

export default AboutFund;
