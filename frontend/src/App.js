import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  NotFound,
  Loading,
  ForgotPassword,
  ResetPassword,
  Register,
  Header,
  Welcome,
  ScrollTop,
} from "./imports/index";
import {
  Home,
  Login,
  ProductList,
  ProductItem,
  Cart,
} from "./imports/LazyRouter";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <ScrollTop />
        <Routes>
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/all" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/products/all/:keyword" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
