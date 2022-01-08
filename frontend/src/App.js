import React, { Suspense, useEffect, useState } from "react";
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
  Order,
  Payment,
} from "./imports/index";
import {
  Home,
  Login,
  ProductList,
  ProductItem,
  Cart,
  Profiles,
  ShippingInfo,
} from "./imports/LazyRouter";
import Admin from "./Components/AdminMain/Admin";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function App() {
  const { isAuthenticated, auth } = useSelector((state) => state.auth);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    getStripeApiKey();
  }, []);
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
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/orderConfirm" element={<Order />} />
          {stripeApiKey && (
            <Route
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
