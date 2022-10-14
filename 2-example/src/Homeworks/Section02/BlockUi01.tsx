import React from "react";
import { text } from "stream/consumers";
import styles from "./style.module.css";

type Props = {
  text: string;
  color1: string;
  color2: string;
  percentage: number;
};

const BlockUi01 = (props: Props) => {
  return (
    <>
      <div className={styles.divContainer}>
        <div
          className={styles.divLeft}
          style={{ backgroundColor: props.color1 }}
        >
          <p className={styles.textLeft}>{props.text}</p>
        </div>
        <div className={styles.divRight}>
          <div
            className={styles.divShow}
            style={{
              backgroundColor: props.color2,
              width: `${props.percentage}%`,
            }}
          >
            <p className={styles.textPercentage}>{props.percentage}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUi01;
