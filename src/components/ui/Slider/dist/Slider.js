"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_module_scss_1 = require("./Slider.module.scss");
var Slider = function (_a) {
    var title = _a.title, name = _a.name, min = _a.min, max = _a.max, step = _a.step;
    var _b = react_1.useState(0), value = _b[0], setValue = _b[1];
    var emitValue = function (event) {
        event.stopPropagation();
        setValue(Number(event.target.value));
        console.log(value);
    };
    return (react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider"] },
        react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider__description"] },
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__title"] }, title),
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__output"] }, value)),
        react_1["default"].createElement("input", { className: Slider_module_scss_1["default"]["slider-bicolor"], type: "range", name: name, min: min, max: max, step: step, value: value, onChange: emitValue })));
};
exports["default"] = Slider;
