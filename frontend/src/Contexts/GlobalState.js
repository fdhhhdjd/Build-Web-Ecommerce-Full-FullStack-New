import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductApi, AdminApi, InfoAllUserApi } from "../imports/index";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const data = {
    callback: [callback, setCallback],
    ProductApi: ProductApi(callback),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
