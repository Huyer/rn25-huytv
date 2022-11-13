import React from "react";
import { Route, Routes } from "react-router-dom";
import ListEmloyees from "./ListEmloyees";
import Products from "./Products";

function Content() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route path="/userslist" element={<ListEmloyees />}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  );
}

export default Content;
