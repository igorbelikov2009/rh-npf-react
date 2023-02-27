"use strict";
exports.__esModule = true;
exports.AuthContext = void 0;
var react_1 = require("react");
exports.AuthContext = react_1.createContext({
    isBackgroundWhite: false,
    setBackgroundWhite: function () { },
    isAuth: false,
    setAuth: function () { },
    isLoading: true
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
