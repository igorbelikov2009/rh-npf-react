"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("../../Table/Table");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
require("./ExpandingTable.scss");
var ExpandingTable = function (_a) {
    var oneExpandingTable = _a.oneExpandingTable;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: oneExpandingTable.tableName, onClickExpanding: expanderHandler }),
        isVisible && (react_1["default"].createElement("div", { className: isVisible ? "expanding__content-enter-active" : "expanding__content-leave-active" },
            react_1["default"].createElement(Table_1["default"], { headings: oneExpandingTable.headings, arrayRows: oneExpandingTable.arrayRows })))));
};
exports["default"] = ExpandingTable;
