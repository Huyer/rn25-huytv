import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

type Props = {};

const LikeBtn = (props: Props) => {
  const [countLike, setCountLike] = useState(0);
  return (
    <div
      style={{ border: "1px solid #ccc", width: "70px", height: "30px" }}
      onClick={() => {
        setCountLike(countLike + 1);
      }}
    >
      <p style={{ display: "inline-block" }}>
        <AiOutlineLike />
      </p>
      <p
        style={{
          display: "inline-block",
          lineHeight: "30px",
          marginInlineStart: "10px",
        }}
      >
        {countLike}
      </p>
    </div>
  );
};

export default LikeBtn;
