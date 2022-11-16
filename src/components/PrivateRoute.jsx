import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" state={{ pathname: location.pathname }} />;
  }
  return children;
};
