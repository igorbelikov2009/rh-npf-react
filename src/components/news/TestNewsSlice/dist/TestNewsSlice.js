"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_1 = require("../../../hooks/redux");
var TestNewsSlice_module_scss_1 = require("./TestNewsSlice.module.scss");
var TestNewsSlice = function () {
    var _a = redux_1.useAppSelector(function (state) { return state.userReducer; }), users = _a.users, isLoading = _a.isLoading, error = _a.error;
    return (react_1["default"].createElement("div", { className: TestNewsSlice_module_scss_1["default"]["block"] },
        react_1["default"].createElement("div", { className: TestNewsSlice_module_scss_1["default"]["block__head"] },
            react_1["default"].createElement("h1", { className: TestNewsSlice_module_scss_1["default"]["block__heading"] }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 NewsSlice "))));
};
exports["default"] = TestNewsSlice;
