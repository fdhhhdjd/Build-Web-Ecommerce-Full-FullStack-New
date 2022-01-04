import React, { useEffect, useState } from "react";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { wave, bg, logo } from "../../imports/Image";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { defaultOptions2 } from "../../imports/Lottie";
import MetaData from "../Layout/MetaData";
const ForgotPassword = () => {
  return (
    <>
      <AuthStyle />
      <MetaData title="Forgot-Web" />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <Lottie options={defaultOptions2} />
        </div>
        <div className="login-content">
          <form action="">
            <img src={logo} />
            <h2 className="title">Forget</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input type="text" className="input" placeholder="Email" />
              </div>
            </div>

            <span className="register">
              <Link className="Link" to="/login">
                Back Login
              </Link>
            </span>
            <input type="submit" className="btn" value="Forget" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
