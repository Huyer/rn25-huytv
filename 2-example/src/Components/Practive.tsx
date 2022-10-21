import React, { useEffect, useState } from "react";

type Props = {};

const Practive = (props: Props) => {
  const [count, setCount] = useState(-1);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickLike = () => {
    if (isLike === false) {
      setLike(like + 1);
      setIsLike(true);
    } else {
      setLike(like - 1);
      setIsLike(false);
    }
  };
  useEffect(() => {
    console.log("cpn willDidMount");
    return () => console.log("cpn willUnMount");
  }, []);
  useEffect(() => {
    console.log("cpn willUpdate");
  });
  useEffect(() => {
    console.log("cpn willDidMount count");
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick} disabled={count < 10 ? false : true}>
        Cộng
      </button>

      <div>{like}</div>
      <button onClick={handleClickLike}>
        {isLike === true ? "UnLike" : "Like"}
      </button>
    </>
  );
};

export default Practive;
