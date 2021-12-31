import React from "react";
import { NotFoundStyle } from "../../Styles/NotFoundStyle/NotFound";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { defaultOptions4 } from "../../imports/Lottie";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <NotFoundStyle />
      <div className="bg-purple">
        <div className="svg">
          <Lottie options={defaultOptions4} className="svg" />
        </div>
        <div className="message-box">
          <h1>404</h1>
          <p>Page not found</p>
          <div className="buttons-con">
            <div className="action-link-wrap">
              <span
                className="link-button link-back-button"
                onClick={() => navigate(-1)}
              >
                Go Back
              </span>
              <span className="link-button">
                <Link to="/home" className="link">
                  Go to Home Page
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
