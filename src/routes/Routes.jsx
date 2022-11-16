import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbarComponents/Navbar";
import { PrivateRoute } from "../components/PrivateRoute";
import { Dashboard } from "./Dashboard";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { Register } from "./Register";
import { Todos } from "./Todos";
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
        path="/user"
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
        path="/todos"
        element={
          <PrivateRoute>
            <Navbar />
            <Todos />
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
