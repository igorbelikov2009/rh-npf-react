"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("../../Table/Table");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
var ExpandingTable_module_scss_1 = require("./ExpandingTable.module.scss");
var ExpandingTable = function (_a) {
    var oneExpandingTable = _a.oneExpandingTable;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingTable_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: oneExpandingTable.tableName, onClickExpanding: expanderHandler }),
        isVisible && (react_1["default"].createElement("div", { className: isVisible ? ExpandingTable_module_scss_1["default"]["expanding__content-enter-active"] : ExpandingTable_module_scss_1["default"]["expanding__content-leave-active"] },
            react_1["default"].createElement(Table_1["default"], { headings: oneExpandingTable.headings, arrayRows: oneExpandingTable.arrayRows })))));
};
exports["default"] = ExpandingTable;
