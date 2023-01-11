import React from "react";
import Link from "next/link";
type Props = {
  imgUlr: String;
  name: string;
  price: number;
};

const Products = (props: Props) => {
  return (
    <div className="h-96 w-72 mx-4 my-4 row rounded-lg border-2">
      <div className="h-4/6">
        <img src={props.imgUlr} alt="adascas" className="pt-2 px-2 h-full" />
      </div>
      <div className="text-center">
        <h2 className="font-bold pt-2">{props.name}</h2>
        <h2 className="font-bold pt-2">${props.price}</h2>
      </div>
      <div className="text-center pt-3">
        <button className="border-2 h-[32px] w-[64px] border-sky-600 active:bg-sky-600 rounded-lg">Buy</button>
      </div>
    </div>
  );
};

export default Products;
