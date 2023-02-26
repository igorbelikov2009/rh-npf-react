"use strict";
exports.__esModule = true;
//  Не задействовал, удалять жалко
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var FormControl_1 = require("../../ui/inputs/FormControl");
var FormCreation = function (_a) {
    var formsOfCreation = _a.formsOfCreation, addObject = _a.addObject, ButtonName = _a.ButtonName;
    return (react_1["default"].createElement(react_bootstrap_1.Form, null,
        formsOfCreation.map(function (obj, index) { return (react_1["default"].createElement(FormControl_1["default"], { key: index, value: obj.value, placeholder: obj.placeholder, setValue: obj.setValue, type: obj.type })); }),
        react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-success", onClick: addObject }, ButtonName)));
};
exports["default"] = FormCreation;
