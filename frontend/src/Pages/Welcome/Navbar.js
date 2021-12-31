import React from "react";
import { NavbarStyle } from "../../Styles/WelcomeStyle/NavbarStyle";
import { logo } from "../../imports/Image";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarStyle />
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} alt="logo" className="nav-logo" /> */}
            <button className="btn-navbar toggle-btn">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn">
                <a
                  href="https://www.facebook.com/profile.php?id=100006139249437"
                  target="_blank"
                >
                  Facebook
                </a>
              </button>
            </li>
            <li>
              <button className="link-btn">
                <a href="https://profile-forme.surge.sh/" target="_blank">
                  Profile
                </a>
              </button>
            </li>
          </ul>
          <button
            className="btn-navbar signin-btn "
            onClick={() => navigate("/login")}
          >
            Sign in
            <span>
              <FaChevronRight className="right-arrow" />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
