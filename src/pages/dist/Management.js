"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var managementTop_jpg_1 = require("../assets/images/management/managementTop.jpg");
var Management = function () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var scrollHandler = function (event) {
        // console.log(event.target.documentElement.scrollHeight); // Не трогать!!!
        // console.log(event.target.documentElement.scrollTop); // Не трогать!!!
        // console.log(window.innerHeight); // Не трогать!!!
        // if (
        //   event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) <
        //   100
        // ) {
        //   console.log("Нижний край < 100");
        // }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430", image: managementTop_jpg_1["default"] })));
};
exports["default"] = Management;
