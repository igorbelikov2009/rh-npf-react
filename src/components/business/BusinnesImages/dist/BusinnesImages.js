"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BusinnesImages_module_scss_1 = require("./BusinnesImages.module.scss");
var BusinnesImages = function () {
    return (react_1["default"].createElement("section", { className: BusinnesImages_module_scss_1["default"]["businnes-images"] },
        react_1["default"].createElement("div", { className: BusinnesImages_module_scss_1["default"]["businnes-images__container"] },
            react_1["default"].createElement("img", { className: BusinnesImages_module_scss_1["default"]["businnes-images__image"], src: "/images/businnes/table.jpg", alt: "table" }),
            react_1["default"].createElement("img", { className: BusinnesImages_module_scss_1["default"]["businnes-images__image"], src: "/images/businnes/workers.jpg", alt: "workers" }))));
};
exports["default"] = BusinnesImages;
