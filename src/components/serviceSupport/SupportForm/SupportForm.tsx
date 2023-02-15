import React, { FC, useState } from "react";
import styles from "./SupportForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";

type Inputs = {
  userName: string;
  phone: string;
  email: string;
  companyName: string;
  message: string;
  password: string;
};

const SupportForm: FC = () => {
  const [isDormancyUserName, setDormancyUserName] = useState(true);
  const [isDormancyPhone, setDormancyPhone] = useState(true);
  const [isDormancyEmail, setDormancyEmail] = useState(true);
  const [isDormancyCompanyName, setDormancyCompanyName] = useState(true);
  const [isDormancyMessage, setDormancyMessage] = useState(true);

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //  data - это набор данных из нашей формы
    console.log(data);
    reset();
    setDormancyUserName(true);
    setDormancyPhone(true);
    setDormancyEmail(true);
    setDormancyCompanyName(true);
    setDormancyMessage(true);
  };

  // console.log(watch("firstName")); // следит за изменением значения

  return (
    <section className={styles["support-form"]}>
      <div className={styles["support-form__container"]}>
        <div className={styles["support-form__content"]}>
          <div className={styles["support-form__customer-service"]}>
            <h1 className={styles["support-form__header"]}>
              Клиентская <span className={styles["support-form__span"]}>служба</span>
            </h1>
            <a className={styles["support-form__phone-support"]} href="tel:+78002004766">
              8 800 200-47-66
            </a>
            <p className={styles["support-form__phone-title"]}>звонок бесплатный</p>
          </div>

          {/* Здесь через onSubmit мы передаём данные полей в обёртку handleSubmit() */}
          <form className={styles["support-form__form"]} onSubmit={handleSubmit(onSubmit)}>
            {/* включить проверку с обязательными или другими стандартными правилами проверки HTML */}
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
                <span className={styles["my-input__error"]}>{errors?.userName?.message || "Error!"}</span>
              )}
            </label>

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
                <span className={styles["my-input__error"]}>{errors?.phone?.message || "Error!"} </span>
              )}
            </label>

            <label className={styles["my-input__label"]}>
              <InputTitle title="Электронная почта" isDormancy={isDormancyEmail} />

              <input
                className={errors?.email ? styles["my-input__field_invalid"] : styles["my-input__field"]}
                type="email"
                {...register("email", {
                  required: "Это поле обязательно к заполнению",
                  onChange: (event) => {
                    setDormancyEmail(false);
                  },
                  onBlur: () => {
                    if (watch("email").length === 0) {
                      setDormancyEmail(true);
                    }
                  },

                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
              />
              {errors?.email && (
                <span className={styles["my-input__error"]}>{errors?.email?.message || "Error!"} </span>
              )}
            </label>

            <label className={styles["my-input__label"]}>
              <InputTitle title="Название компании" isDormancy={isDormancyCompanyName} />

              <input
                className={errors?.companyName ? styles["my-input__field_invalid"] : styles["my-input__field"]}
                type="text"
                {...register("companyName", {
                  required: "Это поле обязательно к заполнению",
                  onChange: (event) => {
                    setDormancyCompanyName(false);
                  },
                  onBlur: () => {
                    if (watch("companyName").length === 0) {
                      setDormancyCompanyName(true);
                    }
                  },
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
              />
              {errors?.companyName && (
                <span className={styles["my-input__error"]}>{errors?.companyName.message || "Error!"} </span>
              )}
            </label>

            <label className={styles["my-input__label"]}>
              <InputTitle title="Сообщение" isDormancy={isDormancyMessage} />

              <input
                className={errors?.message ? styles["my-input__field_invalid"] : styles["my-input__field"]}
                type="text"
                {...register("message", {
                  required: "Это поле обязательно к заполнению",
                  onChange: (event) => {
                    setDormancyMessage(false);
                  },
                  onBlur: () => {
                    if (watch("message").length === 0) {
                      setDormancyMessage(true);
                    }
                  },

                  minLength: {
                    value: 15,
                    message: "Минимум 15 символов",
                  },
                })}
              />
              {errors?.message && (
                <span className={styles["my-input__error"]}>{errors?.message?.message || "Error!"} </span>
              )}
            </label>

            <div className={styles["support-form__button-container"]}>
              <InputSubmit children="Оставить заявку" disabled={!isValid} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
