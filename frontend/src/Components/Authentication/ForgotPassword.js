import React, { useEffect, useState } from "react";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { wave, bg, logo } from "../../imports/Image";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { defaultOptions2 } from "../../imports/Lottie";
import { MetaData, Loader } from "../../imports/index";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, ForgotPasswords } from "../../redux/Action/ActionAdmin";
const ForgotPassword = () => {
  const { error, message, loading } = useSelector((state) => state.forgot);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(ForgotPasswords(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, message]);
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
          <form onSubmit={forgotPasswordSubmit}>
            <img src={logo} />
            <h2 className="title">Forget</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <span className="register">
              <Link className="Link" to="/login">
                Back Login
              </Link>
            </span>
            {loading ? (
              <Loader />
            ) : (
              <input type="submit" className="btn" value="Forget" />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
