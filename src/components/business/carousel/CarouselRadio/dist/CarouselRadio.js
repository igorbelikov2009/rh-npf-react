"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CarouselRadio_module_scss_1 = require("./CarouselRadio.module.scss");
var CarouselRadio = function (_a) {
    var emitValue = _a.emitValue, value = _a.value;
    var onChangeCarouselRadio = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { className: CarouselRadio_module_scss_1["default"]["carousel__radio"], type: "radio", value: value, onChange: onChangeCarouselRadio })));
};
exports["default"] = CarouselRadio;
