"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_module_scss_1 = require("./App.module.scss");
var AppRouter_1 = require("../AppRouter");
var index_1 = require("../../context/index");
var App = function () {
    var _a = react_1.useState(false), isAuth = _a[0], setAuth = _a[1];
    var _b = react_1.useState(false), isBackgroundWhite = _b[0], setBackgroundWhite = _b[1];
    var _c = react_1.useState(false), isAdminLoginVisible = _c[0], setAdminLoginVisible = _c[1];
    react_1.useEffect(function () {
        if (localStorage.getItem("auth-renaissance")) {
            setAuth(true);
        }
    }, []);
    return (react_1["default"].createElement("div", { className: App_module_scss_1["default"].App },
        react_1["default"].createElement(index_1.AuthContext.Provider, { value: {
                isAuth: isAuth,
                setAuth: setAuth,
                isBackgroundWhite: isBackgroundWhite,
                setBackgroundWhite: setBackgroundWhite,
                isAdminLoginVisible: isAdminLoginVisible,
                setAdminLoginVisible: setAdminLoginVisible
            } },
            react_1["default"].createElement(AppRouter_1["default"], null))));
};
exports["default"] = App;
