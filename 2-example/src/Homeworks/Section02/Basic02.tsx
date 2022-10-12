import React from "react";
import imageBasic02 from "./basic-images/2.jpg";
import { FaStar } from "react-icons/fa";

type Props = {};

const Basic02 = (props: Props) => {
  return (
    <>
      <div className="card ms-3" style={{ width: "18rem" }}>
        <img src={imageBasic02} alt="" className="card-img-top" />
        <div className="card-body">
          <p className="card-text border-bottom">
            <h6>YOUNG SHOP</h6>
          </p>
          <p className="text-primary mb-0">Samsung UHD TV 24inch</p>
          {[...Array(5)].map((stars, index) => {
            return (
              <label>
                <input type="radio" name="rating" style={{ display: "none" }} />
                <FaStar style={{ color: "#ffc13b", marginRight: "5px" }} />
              </label>
            );
          })}
          <span className="text-secondary ps-2">02</span>
          <p className="fw-bolder" style={{ paddingTop: "12px" }}>
            $599
          </p>
        </div>
      </div>
    </>
  );
};

export default Basic02;
