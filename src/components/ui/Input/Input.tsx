import React from "react";
import styles from "./Input.module.scss";

const Input = (props: { children: any }) => {
  const { children } = props;
  console.log(styles);

  return <input type={children} className={styles.active} />;
};

export default Input;
