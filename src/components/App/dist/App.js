"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_module_scss_1 = require("./App.module.scss");
var AppRouter_1 = require("../AppRouter");
var index_1 = require("../../context/index");
var App = function () {
    var _a = react_1.useState(false), isAuth = _a[0], setAuth = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(false), isBackgroundWhite = _c[0], setBackgroundWhite = _c[1];
    // isLoading в данном месте нужен для того, чтобы нас не редиректило
    // на главную страницу при обновлении любой другой.
    react_1.useEffect(function () {
        if (localStorage.getItem("auth-renaissance")) {
            setAuth(true);
        }
        // здесь isLoading, асинхронно, с задержкой по времени, меняет своё
        // значение. Эта задержка с (true) на (false) не позволяет в AppRouter
        // сделать редирект на MAIN_ROUTE
        setLoading(false);
    }, []);
    return (react_1["default"].createElement("div", { className: App_module_scss_1["default"].App },
        react_1["default"].createElement(index_1.AuthContext.Provider, { value: { isAuth: isAuth, setAuth: setAuth, isBackgroundWhite: isBackgroundWhite, setBackgroundWhite: setBackgroundWhite, isLoading: isLoading } },
            react_1["default"].createElement(AppRouter_1["default"], null))));
};
exports["default"] = App;
