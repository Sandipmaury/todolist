import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { Register } from "./Register";
import { UserProfile } from "./UserProfile";

export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
};
