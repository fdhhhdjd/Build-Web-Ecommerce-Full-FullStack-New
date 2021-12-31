import React, { useEffect, useState } from "react";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { wave, bg, logo } from "../../imports/Image";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { defaultOptions } from "../../imports/Lottie";
const Login = () => {
  const [togglePass, setTogglePass] = useState(false);
  const handTogglePass = () => {
    setTogglePass(!togglePass);
  };
  return (
    <>
      <AuthStyle />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <Lottie options={defaultOptions} />
        </div>
        <div className="login-content">
          <form action="">
            <img src={logo} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input type="text" className="input" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                {togglePass ? (
                  <i class="fas fa-unlock" onClick={handTogglePass}></i>
                ) : (
                  <i className="fas fa-lock" onClick={handTogglePass} />
                )}
              </div>
              <div className="div">
                <input
                  type={togglePass ? "text" : "password"}
                  className="input "
                  placeholder="Password"
                />
              </div>
            </div>
            <span>
              <Link className="Link" to="/password/forgot">
                Forgot Password?
              </Link>
            </span>
            <span className="register">
              <Link className="Link" to="/register">
                Register
              </Link>
            </span>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
