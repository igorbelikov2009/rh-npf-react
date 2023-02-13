import React, { FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  name: string;
  isError: boolean;
  emitValue: (value: string) => void;
  emitFocus: () => void;
  emitBlur: () => void;
}

const InputField: FC<InputFieldProps> = ({ type, name, isError, emitValue, emitFocus, emitBlur }) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <input
        className={isError ? styles["my-input__field_invalid"] : styles["my-input__field"]}
        type={type}
        name={name}
        onFocus={emitFocus}
        onBlur={emitBlur}
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputField;
