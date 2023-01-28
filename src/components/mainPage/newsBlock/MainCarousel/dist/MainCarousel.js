"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsLinkContainer_1 = require("../NewsLinkContainer/NewsLinkContainer");
var MainCarousel_module_scss_1 = require("./MainCarousel.module.scss");
var MainCarousel = function (_a) {
    var jj = _a.jj, qq = _a.qq, carouselLinks = _a.carouselLinks;
    return (react_1["default"].createElement("div", { className: MainCarousel_module_scss_1["default"]["carousel-tape"] }, carouselLinks &&
        carouselLinks.map(function (link, index) { return (react_1["default"].createElement(NewsLinkContainer_1["default"], { key: link.id, isClear: index === qq || jj === index, link: link })); })));
};
exports["default"] = MainCarousel;
/*
   v-for="(carouselLink, index) in carouselLinks"
      :key="index"
      :isClear="index === qq || jj === index"
      :newsLinkTitle="carouselLink.title"
      :newsLinkDate="carouselLink.date"
      :newsLinkId="carouselLink.id"
      @getLinkContainerWidth="getLinkContainerWidth"
*/
