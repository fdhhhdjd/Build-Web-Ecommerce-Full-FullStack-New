import React, { Fragment, useState, useEffect, useContext } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { MetaData, Loader, Header } from "../../imports/index";
import { UploadProfileStyle } from "../../Styles/ProfileStyle/UploadProfileStyle";
import {
  clearErrors,
  UploadProfileInitiate,
  LoadProfileInitiate,
} from "../../redux/Action/ActionAdmin";
import { useNavigate } from "react-router-dom";

import avatars from "../../Images/avatar.svg";
import { GlobalState } from "../../Contexts/GlobalState";
import { UPDATE_PROFILE_RESET } from "../../redux/ActionTypes";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const { auth } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(avatars);
  const navigate = useNavigate();
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(UploadProfileInitiate(myForm));
  };
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    if (auth) {
      setName(auth.name);
      setEmail(auth.email);
      setAvatarPreview(auth.avatar.url);
    }
    if (error) {
      dispatch(clearErrors());
    }
    if (isUpdated) {
      dispatch(LoadProfileInitiate());
      navigate("/profile");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, auth, isUpdated, navigate]);
  return (
    <>
      <UploadProfileStyle />
      <Fragment>
        <MetaData title="Update Profile" />
        <div className="updateProfileContainer">
          <div className="updateProfileBox">
            <h2 className="updateProfileHeading">Update Profile</h2>
            <form
              className="updateProfileForm"
              encType="multipart/form-data"
              onSubmit={updateProfileSubmit}
            >
              <div className="updateProfileName">
                <FaceIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="updateProfileEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div id="updateProfileImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProfileDataChange}
                />
              </div>

              {loading ? (
                <>
                  <Loader /> <span>Loading....</span>
                </>
              ) : (
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              )}
            </form>
            <span
              className="updateProfileBtn"
              onClick={() => navigate("/profile")}
            >
              Back Profile
            </span>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default UpdateProfile;
