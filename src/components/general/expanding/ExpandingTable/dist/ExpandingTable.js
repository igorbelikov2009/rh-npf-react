"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("../../table/Table/Table");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
require("./ExpandingTable.scss");
var ExpandingTable = function (_a) {
    var expandingTable = _a.expandingTable, onClickExpanding = _a.onClickExpanding;
    var _b = react_1.useState(true), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
        onClickExpanding();
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, tableName: expandingTable.tableName, onClickExpanding: expanderHandler }),
        react_1["default"].createElement("div", { className: "expanding__content" },
            react_1["default"].createElement(Table_1["default"], { headings: expandingTable.headings, arrayRows: expandingTable.arrayRows }))));
};
exports["default"] = ExpandingTable;
