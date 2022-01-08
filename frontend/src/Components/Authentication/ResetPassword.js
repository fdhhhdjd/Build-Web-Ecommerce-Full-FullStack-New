import React, { useEffect, useState } from "react";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { wave, bg, logo } from "../../imports/Image";
import Lottie from "react-lottie";
import { Link, useParams } from "react-router-dom";
import { defaultOptions3 } from "../../imports/Lottie";
import MetaData from "../Layout/MetaData";
import { resetPassword } from "../../redux/Action/ActionAdmin";
import { useDispatch } from "react-redux";
const ResetPassword = ({ match }) => {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleCfPass, setToggleCfPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  let { token } = useParams();
  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm));
    console.log(password);
  };
  const handTogglePass = () => {
    setTogglePass(!togglePass);
  };

  const handToggleCfPass = () => {
    setToggleCfPass(!toggleCfPass);
  };
  return (
    <>
      <AuthStyle />
      <MetaData title="Reset Password-Web" />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img1 ">
          <Lottie options={defaultOptions3} />
        </div>
        <div className="login-content">
          <form onSubmit={resetPasswordSubmit}>
            <img src={logo} />
            <h2 className="title">RESET</h2>
            <div className="input-div one">
              <div className="i">
                {togglePass ? (
                  <i class="fas fa-unlock" onClick={handTogglePass}></i>
                ) : (
                  <i className="fas fa-lock" onClick={handTogglePass} />
                )}
              </div>
              <div className="div ">
                <input
                  type={togglePass ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                {toggleCfPass ? (
                  <i class="fas fa-unlock" onClick={handToggleCfPass}></i>
                ) : (
                  <i className="fas fa-lock" onClick={handToggleCfPass} />
                )}
              </div>
              <div className="div ">
                <input
                  type={toggleCfPass ? "text" : "password"}
                  className="input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <input type="submit" className="btn" value="Reset" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
