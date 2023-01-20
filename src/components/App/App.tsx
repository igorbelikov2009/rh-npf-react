import React, { FC } from "react";
import "./App.css";
import AppRouter from "../AppRouter";

const App: FC = () => {
  return (
    <div className="App">
      <h1>Working</h1>

      <AppRouter />
    </div>
  );
};

export default App;
