import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import AppRouter from "../AppRouter";
import { AuthContext } from "../../context/index";

const App: FC = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(true);
  const [isBackgroundWhite, setBackgroundWhite] = useState(false);
  // isLoading в данном месте нужен для того, чтобы нас не редиректило
  // на главную страницу при обновлении любой другой.

  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
    // здесь isLoading, асинхронно, с задержкой по времени, меняет своё
    // значение. Эта задержка с (true) на (false) не позволяет в AppRouter
    // сделать редирект на MAIN_ROUTE
    setLoading(false);
  }, []);

  return (
    <div className={styles.App}>
      <AuthContext.Provider value={{ isAuth, setAuth, isBackgroundWhite, setBackgroundWhite, isLoading }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
