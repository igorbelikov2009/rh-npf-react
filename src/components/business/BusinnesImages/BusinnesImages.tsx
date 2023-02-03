import React from "react";
import styles from "./BusinnesImages.module.scss";

const BusinnesImages = () => {
  return (
    <section className={styles["businnes-images"]}>
      <div className={styles["businnes-images__container"]}>
        <img className={styles["businnes-images__image"]} src="/images/businnes/table.jpg" alt="table" />

        <img className={styles["businnes-images__image"]} src="/images/businnes/workers.jpg" alt="workers" />
      </div>
    </section>
  );
};

export default BusinnesImages;
