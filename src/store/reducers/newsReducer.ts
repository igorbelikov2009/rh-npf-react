import { INews } from "./../../models/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserDate from "../../api/UserDate/UserDate";

export const getFormatedNews = createAsyncThunk("news/getFormatedNews", async function (_, { rejectWithValue }) {
  try {
    const response = await fetch("http://localhost:5000/news");
    const data = await response.json();

    // Сортируем по дате массив новостей
    const newsSortedByDate: INews[] = [...data].sort((a, b) =>
      new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
    );

    //  Если newsSortedByDate упорядочить по дате, то удаление будет происходить некорректно
    //
    //     const newsUsedForComputing: INews[] = [...newsSortedByDate].map((item, index) => ({
    //       id: Number(index),
    //       title: String(item.title),
    //       date: String(item.date),
    //       paragraphs: item.paragraphs,
    //     }));

    // Полученный массив форматируем по дате
    const formatedDateNews: INews[] = [...newsSortedByDate].map((item) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));

    const respon = {
      newsSortedByDate,
      formatedDateNews,
    };
    return respon;
    // const:
  } catch (error: any) {
    // и передам ошибку определённым образом в extraReducers, в метод [getFormatedNews.rejected.type],
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

export const deleteNewsItem = createAsyncThunk(
  "news/deleteNewsItem",
  async function (id: number, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:5000/news/${id}`, {
        method: "DELETE",
      });
      console.log(response);

      // На сервере нужный объект мы уже
      // удалили, нам нужно удалить его локально, вызвать removeNews() из newsSlice.
      // Для того, чтобы его вызвать, у нас уже есть диспетчер.
      // Мы его получили через объект вторым параметром.
      dispatch(removeNews({ id }));
      //   const data = response.json();
      //   console.log(data);
      //   return data;
    } catch (error: any) {
      return rejectWithValue("Не могу удалить новость, ошибка на сервере!");
    }
  }
);

interface IRespon {
  newsSortedByDate: INews[];
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
    newsSortedByDate: [],
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
    removeNews(state, action) {
      state.news = state.news.filter((item) => item.id !== action.payload.id);
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
    // deleteNewsItem // У меня работает без экстраредюсера
    [deleteNewsItem.pending.type]: (state) => {
      state.isLoading = true;
      state.error = ""; // Обнуляем, на всякий случай. Вдруг, прежде, была ошибка.
    },
    [deleteNewsItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { addNews, removeNews } = newsSlice.actions;

export default newsSlice.reducer;
// регистрируем в store.ts
