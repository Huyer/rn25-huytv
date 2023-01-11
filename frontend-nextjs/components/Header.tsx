import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full flex	h-16 leading-[64px]">
      <div className="w-1/3 text-center font-bold">LA COLLECTION</div>
      <div className="w-1/3 text-center">
        <ul className="flex space-x-4">
          <li className="hover:text-blue-500 ">Home</li>
          <li className="hover:text-blue-500 ">Products</li>
          <li className="hover:text-blue-500">About</li>
        </ul>
      </div>
      <div className="w-1/3 text-center">button</div>
    </div>
  );
};

export default Header;
