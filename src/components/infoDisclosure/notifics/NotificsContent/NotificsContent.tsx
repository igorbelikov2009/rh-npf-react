import React, { FC } from "react";
import { INotificsContent } from "../../../../models/types";
import styles from "./NotificsContent.module.scss";

interface NotificsContentProps {
  content: INotificsContent;
  isVisible: boolean;
}

const NotificsContent: FC<NotificsContentProps> = ({ isVisible, content }) => {
  return (
    <>
      {isVisible && (
        <div>
          <p className={styles["paragraph"]}>
            <span className={styles["paragraph-span"]}> {content.date}</span>

            <span className={styles["paragraph-span"]}>{content.description}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default NotificsContent;
