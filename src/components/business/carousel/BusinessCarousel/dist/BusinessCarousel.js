"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CarouselCard_1 = require("../CarouselCard/CarouselCard");
var BusinessCarousel_module_scss_1 = require("./BusinessCarousel.module.scss");
var BusinessCarousel = function (_a) {
    var currentValue = _a.currentValue, emitAmountChildren = _a.emitAmountChildren, emitValue = _a.emitValue;
    var cards = [
        {
            value: "0",
            icon: "Money",
            title: "Увеличение социальных гарантий"
        },
        {
            value: "1",
            icon: "Circle",
            title: "Сокращение текучести кадров"
        },
        {
            value: "2",
            icon: "Young",
            title: "Своевременное омоложение коллектива"
        },
        {
            value: "3",
            icon: "Lever",
            title: "Рычаги управления коллективом"
        },
        {
            value: "4",
            icon: "Motivate",
            title: "Мотивация к долгосрочному труду"
        },
        {
            value: "5",
            icon: "Settings",
            title: "Оптимизация налогообложения организации"
        },
        {
            value: "6",
            icon: "Check",
            title: "Сокращение издержек на социальную поддержку пенсионеров"
        },
    ];
    react_1.useEffect(function () {
        emitAmountChildren(cards.length);
    }, [cards.length, emitAmountChildren]);
    var onChangeCarouselRadio = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: BusinessCarousel_module_scss_1["default"]["carousel__container"] }, cards.map(function (card, index) { return (react_1["default"].createElement(CarouselCard_1["default"], { key: index, emitValue: onChangeCarouselRadio, icon: card.icon, title: card.title, value: card.value, isActive: index === currentValue })); })));
};
exports["default"] = BusinessCarousel;
