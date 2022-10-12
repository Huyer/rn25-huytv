import React from "react";
import imageBasic01 from "./basic-images/1.jpg";

type Props = {};

function Basic01({}: Props) {
  const divStyle = {
    width: "600px",
  };
  return (
    <>
      <div className="border m-3" style={divStyle}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={imageBasic01} alt="" />
          </div>
          <div className="col-md-6 pt-4">
            <p className="fs-3">Clothing & Apparel</p>
            <p className="text-secondary">Accessories</p>
            <p className="text-secondary">Bags</p>
            <p className="text-secondary">Kid's Fashion</p>
            <p className="text-secondary">Men</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic01;
