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
  Welcome,
  ScrollTop,
  UploadProfile,
  UpdatePassword,
} from "./imports/index";
import {
  Home,
  Login,
  ProductList,
  ProductItem,
  Cart,
  Profiles,
} from "./imports/LazyRouter";
import Admin from "./Components/AdminMain/Admin";
import { useSelector } from "react-redux";
function App() {
  const { isAuthenticated, auth } = useSelector((state) => state.auth);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <ScrollTop />
        <Routes>
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/me/update" element={<UploadProfile />} />
          <Route path="/changePassword" element={<UpdatePassword />} />
          <Route path="/products/all" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/products/all/:keyword" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
