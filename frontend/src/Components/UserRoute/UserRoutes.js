import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirects from "./LoadingToRedirects";
import LoadingToRedirectsAdmin from "./LoadingToRedirectsAdmin";
const UserRoutes = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? children : <LoadingToRedirects />;
};

export default UserRoutes;
