import { createContext } from "react";

interface IAuthContext {
  isBackgroundWhite: boolean;
  setBackgroundWhite: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  isBackgroundWhite: false,
  setBackgroundWhite: () => {},
  isAuth: false,
  setAuth: () => {},
  isLoading: true,
});

/*
У нас есть useEffect в App.tsx, который автоматически записывает setAuth(true)
при условии, если хотя бы раз логинился в CallBack.tsx 
  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
    // здесь isLoading, асинхронно, с задержкой по времени, меняет своё
    // значение. Эта задержка с (true) на (false) не позволяет в AppRouter
    // сделать редирект на MAIN_ROUTE
    setLoading(false);
  }, []);
*/
