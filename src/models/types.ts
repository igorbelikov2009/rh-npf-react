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
