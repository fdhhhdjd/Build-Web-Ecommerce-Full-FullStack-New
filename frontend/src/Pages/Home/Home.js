import React, { useEffect } from "react";
import {
  Header,
  Slide,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../../imports/index";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Slide />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
