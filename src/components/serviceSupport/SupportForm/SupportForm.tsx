/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";
import MyInput from "../../ui/inputs/MyInput/MyInput";
import styles from "./SupportForm.module.scss";

const SupportForm: FC = () => {
  const [registrationPassed, setRegistrationPassed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const checkForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };
  const onChangeFirstName = (value: string) => {
    setFirstName(value);
  };
  const onChangePhone = (value: string) => {
    setPhone(value);
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangeCompanyName = (value: string) => {
    setCompanyName(value);
  };
  const onChangeMessage = (value: string) => {
    setMessage(value);
  };

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

          <form className={styles["support-form__form"]} onSubmit={checkForm}>
            <MyInput
              emitValue={onChangeFirstName}
              type="text"
              name="firstName"
              title="Ваше имя"
              isRequiredError={true}
              isValidationError={false}
              validationError="Некорректное имя"
            />
            <MyInput
              emitValue={onChangePhone}
              type="text"
              name="phone"
              title="Ваш телефон"
              maxLength={11}
              isRequiredError={false}
              isValidationError={false}
              validationError="Некорректный номер"
            />
            <MyInput
              emitValue={onChangeEmail}
              type="text"
              name="email"
              title="Некорректный email"
              isRequiredError={false}
              isValidationError={false}
              validationError="Некорректное имя"
            />
            <MyInput
              emitValue={onChangeCompanyName}
              type="text"
              name="companyName"
              title="Название компании"
              isRequiredError={false}
              isValidationError={false}
              validationError="Некорректное имя"
            />
            <MyInput
              emitValue={onChangeMessage}
              type="text"
              name="message"
              title="Сообщение"
              isRequiredError={false}
              isValidationError={false}
              validationError="Минимальное количество символов 15"
            />

            <div className={styles["support-form__button-container"]}>
              <PrimaryButton children="Оставить заявку" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
