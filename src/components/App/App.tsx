import React, { FC } from "react";
import styles from "./App.module.scss";
import AppRouter from "../AppRouter";

const App: FC = () => {
  return (
    <div className={styles.App}>
      <h1>Working</h1>

      <AppRouter />
    </div>
  );
};

export default App;
