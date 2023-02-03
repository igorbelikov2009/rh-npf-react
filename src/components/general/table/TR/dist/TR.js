"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TD_1 = require("../TD/TD");
require("./TR.scss");
var TR = function (_a) {
    var row = _a.row;
    return (react_1["default"].createElement("tr", null, row.map(function (td, index) { return (react_1["default"].createElement(TD_1["default"], { key: index, title: td.title })); })));
};
exports["default"] = TR;
