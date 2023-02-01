"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Row_1 = require("../Row/Row");
var RowHeadings_1 = require("../RowHeadings/RowHeadings");
var Table_module_scss_1 = require("./Table.module.scss");
var Table = function (_a) {
    var headings = _a.headings, arrayRows = _a.arrayRows;
    return (react_1["default"].createElement("div", { className: Table_module_scss_1["default"].table },
        react_1["default"].createElement("div", { className: Table_module_scss_1["default"].table__scrolling },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement(RowHeadings_1["default"], { headings: headings }),
                arrayRows.map(function (row, index) { return (react_1["default"].createElement(Row_1["default"], { key: index, cellArray: row.cellArray })); })))));
};
exports["default"] = Table;
