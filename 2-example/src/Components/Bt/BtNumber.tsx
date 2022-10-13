import React, { useState } from "react";

type Props = {};

const BtNumber = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>bạn đã click {count} lần</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default BtNumber;
