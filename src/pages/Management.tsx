import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import managementImage from "../assets/images/management/managementTop.jpg";

const Management: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollHandler = (event: any) => {
    // console.log(event.target.documentElement.scrollHeight); // Не трогать!!!
    // console.log(event.target.documentElement.scrollTop); // Не трогать!!!
    // console.log(window.innerHeight); // Не трогать!!!
    // if (
    //   event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) <
    //   100
    // ) {
    //   console.log("Нижний край < 100");
    // }
  };
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />
    </>
  );
};

export default Management;
