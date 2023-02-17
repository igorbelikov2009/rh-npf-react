import React, { FC, useReducer } from "react";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";
import styles from "./BottomBlock.module.scss";

const initialCount = { count: 0 };

function countReducer(stateCount: any, actionCount: any) {
  switch (actionCount.type) {
    case "increment":
      return {
        ...stateCount,
        count: stateCount.count + 1,
      };
    case "decrement":
      return {
        ...stateCount,
        count: stateCount.count - 1,
      };
    default:
      throw new Error();
  }
}

const BottomBlock: FC = () => {
  const [stateCount, dispatchCount] = useReducer(countReducer, initialCount);

  return (
    <>
      <div className={styles.block}>
        <div className={styles.block__head}>
          <h1 className={styles.block__heading}>countReducer</h1>
        </div>

        <div className={styles.block__head}>Count: {stateCount.count}</div>

        <div className={styles["block__container-button"]} onClick={() => dispatchCount({ type: "decrement" })}>
          <PrimaryButton children="-" />
        </div>

        <div className={styles["block__container-button"]} onClick={() => dispatchCount({ type: "increment" })}>
          <PrimaryButton children="+" />
        </div>
      </div>
    </>
  );
};

export default BottomBlock;
