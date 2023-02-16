import React, { FC, useState } from "react";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";
import styles from "./CallBack.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";

type Inputs = {
  userName: string;
  phone: string;
};

interface CallBackProps {
  closeCallBack: () => void;
  isVisible: boolean;
}

const CallBack: FC<CallBackProps> = ({ closeCallBack, isVisible }) => {
  const [isDormancyUserName, setDormancyUserName] = useState(true);
  const [isDormancyPhone, setDormancyPhone] = useState(true);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" });

  let userData = {};
  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //  data - это набор данных из нашей формы
    userData = data;
    // console.log(data);
    // console.log(userData);
    localStorage.setItem("userData-renaissance-pension", JSON.stringify(userData));
    reset();
    setDormancyUserName(true);
    setDormancyPhone(true);
    closeCallBack();
  };
  // console.log(watch("firstName")); // следит за изменением значения

  // Восстановить из localStorage
  if (localStorage.getItem("userData-renaissance-pension")) {
    userData = JSON.parse(localStorage.getItem("userData-renaissance-pension") || "");
    // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
    // не была нулевой. JSON.parse(localStorage.getItem("userData-renaissance-pension") || "")
  }
  // console.log(userData);

  return (
    <form className={styles["call-back"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["call-back__input-container"]}>
        <label className={styles["my-input__label"]}>
          <InputTitle title="Как вас зовут?" isDormancy={isDormancyUserName} />

          <input
            className={errors?.userName ? styles["my-input__field_invalid"] : styles["my-input__field"]}
            type="text"
            {...register("userName", {
              required: "Это поле обязательно к заполнению",
              onChange: (event) => {
                setDormancyUserName(false);
              },
              onBlur: () => {
                if (watch("userName").length === 0) {
                  setDormancyUserName(true);
                }
              },
              minLength: {
                value: 3,
                message: "Минимум 3 символов",
              },
            })}
          />

          {errors?.userName && (
            <span className={styles["my-input__error"]}>
              <> {errors?.userName?.message || "Error!"}</>
            </span>
          )}
        </label>
      </div>

      <div className={styles["call-back__input-container"]}>
        <label className={styles["my-input__label"]}>
          <InputTitle title="Телефон" isDormancy={isDormancyPhone} />

          <input
            className={errors?.phone ? styles["my-input__field_invalid"] : styles["my-input__field"]}
            type="tel"
            {...register("phone", {
              required: "Это поле обязательно к заполнению",
              onChange: (event) => {
                setDormancyPhone(false);
              },
              onBlur: () => {
                if (watch("phone").length === 0) {
                  setDormancyPhone(true);
                }
              },
              minLength: {
                value: 11,
                message: "Минимум 11 символов",
              },
              maxLength: {
                value: 16,
                message: "Максимум 16 символов",
              },
            })}
          />
          {errors?.phone && (
            <span className={styles["my-input__error"]}>
              <> {errors?.phone?.message || "Error!"} </>
            </span>
          )}
        </label>
      </div>

      <div className={styles["call-back__button-container"]}>
        <InputSubmit children="Отправить" disabled={!isValid} />
      </div>
    </form>
  );
};

export default CallBack;
