import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "../redux/AuthReducer/actions";
import { Loading } from "./Loading";

export const PrivateRoute = ({ children }) => {
  const [isAuthCompleted, setIsAuthCompleted] = useState(false);
  const location = useLocation();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      dispatch(getUser()).then(() => {
        setIsAuthCompleted(true);
      });
    } else setIsAuthCompleted(true);
  }, [isAuth]);
  return isAuthCompleted ? (
    !isAuth ? (
      <Navigate to="/login" state={{ pathname: location.pathname }} />
    ) : (
      children
    )
  ) : (
    <Loading />
  );
};
