import React, { FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  value: string;
  name: string;
  hasError: boolean;
  emitValue: (value: string) => void;
  emitFocus: () => void;
  emitBlur: () => void;
}

const InputField: FC<InputFieldProps> = ({ type, value, name, hasError, emitValue, emitFocus, emitBlur }) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        className={hasError ? styles["my-input__field_invalid"] : styles["my-input__field"]}
        type={type}
        name={name}
        value={value}
        onFocus={emitFocus}
        onBlur={emitBlur}
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputField;
