import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../../data/DataNews/DataNews";

interface NewsState {
  news: INews[];
  isLoading: boolean;
  error: string;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
});

export default newsSlice.reducer;
// передаём newsReducer в store/store.ts в корневой редюсер
