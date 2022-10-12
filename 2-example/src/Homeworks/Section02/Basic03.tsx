import React from "react";
import imageBasic03 from "./basic-images/3.jpg";

type Props = {};

const Basic03 = (props: Props) => {
  return (
    <>
      <div className="card my-3 mx-3 p-3" style={{ width: "28rem" }}>
        <img src={imageBasic03} alt="" />
        <div className="">
          <p className="text-secondary py-2">Technology</p>
          <h4>Harman Kadon Onyx Studio Mini, Review & Experriences</h4>
          <p className="text-secondary pt-4">
            Feb 21, 2021 by <span className="text-dark">drfurion</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Basic03;
