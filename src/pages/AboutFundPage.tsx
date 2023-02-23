import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";
import AboutUs from "../components/aboutFund/AboutUs";
import Cards from "../components/general/cards/Cards/Cards";
import AboutFundBlock from "../components/aboutFund/AboutFundBlock/AboutFundBlock";
import { aboutFundCardsAPI } from "../services/aboutFundCardsAPI";

const AboutFundPage: FC = () => {
  const { data: aboutFundCards, isLoading, isError } = aboutFundCardsAPI.useGetAboutFundCardsQuery(20);

  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      {isLoading && <h1>Loading...</h1>}
      {isError && (
        <h1>
          Запусти сервер, создай параллельный терминал и скомандуй в нём: json-server --watch db.json --port 5000"
        </h1>
      )}
      <AboutUs />
      <AboutFundBlock />
      {aboutFundCards && <Cards cards={aboutFundCards} />}
    </>
  );
};

export default AboutFundPage;
