"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var CarouselHeader_1 = require("../../../general/carousel/CarouselHeader/CarouselHeader");
var MainCarousel_1 = require("../MainCarousel/MainCarousel");
var NewsBlock_module_scss_1 = require("./NewsBlock.module.scss");
var NewsBlock = function () {
    // для CarouselHeader
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    var _a = react_1.useState(true), isNoCursorLeft = _a[0], setIsNoCursorLeft = _a[1];
    var _b = react_1.useState(true), isBlurredLeft = _b[0], setIsBlurredLeft = _b[1];
    var _c = react_1.useState(false), isNoCursorRight = _c[0], setIsNoCursorRight = _c[1];
    var _d = react_1.useState(false), isBlurredRight = _d[0], setIsBlurredRight = _d[1];
    // для MainCarousel // вычисляем и скролим scrollableElement
    var screenWidth = document.documentElement.clientWidth; // получаем ширину экрана
    var _e = react_1.useState(0), widthLink = _e[0], setWidthLink = _e[1]; // ширина контейнера ссылок
    var _f = react_1.useState(0), amountChildren = _f[0], setAmountChildren = _f[1]; // количество детей newsContainer
    var _g = react_1.useState(0), overallWidth = _g[0], setOverallWidth = _g[1]; // общая длина newsContainer
    var _h = react_1.useState(0), scrollWidth = _h[0], setScrollWidth = _h[1]; // вычисляемая длина прокрутки scrollableElement
    var _j = react_1.useState(0), right = _j[0], setRight = _j[1]; // значение прокрутки scrollableElement, записываемое в его атрибут style
    //
    var _k = react_1.useState(0), q = _k[0], setQ = _k[1]; // значение счётчика, индекс columns[q], который по центру экрана
    var _l = react_1.useState(0), j = _l[0], setJ = _l[1]; // если (screenWidth > 855), то по центру экрана два элемента:
    //  columns[q] и columns[j]
    var news = [
        {
            id: 7,
            title: "Эксперт РА подтвердил рейтинг НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++",
            date: "2015-02-27T09:00:00.000Z",
            paragraphs: [
                "Рейтинговое агентство RAEX (Эксперт РА) подтвердило рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++ «Исключительно высокий (наивысший) уровень надежности», прогноз по рейтингу - «стабильный».",
            ]
        },
        {
            id: 6,
            title: "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» вступил в Национальную ассоциацию негосударственных пенсионных фондов",
            date: "2018-02-03T09:00:00.000Z",
            paragraphs: [
                '"5 сентября на заседании Совета саморегулируемой организации Национальной ассоциации негосударственных пенсионных фондов (СРО НАПФ) было принято решение о включении в состав ассоциации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ».',
                "С 2016 года по инициативе Регулятора рынка, для обеспечения дополнительной защиты клиентов, членство в СРО является для НПФ обязательным. В соответствии с законодательством реестр новых членов НАПФ будет направлен в Центральный Банк России для учета в едином реестре НПФ.",
                'Единые стандарты деятельности, которые декларирует СРО НАПФ, призваны усилить контроль и повысить прозрачность взаимоотношений между пенсионными фондами и их клиентами. Основными целями СРО являются развитие финансового рынка России в целом и модернизация пенсионной системы в частности через выявление и распространение положительного опыта организации деятельности НПФ. В настоящий момент в состав НАПФ входят 69 из 81 НПФ, имеющих лицензии. В фондах-членах НАПФ сосредоточено 96,9 % пенсионных резервов и 84,6 % участников всех НПФ. "',
            ]
        },
        {
            id: 5,
            title: "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» опубликовал финансовую отчетность в соответствии с международными стандартами",
            date: "2021-09-09T08:00:00.000Z",
            paragraphs: [
                "Компания «Делойт и Туш СНГ» провела независимую аудиторскую проверку НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ», по результатам которой впервые был подготовлен отчет в соответствии с международными стандартами отчетности (МСФО) за 2015 год.",
            ]
        },
        {
            id: 4,
            title: "Поздравляем с Праздником Весны!",
            date: "2020-05-11T08:00:00.000Z",
            paragraphs: ["Поздравляем с Праздником Весны!"]
        },
        {
            id: 3,
            title: "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» подвел итоги инвестиционной деятельности за 2015 год.",
            date: "2015-03-05T09:00:00.000Z",
            paragraphs: [
                "Минувший год стал годом серьёзных негативных изменений в экономике и геополитике России. Резкое падение цен на нефть, политическое охлаждение отношений с ведущими мировыми державами, обмен санкциями, всплеск инфляции, девальвация национальной валюты – всё это отразилось на состоянии инвестиционного рынка.",
                "В сложившейся ситуации Фонд уделяет максимальное внимание управлению рисками и повышению кредитного качества инвестиционного портфеля. Благодаря профессиональному управлению портфелем, несмотря на давление внешних факторов, действующая Консервативная инвестиционная стратегия Фонда позволила заработать положительную в реальном выражении инвестиционную доходность, превышающую официально объявленный уровень инфляции.",
                "Доход по итогам года уже появился на пенсионных счетах наших участников. Приглашаем клиентов заглянуть в электронные выписки.",
            ]
        },
        {
            id: 2,
            title: "Группа компаний «БЛАГОСОСТОЯНИЕ» приобрела 100% акций Акционерного общества «ИНТАЧ СТРАХОВАНИЕ»(INTOUCH)",
            date: "2016-04-24T08:00:00.000Z",
            paragraphs: [
                ' "Акционерное общество «Страховая компания БЛАГОСОСТОЯНИЕ» приобрела 100% акций Акционерного общества «ИНТАЧ СТРАХОВАНИЕ» (INTOUCH)',
                "08 декабря 2015 года АО «СК БЛАГОСОСТОЯНИЕ» подписала соглашение со страховым холдингом RSA Group и Европейским банком реконструкции и развития о приобретении 100% акций АО «ИНТАЧ СТРАХОВАНИЕ» (INTOUCH).",
                "29 января АО «СК БЛАГОСОСТОЯНИЕ» завершила сделку по приобретению 100% акций АО «ИНТАЧ СТРАХОВАНИЕ».",
                "INTOUCH - лидер российского рынка страхования в области инновационных предложений для своих клиентов. Является одной из первых директ-компаний в России, осуществляющих страхование без посредников и удаленное урегулирование убытков. INTOUCH специализируется на прямых продажах полисов автострахования, страхования имущества и гражданской ответственности, страхования от несчастного случая, страхования выезжающих за рубеж.",
                "INTOUCH работает на российском рынке с 2008 года, специализируется на модели прямого страхования – страхования без посредников, осуществляя оформление договора по телефону ичерез сеть интернет, а также удаленное урегулирование страховых случаев. В соответствии с данными промежуточной финансовой отчетности за 9 месяцев 2015 года, основанными на принципах Международных стандартов финансовой отчетности (МСФО), компания демонстрирует темпы роста сборов существенно выше рыночных. Рост по сравнению с аналогичным показателем прошлого года составил 32,3%. За 9 месяцев 2015 года компания показала прибыль до налогообложения в размере 67 миллионов рублей. Текущий уставной капитал АО «ИНТАЧ СТРАХОВАНИЕ» составляет более 755 млн. рублей.",
                "Дмитрий Максимов, генеральный директор АО «СК БЛАГОСОСТОЯНИЕ»:",
                '«Приобретение лидера рынка прямого страхования, обладающего высокоразвитой технологической платформой и эффективными каналами продаж, последующее синергетическое развитие компаний за счет кросс-продаж и оптимизации операционных расходов открывает возможность качественного роста бизнеса образованной страховой группы». "',
            ]
        },
        {
            id: 1,
            title: "RAEX (Эксперт РА) подтвердил рейтинг НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++",
            date: "2018-10-04T08:00:00.000Z",
            paragraphs: [
                " В качестве позитивных факторов были отмечены консервативная структура размещения (на 30.09.2015 фонд размещал пенсионные резервы только на банковские депозиты и в государственные ценные бумаги, а также бумаги субъектов федерации), консервативная структура размещения ИОУД и высокая надежность УК, с которыми сотрудничает фонд при размещении пенсионных резервов (УК «Сбербанк Управление Активами», УК «ТРАНСФИНГРУП» имеют рейтинг надежности и качества услуг от RAEX (Эксперт РА) на уровне А++). Также поддержку рейтингу оказывают высокий уровень организации риск-менеджмента, высокий размер среднего счета участника фонда по НПО (на 30.09.2015 составляет 205 тыс. руб.) и умеренно высокая диверсификация пенсионных резервов по вкладчикам (на долю 3 крупнейших вкладчиков приходится 28% пенсионных резервов). Кроме того фонд характеризуется невысокой долей пенсионеров среди участников фонда (на 30.09.2015 доля пенсионеров составляла менее 1%), высокими показателями ликвидности и высоким качеством стратегического обеспечения.",
                "«НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» входит в Группу компаний ЗАО «СК БЛАГОСОСТОЯНИЕ», собственником которой является НПФ «БЛАГОСОСТОЯНИЕ». Высокая вероятность поддержки со стороны НПФ «БЛАГОСОСТОЯНИЕ», финансовый потенциал которого позволяет оказать поддержку фонду в случае такой необходимости, была выделена в качестве умеренного фактора поддержки» - отмечает Вероника Иванова, директор по корпоративным рейтингам.",
                "В качестве сдерживающих факторов аналитиками агентства были выделены невысокий уровень достаточности ИОУД (отношение ИОУД на 30.09.2015 к операционным расходам фонда по итогам 2014 года, за вычетом минимального нормативного значения, составляет 2,5; отношение ИОУД к РППО составляет 2,75%) и невысокий уровень диверсификации пенсионных резервов по УК (фонд сотрудничает с двумя УК; 52,9% пенсионных резервов приходится на УК АО «Сбербанк Управление Активами», 5,6% – на ЗАО УК «ТРАНСФИНГРУП», остальную часть резервов фонд размещает самостоятельно).",
                " НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» (номер лицензии №383/2 от 16 июня 2009 г.) осуществляет деятельность по негосударственному пенсионному обеспечению. На 30.09.2015 пенсионные резервы НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» составляли 7,1 млрд. рублей, ИОУД – 268,1 млн. рублей. На 30.09.2015 фонд занимал 35-е место по объему имущества, 15-е место по объему пенсионных резервов. ",
            ]
        },
        {
            id: 0,
            title: "«Эксперт РА» (RAEX) подтвердил рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++",
            date: "2015-02-25T09:00:00.000Z",
            paragraphs: [
                "«Эксперт РА» (RAEX) подтвердил рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++. «Исключительно высокий (наивысший) уровень надежности». Прогноз по рейтингу «стабильный».",
                "2«Эксперт РА» (RAEX) подтвердил рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++. «Исключительно высокий (наивысший) уровень надежности». Прогноз по рейтингу «стабильный».",
            ]
        },
    ];
    // ширина контейнера ссылок
    var getLinkContainerWidth = function (width) {
        setWidthLink(width);
    };
    // console.log(widthLink);
    react_1.useEffect(function () {
        // получаем количество детей массива, новостных колонок (NewsLinkContainer)
        setAmountChildren(news.length);
        // высчитываем общую длину карусельной ленты (carousel-tape)
        setOverallWidth(widthLink * amountChildren);
    }, [amountChildren, news.length, widthLink]);
    console.log("amountChildren :" + amountChildren);
    console.log("overallWidth:" + overallWidth);
    // Получаем значение q
    var getValueQOnClickArrowLeft = function () {
        if (q !== 0) {
            setQ(function (prev) { return prev - 1; });
        }
        if (q < 0) {
            setQ(0);
        }
    };
    var getValueQOnClickArrowRight = function () {
        if (screenWidth < 855) {
            if (q < amountChildren - 1) {
                setQ(function (prev) { return prev + 1; });
            }
        }
        if (screenWidth > 855) {
            if (q < amountChildren - 2) {
                setQ(function (prev) { return prev + 1; });
            }
        }
    };
    // console.log("q: " + q);
    // get value j в зависимости от ширины экрана screenWidth (< 855 или > 855 )
    // во время постройки DOM, определяем данный метод в хук useEffect.
    // Для работы с кликом - в  onClickLeft() и в  onClickRight()
    var getValueJ = function () {
        if (screenWidth < 855) {
            setJ(q);
        }
        else {
            setJ(q + 1);
        }
    };
    // console.log("q: " + q, "j: " + j);
    // scrolling
    var scrollToTheLeft = function () {
        setScrollWidth(q * widthLink);
        setRight(scrollWidth);
        // console.log("scrollToTheLeft. right :" + right);
    };
    var scrollToTheRight = function () {
        // console.log("q =" + q, "widthLink = " + widthLink);
        setScrollWidth(q * widthLink);
        // console.log("scrollWidth :" + scrollWidth);
        setRight(scrollWidth);
        // console.log("right =" + right);
        if (screenWidth < 855) {
            // console.log("scrollToTheRight. right :" + right);
            if (scrollWidth >= overallWidth) {
                // setRight(overallWidth - widthLink);
                // console.log("scrollToTheRight. right :" + right);
            }
        }
        if (screenWidth > 855) {
            // console.log("right =" + right);
            if (scrollWidth >= overallWidth - widthLink) {
                setRight(overallWidth - 2 * widthLink);
                // console.log("scrollToTheRight. right :" + right);
            }
        }
    };
    // клик по левой стрелке
    var onClickLeftArrow = function () {
        // getOverallWidth();
        getValueQOnClickArrowLeft();
        // getValueJ();
        scrollToTheLeft();
    };
    // клик по правой стрелке
    var onClickRightArrow = function () {
        // getOverallWidth();
        getValueQOnClickArrowRight();
        // getValueJ();
        scrollToTheRight();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(CarouselHeader_1["default"], { headerTitle: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isNoCursorLeft: isNoCursorLeft, isNoCursorRight: isNoCursorRight, onClickLeft: onClickLeftArrow, onClickRight: onClickRightArrow }),
        react_1["default"].createElement("div", { className: NewsBlock_module_scss_1["default"]["carousel"] },
            react_1["default"].createElement("div", { className: NewsBlock_module_scss_1["default"]["scrollableElement"], style: { right: right + "px" } },
                react_1["default"].createElement(MainCarousel_1["default"], { qq: q, jj: j, carouselLinks: news, emitValueWidth: getLinkContainerWidth })))));
};
exports["default"] = NewsBlock;
