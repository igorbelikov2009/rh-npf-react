import React from "react";
import styles from "./Button.module.scss";

const Button = (props: { children: any }) => {
  const { children } = props;
  console.log(styles);
  return <button className={styles.active}>{children}</button>;
};

export default Button;
