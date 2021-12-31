import React from "react";
import { HeroStyle } from "../../Styles/WelcomeStyle/HeroStyle";
import phoneImg from "../../Images/phone.svg";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import { defaultOptions5 } from "../../imports/Lottie";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroStyle />
      <section className="hero">
        <div className="hero-center">
          <article className="hero-info">
            <h1>
              Payments infrastructure <br />
              for the internet
            </h1>
            <p className="hero-text">
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <span className="group">
              <button className="btn" onClick={() => navigate("/login")}>
                Start now
                <span className="right-arrow">
                  <FaChevronRight />
                </span>
              </button>
              <div className="contact">
                Contact sales &nbsp;
                <span className="right-arrow">
                  <FaChevronRight />
                </span>
              </div>
            </span>
          </article>
          <article className="hero-images">
            <img src={phoneImg} alt="phone image" className="phone-img" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Hero;
