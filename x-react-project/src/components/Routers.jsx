import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default Routers;
