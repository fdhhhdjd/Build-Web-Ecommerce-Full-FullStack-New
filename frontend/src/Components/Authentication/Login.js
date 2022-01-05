import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { wave, bg, logo } from "../../imports/Image";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { defaultOptions } from "../../imports/Lottie";
import { MetaData, Loader } from "../../imports/index";
import { clearErrors, loginInitiate } from "../../redux/Action/ActionAdmin";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [togglePass, setTogglePass] = useState(false);
  const navigate = useNavigate();
  const handTogglePass = () => {
    setTogglePass(!togglePass);
  };
  const handleSubmitForm = async (data) => {
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, error, isAuthenticated]);
  return (
    <>
      <AuthStyle />
      <MetaData title="Login-Web" />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <Lottie options={defaultOptions} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <img src={logo} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  })}
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <p className="input-div-tow">
              {errors.email?.type === "required" &&
                "Mời bạn nhập Email đầy đủ! "}
              {errors?.email?.type === "pattern" &&
                "Email của ban không hợp lệ!"}
            </p>
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
                  {...register("password", { required: true })}
                  type={togglePass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <p className="input-div-tow">
              {errors.password?.type === "required" &&
                "Mời bạn nhập đầy đủ mật khẩu. "}
            </p>
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
            {loading ? (
              <Loader />
            ) : (
              <input type="submit" className="btn" value="Login" />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
