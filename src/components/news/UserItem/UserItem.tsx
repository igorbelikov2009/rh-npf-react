import React, { FC } from "react";
import { IUser } from "../../../models/types";
import styles from "./UserItem.module.scss";

// interface IUser {
//     id: number;
//     name: string;
//     email: string;
//   }

const UserItem: FC<IUser> = ({ id, name, email }) => {
  return (
    <div className={styles["user-item"]}>
      <h3 className={styles["user-item__id"]}>id: {id} </h3>
      <p className={styles["user-item__name"]}> {name} </p>
      <p className={styles["user-item__email"]}> {email} </p>
    </div>
  );
};

export default UserItem;
