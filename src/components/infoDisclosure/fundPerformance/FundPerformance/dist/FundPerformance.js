"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdaptiveRadio_1 = require("../../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var ControllerOption_1 = require("../../../ui/select/controllerOption/ControllerOption/ControllerOption");
var IndicatorsYear_1 = require("../IndicatorsYear/IndicatorsYear");
var FundPerformance_module_scss_1 = require("./FundPerformance.module.scss");
var FundPerformance = function () {
    var _a = react_1.useState("2021"), currentValue = _a[0], setCurrentValue = _a[1];
    var _b = react_1.useState("0"), idOptions = _b[0], setIdOptions = _b[1];
    var _c = react_1.useState(false), isRadioListVisible = _c[0], setRadioListVisible = _c[1];
    var radioItems = [
        {
            title: "2021",
            value: "2021",
            id: "0"
        },
        {
            title: "2020",
            value: "2020",
            id: "1"
        },
        {
            title: "2019",
            value: "2019",
            id: "2"
        },
        {
            title: "2018",
            value: "2018",
            id: "3"
        },
        {
            title: "2017",
            value: "2017",
            id: "4"
        },
    ];
    var fundIndicators = [
        {
            heading: "Показатели деятельности",
            subheading: "2021",
            archiveLinks: [
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.01.2021.pdf",
                    title: "Показатели деятельности на 31.01.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 28.02.2021.pdf",
                    title: "Показатели деятельности на 28.02.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.03.2021.pdf",
                    title: "Показатели деятельности на 31.03.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 30.04.2021.pdf",
                    title: "Показатели деятельности на 30.04.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.05.2021.pdf",
                    title: "Показатели деятельности на 31.05.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 30.06.2021.pdf",
                    title: "Показатели деятельности на 30.06.2021"
                },
                {
                    href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.07.2021.pdf",
                    title: "Показатели деятельности на 31.07.2021"
                },
            ]
        },
        {
            heading: "Показатели деятельности",
            subheading: "2020",
            indicatorRows: [
                {
                    title: "Количество вкладчиков фонда",
                    index: "14 368"
                },
                {
                    title: "Количество участников фонда (человек)",
                    index: "42 366"
                },
                {
                    title: "Количество участников, получающих негосударственную пенсию (человек)",
                    index: "233"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
                    index: "1 137 798, 01"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
                    index: "136 741, 37"
                },
                {
                    title: "Размер пенсионных резервов, тыс. руб.",
                    index: "23 480 406,17"
                },
                {
                    title: "в том числе: размер страхового резерва, тыс. руб.",
                    index: "1 752 717,32"
                },
                {
                    title: "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
                    index: "5,77%"
                },
                {
                    title: "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
                    index: "7,29%"
                },
            ],
            archiveLinks: [
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.01.2020.pdf",
                    title: "Показатели деятельности на 31.01.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 29.02.2020.pdf",
                    title: "Показатели деятельности на 29.02.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.03.2020.pdf",
                    title: "Показатели деятельности на 31.03.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.04.2020.pdf",
                    title: "Показатели деятельности на 30.04.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.05.2020.pdf",
                    title: "Показатели деятельности на 31.05.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.06.2020.pdf",
                    title: "Показатели деятельности на 30.06.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.07.2020.pdf",
                    title: "Показатели деятельности на 31.07.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.08.2020.pdf",
                    title: "Показатели деятельности на 31.08.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.09.2020.pdf",
                    title: "Показатели деятельности на 30.09.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.10.2020.pdf",
                    title: "Показатели деятельности на 31.10.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.11.2020.pdf",
                    title: "Показатели деятельности на 30.11.2020"
                },
                {
                    href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.12.2020.pdf",
                    title: "Показатели деятельности на 31.12.2020"
                },
            ]
        },
        {
            heading: "Показатели деятельности",
            subheading: "2019",
            indicatorRows: [
                {
                    title: "Количество вкладчиков фонда",
                    index: "13 652"
                },
                {
                    title: "Количество участников фонда (человек)",
                    index: "41 609"
                },
                {
                    title: "Количество участников, получающих негосударственную пенсию (человек)",
                    index: "198"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
                    index: "1 429 559,88"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
                    index: "142 229,62"
                },
                {
                    title: "Размер пенсионных резервов, тыс. руб.",
                    index: "20 385 221,50"
                },
                {
                    title: "в том числе: размер страхового резерва, тыс. руб.",
                    index: "1 537 201,58"
                },
                {
                    title: "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
                    index: "8,60%"
                },
                {
                    title: "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
                    index: "9,74%"
                },
            ],
            archiveLinks: [
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2019.pdf",
                    title: "Показатели деятельности на 30.09.2019"
                },
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2019.pdf",
                    title: "Показатели деятельности на 31.10.2019"
                },
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2019.pdf",
                    title: "Показатели деятельности на 30.11.2019"
                },
            ]
        },
        {
            heading: "Показатели деятельности",
            subheading: "2018",
            indicatorRows: [
                {
                    title: "Количество вкладчиков фонда",
                    index: "12 059"
                },
                {
                    title: "Количество участников фонда (человек)",
                    index: "40 195"
                },
                {
                    title: "Количество участников, получающих негосударственную пенсию (человек)",
                    index: "166"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
                    index: "637 892"
                },
                {
                    title: "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
                    index: "80 271"
                },
                {
                    title: "Размер пенсионных резервов, тыс. руб.",
                    index: "16 946 469"
                },
                {
                    title: "в том числе: размер страхового резерва, тыс. руб.",
                    index: "1 328 519"
                },
                {
                    title: "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
                    index: "4,47%"
                },
                {
                    title: "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
                    index: "4,8%"
                },
            ],
            archiveLinks: [
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2018.pdf",
                    title: "Показатели деятельности на 30.09.2019"
                },
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2018.pdf",
                    title: "Показатели деятельности на 31.10.2019"
                },
                {
                    href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2018.pdf",
                    title: "Показатели деятельности на 30.11.2019"
                },
            ]
        },
        {
            heading: "Показатели деятельности",
            subheading: "2017",
            archiveLinks: [
                {
                    href: "/pdf/infoOpening/indexArchive/Finacial_data_and_performance_indicators_17-1576673962838.pdf",
                    title: "Показатели деятельности Фонда с 2009 по 2017 гг."
                },
            ]
        },
    ];
    var onChangeAdaptiveRadio = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickController = function () {
        setRadioListVisible(function (prev) { return !prev; });
    };
    var onChangeRadioListBlock = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickRadioListBlock = function () {
        setRadioListVisible(false);
    };
    console.log(currentValue, idOptions);
    return (react_1["default"].createElement("section", { className: FundPerformance_module_scss_1["default"]["fund-performance"] },
        react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__container"] },
            react_1["default"].createElement("h1", { className: FundPerformance_module_scss_1["default"]["fund-performance__heading"] }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u043D\u0434\u0430"),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__flex-container"] },
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__select"] },
                    react_1["default"].createElement(ControllerOption_1["default"], { currentValue: currentValue, radioItems: radioItems, isRadioListVisible: isRadioListVisible, onClickController: onClickController, emitOnChangeRadioListBlock: onChangeRadioListBlock, emitOnClickRadioListBlock: onClickRadioListBlock })),
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__adaptive-radio"] },
                    react_1["default"].createElement(AdaptiveRadio_1["default"], { radioItems: radioItems, currentValue: currentValue, emitValue: onChangeAdaptiveRadio }))),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__list"] }, fundIndicators.map(function (item, index) { return (react_1["default"].createElement(IndicatorsYear_1["default"], { key: index, heading: item.heading, subheading: item.subheading, archiveLinks: item.archiveLinks, indicatorRows: item.indicatorRows, isVisible: Number(idOptions) === index })); })))));
};
exports["default"] = FundPerformance;
