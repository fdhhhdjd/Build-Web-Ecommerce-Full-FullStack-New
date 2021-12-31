import React, { useState } from "react";
import { wave, bg, avatar } from "../../imports/Image";
import { Link } from "react-router-dom";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { defaultOptions1 } from "../../imports/Lottie";
import Lottie from "react-lottie";
const Register = () => {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleCfPass, setToggleCfPass] = useState(false);
  const handTogglePass = () => {
    setTogglePass(!togglePass);
  };

  const handToggleCfPass = () => {
    setToggleCfPass(!toggleCfPass);
  };
  return (
    <>
      <AuthStyle />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <Lottie options={defaultOptions1} />
        </div>
        <div className="login-content">
          <form action="">
            <img src={avatar} />
            <label class="custom-file-upload">
              <input type="file" />
              <i class="far fa-file-image"></i>
            </label>
            <h2 className="title">Register</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input type="text" className="input" placeholder="UserName" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i class="fas fa-envelope"></i>
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
            <div className="input-div pass">
              <div className="i">
                {toggleCfPass ? (
                  <i class="fas fa-unlock" onClick={handToggleCfPass}></i>
                ) : (
                  <i className="fas fa-lock" onClick={handToggleCfPass} />
                )}
              </div>
              <div className="div">
                <input
                  type={toggleCfPass ? "text" : "password"}
                  className="input "
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <span>
              <Link className="Link" to="/login">
                Back Login
              </Link>
            </span>
            <input type="submit" className="btn" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
