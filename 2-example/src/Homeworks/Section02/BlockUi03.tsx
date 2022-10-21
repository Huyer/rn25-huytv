import React from "react";
import styles from "./Social.module.css";

type Props = {
  text: string;
  color: string;
  iconName: JSX.Element;
  total: number;
  unit: string;
};

const Social = (props: Props) => {
  return (
    <div>
      <div>
        {props.text}, {props.color}, {props.iconName}, {props.total},{" "}
        {props.unit}
      </div>

      <div
        className={styles.divContainer}
        style={{ backgroundColor: props.color }}
      >
        <div className={styles.divIcon}>{props.iconName}</div>
        <div className={styles.divContent}>
          <p className={styles.nameSocial}>{props.text}</p>
          <p className={styles.deCription}>
            {props.total} {props.unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
