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
export const ProductList = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/ProductList/ProductList")),
      1500
    );
  });
});
export const ProductItem = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/ProductItem/ProductItem")),
      1000
    );
  });
});
export const Cart = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Components/Cart/Cart")), 1000);
  });
});
export const Profiles = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/ProfileAuth/Profiles")),
      1000
    );
  });
});
