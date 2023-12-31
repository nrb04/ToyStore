/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
