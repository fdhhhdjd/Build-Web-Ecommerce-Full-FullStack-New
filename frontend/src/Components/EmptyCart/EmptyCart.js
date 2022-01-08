import React from "react";
import { useNavigate } from "react-router-dom";
import { EmptyCartStyle } from "../../Styles/EmptyCartStyle/EmptyCartStyle";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <>
      <EmptyCartStyle />
      <div className="emptyCart">
        <img
          src="https://merchlist.co/assets/emptycart.png"
          alt=""
          onClick={() => navigate("/products/all")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
};

export default EmptyCart;
