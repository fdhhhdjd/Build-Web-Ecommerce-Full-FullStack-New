import React from "react";
import loading from "../../Images/loading1.gif";
import { LoadingStyle } from "../../Styles/LoadingStyle/LoadingStyle";
const Loading = () => {
  return (
    <LoadingStyle>
      <div className=" loader-container">
        <img src={loading} alt="" />
      </div>
    </LoadingStyle>
  );
};

export default Loading;
