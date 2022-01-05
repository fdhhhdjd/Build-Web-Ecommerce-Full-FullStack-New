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
  UserRoutes,
  UserRoute,
  UploadProfile,
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
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <ScrollTop />
        <Routes>
          <Route
            path="/password/forgot"
            element={
              <UserRoutes>
                <ForgotPassword />
              </UserRoutes>
            }
          />
          <Route
            path="/password/reset/:token"
            element={
              <UserRoutes>
                <ResetPassword />
              </UserRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <UserRoutes>
                <Login />
              </UserRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <UserRoutes>
                <Register />
              </UserRoutes>
            }
          />
          <Route
            path="/"
            element={
              <UserRoute>
                <Welcome />
              </UserRoute>
            }
          />
          <Route
            path="/home"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <UserRoute>
                <Profiles />
              </UserRoute>
            }
          />
          <Route
            path="/me/update"
            element={
              <UserRoute>
                <UploadProfile />
              </UserRoute>
            }
          />
          <Route
            path="/products/all"
            element={
              <UserRoute>
                <ProductList />
              </UserRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <UserRoute>
                <ProductItem />
              </UserRoute>
            }
          />
          <Route
            path="/products/all/:keyword"
            element={
              <UserRoute>
                <ProductList />
              </UserRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <UserRoute>
                <Cart />
              </UserRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <UserRoute>
                <Admin />
              </UserRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
