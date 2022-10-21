import React from "react";
import { FaFacebookF } from "react-icons/fa";
import styles from "./style4.module.css";

type Props = {
  text: string;
  totalNum: number;
  percentage1: number;
  percentage2: number;
  percentage3: number;
  percentage4: number;
  percentage5: number;
};

const BlockUi4 = (props: Props) => {
  return (
    <>
      <div className={styles.divContainer}>
        <div className={styles.divTop}>
          <p className={styles.textName}>{props.text}</p>
          <p className={styles.totalNumber}>${props.totalNum}</p>
        </div>
        <div className={styles.divBot}>
          <div className={styles.wrapPercentage}>
            <div className={styles.percentage}>
              <div className={styles.percentage9}>
                <div style={{ height: `${props.percentage1}%` }}></div>
              </div>
              <div className={styles.percentage9}>
                <div style={{ height: `${props.percentage2}%` }}></div>
              </div>
              <div className={styles.percentage9}>
                <div style={{ height: `${props.percentage3}%` }}></div>
              </div>
              <div className={styles.percentage9}>
                <div style={{ height: `${props.percentage4}%` }}></div>
              </div>
              <div className={styles.percentage9}>
                <div style={{ height: `${props.percentage5}%` }}></div>
              </div>
            </div>
            <div className={styles.title}>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUi4;
