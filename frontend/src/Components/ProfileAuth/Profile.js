import React from "react";
import { ProfileStyle } from "../../Styles/ProfileStyle/Profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader, MetaData, Header } from "../../imports/index";
const Profile = () => {
  const { auth, loading, isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <ProfileStyle />
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${auth.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={auth.avatar.url} alt={auth.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{auth.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{auth.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(auth.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
