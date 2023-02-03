"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExpandingTable_1 = require("../../../general/expanding/ExpandingTable/ExpandingTable");
var CompositionBlock = function (_a) {
    var isVisible = _a.isVisible, arrayOfExpanderTables = _a.arrayOfExpanderTables;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isVisible && (react_1["default"].createElement("div", null, arrayOfExpanderTables.map(function (expander, index) { return (react_1["default"].createElement(ExpandingTable_1["default"], { key: index, oneExpandingTable: expander })); })))));
};
exports["default"] = CompositionBlock;
