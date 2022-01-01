import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ScrollTop = () => {
  const [Scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 80) {
      setScroll(true);
    } else if (scroll < 80) {
      setScroll(false);
    }
  };
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Scroll]);
  return (
    <>
      <ScrollTops>
        <div
          className={`fas fa-angle-up scroll-top ${Scroll ? "active" : ""}`}
          id="scroll-top"
          onClick={handleClickTop}
        ></div>
      </ScrollTops>
    </>
  );
};

export default ScrollTop;
const ScrollTops = styled.div`
  .scroll-top {
    position: fixed;
    top: -120%;
    right: 2rem;
    padding: 0rem 0.6rem;
    font-size: 3.5rem;
    background: teal;
    color: #fff;
    border-radius: 0.5rem;
    transition: 1s linear;
    z-index: 1000;
  }
  .active {
    top: calc(100% - 8rem);
  }
`;
