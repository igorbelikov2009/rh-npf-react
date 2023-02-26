//  Не задействовал, удалять жалко
import React, { FC } from "react";
import styles from "./MyModal.module.scss";

interface MyModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];

  // С помощью этой конструкции мы определяем, добавлять класс (styles.active) или нет.
  if (visible) {
    // делаем rootClasses = myModal.active
    rootClasses.push(styles.active);
  }

  return (
    // join(" ") возвращает строку, и в этой строке будет 2 класса, склеенных по пробелу
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles["myModalContent"]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
