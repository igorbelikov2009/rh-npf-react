import { userSlice } from "./UserSlice";
import { IUser } from "./../../models/types";
import { AppDispacth } from "../store";
import axios from "axios";

export const fetchUsers = () => async (dispath: AppDispacth) => {
  try {
    // Слайс создаёт для нас экшен-креатеры, поэтому, мы можем сразу их задиспачить.
    // Перед тем, как делать запрос, мы диспачим экшен usersFetching()
    dispath(userSlice.actions.userFetching());
    // делаем запрос
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users/");
    // После того, как запрос прошёл успешно, мы диспатчим экшен-креатер usersFetchingSuccess()
    // и туда передаём как раз массив пользователей - (response.data)
    dispath(userSlice.actions.userFetchingSuccess(response.data));
  } catch (e: any) {
    // Как payload, передаём туда некоторое сообщение об ошибке
    // Само сообщение мы получим из объекта error в поле (e.message)
    dispath(userSlice.actions.userFetchingError(e.message));
  }
};
