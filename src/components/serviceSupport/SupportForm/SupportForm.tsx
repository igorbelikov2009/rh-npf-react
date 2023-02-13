/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";
import styles from "./SupportForm.module.scss";

const SupportForm: FC = () => {
  const [registrationPassed, setRegistrationPassed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles["support-form"]} onSubmit={formHandler}>
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

          {/* @submit.prevent="checkForm" */}
          <form className={styles["support-form__form"]}>
            {/*   <GuiNameInput @emitInputValues="onInputFirstName" />

           <GuiPhoneInput @emitInputValues="onInputPhone" />

           <GuiEmailInput @emitInputValues="onInputEmail" />

           <GuiCompanyInput @emitInputValues="onInputCompanyName" />

           <GuiMessageInput @emitInputValues="onInputMessageInput" /> */}

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
