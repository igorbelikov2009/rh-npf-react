// http://www.lingoes.net/en/translator/langcode.htm - ручное определение locale
const locale = navigator.language; // автоматическое определение locale
// console.log(locale); // ru-RU - это locale

const dateOptions: Intl.DateTimeFormatOptions = {
  day: "numeric", // numeric, 2-digit
  month: "long", // numeric, 2-digit, long, narrow, short
  year: "numeric", // numeric, 2-digit
  // timeZoneName:'long',
  // hour: "numeric",
  // minute:'numeric'
  //  здесь много чего
};

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
// Определяем UserDate как объект JS Intl.DateTimeFormat, который является
// конструктором объектов, включающих языка-зависимое форматирование даты и времени.
const UserDate = new Intl.DateTimeFormat(locale, dateOptions);

// const UserDate = new Intl.DateTimeFormat("ru-RU", dateOptions);
// То же самое, но locale определяем вручную.

export default UserDate;
// Форматирование дат под локаль пользователя Михаил Непомнящий
// https://www.youtube.com/watch?v=Wh2zd2oZOmo&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=4

// interface DateTimeFormatOptions {
//   localeMatcher?: "best fit" | "lookup" | undefined;
//   weekday?: "long" | "short" | "narrow" | undefined;
//   era?: "long" | "short" | "narrow" | undefined;
//   year?: "numeric" | "2-digit" | undefined;
//   month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
//   day?: "numeric" | "2-digit" | undefined;
//   hour?: "numeric" | "2-digit" | undefined;
//   minute?: "numeric" | "2-digit" | undefined;
//   second?: "numeric" | "2-digit" | undefined;
//   timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
//   formatMatcher?: "best fit" | "basic" | undefined;
//   hour12?: boolean | undefined;
//   timeZone?: string | undefined;
// }
