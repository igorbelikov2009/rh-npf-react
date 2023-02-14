import React, { FC, useState } from "react";
import InputTitle from "../InputTitle/InputTitle";
import styles from "./InputReact.module.scss";
import { useForm } from "react-hook-form";

type Inputs = {
  fieldName: string;
  //   firstName: string;
  // lastName: string;
};

interface InputReactProps {
  type: string; // тип поля
  name: string; // название поля
  title: string; // "Ваше имя"
}

const InputReact: FC<InputReactProps> = ({ type, name, title }) => {
  //   const [isActive, setActive] = useState(false);
  const [isDormancy, setDormancy] = useState(true);
  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors }, // объект с ошибками и т.д...
  } = useForm<Inputs>({ mode: "onBlur" });

  return (
    <label className={styles["my-input__label"]}>
      <InputTitle title={title} isDormancy={isDormancy} />

      <input
        className={errors ? styles["my-input__field_invalid"] : styles["my-input__field"]}
        type={type}
        {...register("fieldName", {
          required: "Это поле обязательно к заполнению",
          onBlur: () => {
            setDormancy(true);
          },
          maxLength: {
            value: 11,
            message: "Максимум 11 символов",
          },
        })}
        name={name}
        onFocus={() => setDormancy(false)}
        onBlur={() => setDormancy(true)}
      />

      {errors?.fieldName && <p className={styles["my-input__error"]}>{errors?.fieldName?.message || "Error!"} </p>}
    </label>
  );
};

export default InputReact;
