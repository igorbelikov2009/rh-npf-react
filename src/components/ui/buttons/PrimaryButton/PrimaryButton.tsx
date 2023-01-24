import React, { FC } from "react";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button disabled={disabled} className={styles["primary-button"]}>
      {children}
    </button>
  );
};

export default PrimaryButton;
