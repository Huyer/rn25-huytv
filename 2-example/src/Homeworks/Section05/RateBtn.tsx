import React, { useState, useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";

type Props = {};

const RateBtn = (props: Props) => {
  const [index, setIndex] = useState(0);
  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((_, i) => {
        return (
          <AiTwotoneStar
            key={i}
            size={24}
            style={{ marginRight: 10, cursor: "pointer" }}
            color={index <= i ? "gray" : "orange"}
            onClick={() => setIndex(i + 1)}
          />
        );
      })}
    </div>
  );
};

export default RateBtn;
