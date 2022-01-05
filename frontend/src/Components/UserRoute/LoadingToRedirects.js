import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../imports/index";
const LoadingToRedirect = (children, rest) => {
  const [count, setCount] = useState(2);
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    if (auth.role === "user") {
      return count === 0 && navigate("/home");
    } else if (auth.role === "admin") {
      return count === 0 && navigate("/admin");
    }

    // count === 0 && toast.info("Please Logout when you return to the site 🤔");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <Loading />;
};

export default LoadingToRedirect;
