// тип одной колонки новостей
export interface IUser {
  id: number;
  name: string;
  email: string;
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
