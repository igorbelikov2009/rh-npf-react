import React, { FC, useState } from "react";
import Button from "../components/ui/Button/Button";

const MainPage: FC = () => {
  const [text] = useState("Моя кнопка");

  return (
    <div>
      <h1>MainPage</h1>
      <Button children={text} />
    </div>
  );
};

export default MainPage;
