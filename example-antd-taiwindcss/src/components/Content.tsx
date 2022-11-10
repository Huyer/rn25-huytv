import React from "react";
import { Route, Routes } from "react-router-dom";
import ListUsers from "./ListUsers";

type Props = {};

function Content() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route path="/userslist" element={<ListUsers />}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  );
}

export default Content;
