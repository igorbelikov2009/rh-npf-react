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
    return rejectWithValue("Не удалось получить новости! " + error.message);
  }
});

interface IRespon {
  newsUsedForComputing: INews[];
  formatedDateNews: INews[];
}

interface NewsState {
  respon: IRespon;
  isLoading: boolean;
  error: string;
}

const initialState: NewsState = {
  respon: {
    newsUsedForComputing: [],
    formatedDateNews: [],
  },
  isLoading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
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

export default newsSlice.reducer;
// регистрируем в store.ts
