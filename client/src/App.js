import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
// import { useState, useEffect, createContext } from "react";

export function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
