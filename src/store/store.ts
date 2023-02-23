import { goodsAPI } from "./../services/GoodsAPI";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import { aboutFundAPI } from "../services/aboutFundAPI";
import { aboutFundCardsAPI } from "../services/aboutFundCardsAPI";
import { investmentCardsApi } from "../services/investmentCardsAPI";
import { investmentOptionsAPI } from "../services/investmentOptionsAPI";
import { investmentTablesAPI } from "../services/investmentTablesAPI";
import { investPercentsAPI } from "../services/investPercentsAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  newsReducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer, // потом удалить
  [aboutFundAPI.reducerPath]: aboutFundAPI.reducer,
  [aboutFundCardsAPI.reducerPath]: aboutFundCardsAPI.reducer,
  [investmentCardsApi.reducerPath]: investmentCardsApi.reducer,
  [investmentOptionsAPI.reducerPath]: investmentOptionsAPI.reducer,
  [investmentTablesAPI.reducerPath]: investmentTablesAPI.reducer,
  [investPercentsAPI.reducerPath]: investPercentsAPI.reducer,
});

// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Добавляем к дефолтному мидлвееру, методом concat(), мидлвеер из нашего postAPI.
    // Затем, методом concat(), добавляем мидлвеер из нашего todoAPI
    // Затем, методом concat(), добавляем мидлвеер из нашего commentAPI
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(goodsAPI.middleware) // потом удалить
        .concat(aboutFundAPI.middleware)
        .concat(aboutFundCardsAPI.middleware)
        .concat(investmentCardsApi.middleware)
        .concat(investmentOptionsAPI.middleware)
        .concat(investmentTablesAPI.middleware)
        .concat(investPercentsAPI.middleware),
  });
};

// Три базовых типа, которые нам в дальнейшей работе понадобятся
// Нам необходимо получить тип нашего состояния
export type RootState = ReturnType<typeof rootReducer>;
// Так же получим тип самого стора, с помощью ретюрнтайп
export type AppStore = ReturnType<typeof setupStore>;
// Так же получим тип dispatch нашего хранилища. Определив тип диспатча,
// мы не сможем задиспачить те экшены, которые мы не определили
export type AppDispacth = AppStore["dispatch"];
