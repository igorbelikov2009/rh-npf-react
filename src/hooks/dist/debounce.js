"use strict";
exports.__esModule = true;
exports.useDebounce = void 0;
var react_1 = require("react");
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = react_1.useState(value), debounced = _a[0], setDebounced = _a[1];
    react_1.useEffect(function () {
        var handler = setTimeout(function () { return setDebounced(value); }, delay);
        return function () { return clearTimeout(handler); };
    }, [value, delay]);
    return debounced;
}
exports.useDebounce = useDebounce;
// Без этого хука, ввод каждого символа в инпуте на HomePage будет делать запрос.
// Сервер посчитает, что это спам и забанит нас. Актуален для поиска
