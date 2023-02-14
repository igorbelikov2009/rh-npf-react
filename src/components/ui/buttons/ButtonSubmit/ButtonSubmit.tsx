import React, { FC } from "react";
import styles from "./ButtonSubmit.module.scss";

interface ButtonSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const ButtonSubmit: FC<ButtonSubmitProps> = ({ children, disabled, ...props }) => {
  return (
    <button type="submit" disabled={disabled} className={styles["button-submit"]}>
      {children}
    </button>
  );
};

export default ButtonSubmit;
