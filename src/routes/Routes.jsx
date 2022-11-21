import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbarComponents/Navbar";
import { PrivateRoute } from "../components/PrivateRoute";
import { Dashboard } from "./Dashboard";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { Login } from "./LoginPage";
import { Register } from "./RegisterPage";
import { UserProfile } from "./UserProfile";

export const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomePage />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Navbar />
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Navbar />
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <>
            <ErrorPage />
          </>
        }
      />
    </Routes>
  );
};
