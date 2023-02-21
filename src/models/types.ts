// тип одной колонки новостей
export type INews = {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
};

export type INewsLink = {
  id: number;
  title: string;
  date: string;
};
