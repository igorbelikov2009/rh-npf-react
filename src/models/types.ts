export interface IGoods {
  id: number;
  name: string;
}

export interface INews {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
}

export interface INewsLink {
  id: number;
  title: string;
  date: string;
}

export interface IColumn {
  title: string;
  description: string;
}

export interface ICard {
  icon: string;
  title?: string;
  span?: string;
  subtitle: string;
}

export interface IOptionItem {
  date: string;
  value: string;
  id: string;
}

export interface IExpandingTable {
  tableName: string;
  headings: string[];
  arrayRows: string[][];
}

export interface IPercent {
  percent01: string;
  percent02: string;
  percent03: string;
  percent04: string;
  percent05: string;
  percent06: string;
}

export type ITitle = {
  title: string;
};

export interface IBusinessCard {
  icon: string;
  header: string;
  titles: string[];
}

export interface IObjectQuestionsAnswers {
  question: string;
  answer: string[];
  isParagraph?: boolean;
  isParagraphBefore?: boolean;
}

export interface ITableContributions {
  headings: string[];
  arrayRows: string[][];
}

export interface IAdaptiveRadioItem {
  value: string;
  id: string;
  title: string;
  name?: string;
}

export interface IIndicatorRow {
  title: string;
  index: string;
}

export interface ArchiveLinkProps {
  href: string;
  title: string;
  subtitle?: string;
}

export interface IIndicatorsYear {
  heading?: string;
  subheading?: string;
  indicatorRows?: IIndicatorRow[];
  archiveLinks: ArchiveLinkProps[];
}

export interface IReport {
  heading: string;
  archiveLinks: {
    href: string;
    title: string;
    subtitle: string;
  }[];
}

export interface RadioItemProps {
  value: string;
  title: string;
  name: string;
}

export interface ISpecDepositoryBlock {
  subheading: string;
  title: string;
  subtitle: string;
}

export interface INotificsContent {
  date: string;
  description: string;
}

export interface IFormsOfCreation {
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export interface IInfo {
  id?: number;
  paragraph: string;
  number?: number | undefined;
}
