"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExpandingTable_1 = require("../../../general/expanding/ExpandingTable/ExpandingTable");
var CompositionBlock = function (_a) {
    var isVisible = _a.isVisible, expandingTables = _a.expandingTables, onClickExpanding = _a.onClickExpanding;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isVisible && (react_1["default"].createElement("div", null, expandingTables.map(function (table, index) { return (react_1["default"].createElement(ExpandingTable_1["default"], { key: index, arrayRows: table.arrayRows, headings: table.headings, title: table.title, onClickExpanding: onClickExpanding })); })))));
};
exports["default"] = CompositionBlock;
