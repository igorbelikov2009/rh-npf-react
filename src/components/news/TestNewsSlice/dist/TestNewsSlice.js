"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_1 = require("../../../hooks/redux");
var ActionCreater_1 = require("../../../store/redusers/ActionCreater");
var TestNewsSlice_module_scss_1 = require("./TestNewsSlice.module.scss");
var TestNewsSlice = function () {
    var dispatch = redux_1.useAppDispanch();
    var _a = redux_1.useAppSelector(function (state) { return state.userReducer; }), users = _a.users, isLoading = _a.isLoading, error = _a.error;
    react_1.useEffect(function () {
        dispatch(ActionCreater_1.fetchUsers());
    }, []);
    return (react_1["default"].createElement("div", { className: TestNewsSlice_module_scss_1["default"]["block"] },
        react_1["default"].createElement("div", { className: TestNewsSlice_module_scss_1["default"]["block__head"] },
            react_1["default"].createElement("h1", { className: TestNewsSlice_module_scss_1["default"]["block__heading"] }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 NewsSlice "),
            isLoading && react_1["default"].createElement("h1", null, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
            error && react_1["default"].createElement("h1", null, "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435"),
            react_1["default"].createElement("div", null, JSON.stringify(users, null, 2)))));
};
exports["default"] = TestNewsSlice;
