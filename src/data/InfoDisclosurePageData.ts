import { ArchiveLinkProps, IOptionItem, INotificsContent, ISpecDepositoryBlock, RadioItemProps } from "../models/types";

export const optionsItemsFundPerformance: IOptionItem[] = [
  {
    date: "2021",
    value: "2021",
    id: "0",
  },
  {
    date: "2020",
    value: "2020",
    id: "1",
  },
  {
    date: "2019",
    value: "2019",
    id: "2",
  },
  {
    date: "2018",
    value: "2018",
    id: "3",
  },
  {
    date: "2017",
    value: "2017",
    id: "4",
  },
];

export const linksDocumentsOfTitle: ArchiveLinkProps[] = [
  {
    href: "/pdf/infoOpening/documents-of-title/foundationCharter.pdf",
    title: "Устав фонда",
  },
  {
    href: "/pdf/infoOpening/documents-of-title/license.pdf",
    title: "Лицензия",
  },
  {
    href: "/pdf/infoOpening/documents-of-title/Свидетельство о государственной регистрации негосударственного пенсионного фонда-1576772418041.pdf",
    title: "Свидетельство о государственной регистрации негосударственного пенсионного фонда",
  },
  {
    href: "/pdf/infoOpening/documents-of-title/Свидетельство о постановке на учет в налоговом органе-1576772424907.pdf",
    title: "Свидетельство о постановке на учет в налоговом органе",
  },
];

export const optionsItemsReporting: IOptionItem[] = [
  {
    date: "2021",
    value: "2021",
    id: "0",
  },
  {
    date: "2020",
    value: "2020",
    id: "1",
  },
  {
    date: "2019",
    value: "2019",
    id: "2",
  },
  {
    date: "2018",
    value: "2018",
    id: "3",
  },
  {
    date: "2017",
    value: "2017",
    id: "4",
  },
  {
    date: "2016",
    value: "2016",
    id: "5",
  },
  {
    date: "2015",
    value: "2015",
    id: "6",
  },
];

export const optionsItemsSpecDepository: RadioItemProps[] = [
  {
    name: "information",
    value: "0",
    title: "Действующие",
  },
  {
    name: "information",
    value: "1",
    title: "Договоры прекращены",
  },
];

export const depository1: ISpecDepositoryBlock = {
  subheading: "АО ВТБ Специализированный депозитарий",
  title:
    "лицензия на осуществление деятельности в качестве специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов №22-000-1-00005 от 25 ноября 1997 года (бессрочная).",
  subtitle: "Договор №96 заключен 27.09.2010 г., бессрочный, действует",
};

export const depository2: ISpecDepositoryBlock = {
  subheading: "ООО «Дойче Банк»",
  title:
    "лицензия № 22-000-1-00060 от 25.01.2005г., на осуществление деятельности специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов, выданную Федеральной Службой по финансовым рынкам, срок окончания: лицензия предоставлена на срок 5 лет.",
  subtitle: "Договор №16-1/NPF/789 от 28.11.2008 г., на срок один год, прекращен 26.09.2010 г.",
};

export const contentsNotifics: INotificsContent[] = [
  {
    date: "2021-01-12T00:00:00.000",
    description:
      "АО НПФ «Ренессанс пенсии» заключил договор доверительного управления пенсионными резервами №311220/1 от 31 декабря 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
  },
  {
    date: "2020-02-21T00:00:00.000",
    description:
      "АО НПФ «Ренессанс пенсии» заключил договоры доверительного управления пенсионными резервами №200220/1 от 20 февраля 2020 года и №200220/2 от 20 февраля 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
  },
  {
    date: "2018-05-29T00:00:00.000",
    description:
      "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» заключил договор доверительного управления пенсионными резервами № 250518/1 от 25 мая 2018 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года).",
  },
];
