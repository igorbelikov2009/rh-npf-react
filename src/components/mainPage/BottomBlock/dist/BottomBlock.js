"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var PrimaryButton_1 = require("../../ui/buttons/PrimaryButton/PrimaryButton");
var BottomBlock_module_scss_1 = require("./BottomBlock.module.scss");
var initialCount = { count: 0 };
function countReducer(stateCount, actionCount) {
    switch (actionCount.type) {
        case "increment":
            return __assign(__assign({}, stateCount), { count: stateCount.count + 1 });
        case "decrement":
            return __assign(__assign({}, stateCount), { count: stateCount.count - 1 });
        default:
            throw new Error();
    }
}
var BottomBlock = function () {
    var _a = react_1.useReducer(countReducer, initialCount), stateCount = _a[0], dispatchCount = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: BottomBlock_module_scss_1["default"].block },
            react_1["default"].createElement("div", { className: BottomBlock_module_scss_1["default"].block__head },
                react_1["default"].createElement("h1", { className: BottomBlock_module_scss_1["default"].block__heading }, "countReducer")),
            react_1["default"].createElement("div", { className: BottomBlock_module_scss_1["default"].block__head },
                "Count: ",
                stateCount.count),
            react_1["default"].createElement("div", { className: BottomBlock_module_scss_1["default"]["block__container-button"], onClick: function () { return dispatchCount({ type: "decrement" }); } },
                react_1["default"].createElement(PrimaryButton_1["default"], { children: "-" })),
            react_1["default"].createElement("div", { className: BottomBlock_module_scss_1["default"]["block__container-button"], onClick: function () { return dispatchCount({ type: "increment" }); } },
                react_1["default"].createElement(PrimaryButton_1["default"], { children: "+" })))));
};
exports["default"] = BottomBlock;
