import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductInitiate } from "../redux/Action/ActionProduct";
import { useParams } from "react-router-dom";

const ProductApi = (callback) => {
  const [callbacks, setCallbacks] = useState(false);
  const searchValue = useRef();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  useEffect(() => {
    dispatch(GetAllProductInitiate());
  }, [callback]);

  return {
    callback: [callbacks, setCallbacks],
  };
};

export default ProductApi;
