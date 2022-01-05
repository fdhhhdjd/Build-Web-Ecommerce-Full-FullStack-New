import React, { Fragment, useState, useEffect } from "react";
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
import swal from "sweetalert";

const UpdateProfile = () => {
  const dispatch = useDispatch();

  const { auth, isAuthenticated, error, isUpdated, loading } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const navigate = useNavigate();
  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(UploadProfileInitiate(myForm));
  };

  const uploadDataChange = (e) => {
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
    console.log(file);
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

  useEffect(() => {
    if (isAuthenticated) {
      setName(auth.name);
      setEmail(auth.email);
      setAvatarPreview(auth.avatar.url);
    }
  }, [auth]);

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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div id="updateProfileImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={uploadDataChange}
                />
              </div>

              <input
                type="submit"
                value="Update"
                className="updateProfileBtn"
              />
            </form>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default UpdateProfile;
