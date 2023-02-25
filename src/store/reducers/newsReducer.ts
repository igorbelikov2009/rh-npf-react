import { INews } from "./../../models/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserDate from "../../api/UserDate/UserDate";

export const getFormatedNews = createAsyncThunk("news/getFormatedNews", async function (_, { rejectWithValue }) {
  try {
    const response = await fetch("http://localhost:5000/news");
    const data = await response.json();

    // Сортирум по дате массив новостей
    const newsSortedByDate: INews[] = [...data].sort((a, b) =>
      new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
    );

    // В отсортированном по дате массиве изменяем id, делаем его равным индексу,
    // начиная с нуля. Получаем массив используемый для дальнейших вычислений.
    const newsUsedForComputing: INews[] = [...newsSortedByDate].map((item, index) => ({
      id: Number(index),
      title: String(item.title),
      date: String(item.date),
      paragraphs: item.paragraphs,
    }));

    // Полученный массив форматируем по дате
    const formatedDateNews: INews[] = [...newsUsedForComputing].map((item) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));

    const respon = {
      newsUsedForComputing,
      formatedDateNews,
    };
    return respon;
    // const:
  } catch (error: any) {
    // и передам ошибку определённым образом в extraReducers, в метод [fetchPostsMich.rejected.type],
    // где её можно будет корректно обработать.
    return rejectWithValue(
      "Запусти сервер. Создай параллельный терминал и скомандуй в нём: json-server --watch db.json --port 5000"
    );
  }
});

export const addNewsItem = createAsyncThunk(
  "news/addNewsItem",
  async function (newsItem: INews, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("http://localhost:5000/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsItem),
      });

      const data = await response.json();
      console.log(data);
      dispatch(addNews(data));
    } catch (error: any) {
      return rejectWithValue("Не могу добавить новости, ошибка на сервере!");
    }
  }
);

interface IRespon {
  newsUsedForComputing: INews[];
  formatedDateNews: INews[];
}

interface NewsState {
  respon: IRespon;
  isLoading: boolean;
  error: string;
  news: INews[];
}

const initialState: NewsState = {
  respon: {
    newsUsedForComputing: [],
    formatedDateNews: [],
  },
  isLoading: false,
  error: "",
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    addNews(state, action) {
      state.news.push(action.payload);
    },
  },
  extraReducers: {
    [getFormatedNews.pending.type]: (state) => {
      state.isLoading = true;
      state.error = ""; // Обнуляем, на всякий случай. Вдруг, прежде, была ошибка.
    },
    [getFormatedNews.fulfilled.type]: (state, action: PayloadAction<IRespon>) => {
      state.isLoading = false;
      state.respon = action.payload;
    },
    [getFormatedNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { addNews } = newsSlice.actions;

export default newsSlice.reducer;
// регистрируем в store.ts
