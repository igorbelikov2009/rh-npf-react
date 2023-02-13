import React, { FC } from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  closeLoginForm: () => void;
  isVisible: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ closeLoginForm, isVisible }) => {
  const checkForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={isVisible ? styles["login-form__opacity1"] : styles["login-form__opacity0"]} onSubmit={checkForm}>
      <h1 className={styles["login-form__heading"]}>Вход</h1>

      <div className={styles["login-form__block-of-forms"]}>
        <div className={styles["login-form__input-container"]}>
          PhoneInputCopy
          {/* <!-- <GuiPhoneInput @emitInputValues="onInputPhone" /> --> */}
          {/* <GuiPhoneInputCopy @emitInputValues="onInputPhone" /> */}
        </div>

        <div className={styles["login-form__input-container"]}>
          EmailInput
          {/* <GuiEmailInput @emitInputValues="onInputEmail" /> */}
        </div>

        <div className={styles["login-form__input-container"]}>
          PasswordInput
          {/* <GuiPasswordInput @emitInputValues="onInputPassword" /> */}
        </div>

        <div className={styles["login-form__button-container"]}>
          <PrimaryButton children="Продолжить" />
        </div>
      </div>

      <p className={styles["login-form__title"]}>
        Вход для клиентов
        <span className={styles["login-form__span"]}> НПФ "Ренессанс - пенсии"</span>
      </p>

      <p className={styles["login-form__subtitle"]}>
        Нажимая кнопку «Продолжить», вы выражаете согласие на обработку своих персональных данных и принимаете условия
        соглашения
      </p>

      <button className={styles["login-form__cross-switch"]} onClick={closeLoginForm}>
        <DarkIcon icon="Cross" />
      </button>
    </form>
  );
};

export default LoginForm;
