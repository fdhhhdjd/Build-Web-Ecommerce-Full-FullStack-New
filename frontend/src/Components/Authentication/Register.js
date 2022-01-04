import React, { useEffect, useRef, useState } from "react";
import { wave, bg, avatars } from "../../imports/Image";
import { MetaData, Loader } from "../../imports/index";
import { Link, useNavigate } from "react-router-dom";
import { AuthStyle } from "../../Styles/AuthenticationStyle/AuthStyle";
import { defaultOptions1 } from "../../imports/Lottie";
import { useForm, Controller } from "react-hook-form";
import Lottie from "react-lottie";
import { RegisterInitiate } from "../../redux/Action/ActionAdmin";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,

    getValues,
  } = useForm();
  const [togglePass, setTogglePass] = useState(false);
  const [toggleCfPass, setToggleCfPass] = useState(false);
  //
  const { isAuthRegister, loading } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(avatars);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handTogglePass = () => {
    setTogglePass(!togglePass);
  };

  const handToggleCfPass = () => {
    setToggleCfPass(!toggleCfPass);
  };
  const registerDataChange = (e) => {
    const file = e.target.files[0];
    if (!file)
      return swal("File not Exists", {
        icon: "error",
      });
    if (file.size > 1024 * 1024)
      return swal("Size too large!", {
        icon: "error",
      });
    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return swal("File format is incorrect.", {
        icon: "error",
      });
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmitForm = (data, e) => {
    const { username, email, password } = data;
    const myForm = new FormData();
    if (!avatar)
      return swal("Please enter a valid avatar", {
        icon: "error",
      });
    console.log(data);
    myForm.set("name", username);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(RegisterInitiate(myForm));
  };
  useEffect(() => {
    if (isAuthRegister) {
      navigate("/login");
    }
  }, [isAuthRegister, dispatch]);
  return (
    <>
      <AuthStyle />
      <MetaData title="Register-Web" />
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <Lottie options={defaultOptions1} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <img src={avatarPreview} />
            <label class="custom-file-upload">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
              <i class="far fa-file-image"></i>
            </label>
            <h2 className="title">Register</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div ">
                <input
                  type="text"
                  className="input"
                  {...register("username", { required: true, maxLength: 20 })}
                  type="text"
                  placeholder="User Name"
                  name="username"
                  id="username"
                />
              </div>
            </div>
            <p className="input-div-tow">
              {errors.username?.type === "required" &&
                "Mời bạn nhập đầy đủ tên vào!"}
              {errors?.username?.type === "maxLength" &&
                "Tên của bạn không được quá 20 kí tự"}
            </p>
            <div className="input-div one">
              <div className="i">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="div ">
                <input
                  type="text"
                  className="input"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  })}
                  type="email"
                  placeholder="Email Address"
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
                  {...register("password", {
                    required: true,

                    minLength: {
                      value: 6,
                    },
                    pattern:
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
                  })}
                  type={togglePass ? "text" : "password"}
                  className="input "
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <p className="input-div-tow">
              {errors.password?.type === "required" &&
                "Mời bạn nhập đầy đủ mật khẩu. "}
              {errors?.password?.type === "minLength" &&
                "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
              {errors?.password?.type === "pattern" &&
                "Mật khẩu có kí tự in hoa,số và kí tự đặt biệt !"}
            </p>
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
                  {...register("passwordConfirm", {
                    required: true,
                    validate: (value) =>
                      value === getValues("password") ||
                      "The passwords do not match",
                  })}
                  type={toggleCfPass ? "text" : "password"}
                  className="input "
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                />
              </div>
            </div>
            <p className="input-div-tow">
              {errors.passwordConfirm?.type === "required" &&
                "Mời bạn nhập lại mật khẩu."}
              {errors.passwordConfirm?.type === "validate" &&
                "Mật khẩu nhập lại không khớp!   "}
            </p>
            <span>
              <Link className="Link" to="/login">
                Back Login
              </Link>
            </span>

            {loading ? (
              <Loader />
            ) : (
              <input type="submit" className="btn" value="Register" />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
