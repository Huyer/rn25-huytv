import React from "react";
import { text } from "stream/consumers";
import "./style.css";

type Props = {
  propterty: {
    text: string;
    color1: string;
    color2: string;
    percentage: number;
  };
};

const BlockUi01 = (props: Props) => {
  return (
    <>
      <div className="divContainer">
        <div
          className="divLeft"
          style={{ backgroundColor: props.propterty.color1 }}
        >
          <p className="textLeft">{props.propterty.text}</p>
        </div>
        <div className="divRight">
          <div
            className="divShow"
            style={{
              backgroundColor: props.propterty.color2,
              width: `${props.propterty.percentage}%`,
            }}
          >
            <p className="textPercentage">{props.propterty.percentage}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUi01;
