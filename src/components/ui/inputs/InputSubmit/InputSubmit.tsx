import React, { FC } from "react";
import styles from "./InputSubmit.module.scss";

interface InputSubmitProps {
  children: string;
  disabled?: boolean;
}

const InputSubmit: FC<InputSubmitProps> = ({ children, disabled }) => {
  return (
    <>
      <input type="submit" value={children} disabled={disabled} className={styles["input-submit"]} />
    </>
  );
};

export default InputSubmit;
