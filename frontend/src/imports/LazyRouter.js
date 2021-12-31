import React, { lazy } from "react";
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Home/Home")), 1500);
  });
});
export const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/Authentication/Login")),
      1500
    );
  });
});
