import React from "react";

type Props = {};

function Footer({}: Props) {
  let test = "bg-ccc text-white fs-1";
  return (
    <>
      <div className={`text-center ${test}`}>Footer</div>
    </>
  );
}

export default Footer;
