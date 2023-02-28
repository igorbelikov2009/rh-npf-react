import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import AppRouter from "../AppRouter";
import { AuthContext } from "../../context/index";

const App: FC = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isBackgroundWhite, setBackgroundWhite] = useState(false);
  const [isAdminLoginVisible, setAdminLoginVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
  }, []);

  return (
    <div className={styles.App}>
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
          isBackgroundWhite,
          setBackgroundWhite,
          isAdminLoginVisible,
          setAdminLoginVisible,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
