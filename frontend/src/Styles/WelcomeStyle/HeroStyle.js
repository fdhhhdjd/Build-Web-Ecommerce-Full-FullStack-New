import { createGlobalStyle } from "styled-components";
import Hero from "../../Images/hero.svg";
export const HeroStyle = createGlobalStyle`
margin: 0;
h1 {
    font-size: 3rem;
  }
  
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.95rem;
    border-radius: 0.75rem;
    border-color: transparent;
    color: white;
    background: #222;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  
  .hero::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65%;
    top: 0;
    left: 0;
    background: url(${Hero});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .hero {
    position: relative;
    min-height: 105vh;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .hero-center {
    width: 90vw;
    max-width: 1170px;
    display: grid;
    align-items: center;
  }
  
  .hero-info h1 {
    text-transform: none;
    max-width: 500px;
    margin-bottom: 2rem;
  }
  .hero-info p {
    max-width: 35em;
    line-height: 1.8;
  }
  .hero-images {
    display: none;
  }
  
  .right-arrow {
    margin-top: 5px;
    font-size: 10px;
  }
  
  .hero-text {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
  
  .group {
    display: flex;
    align-items: center;
  }
  
  .contact {
    margin-left: 15px;
    font-size: 17px;
    font-weight: 500;
  }
  
  @media screen and (min-width: 800px) {
    .hero::before {
      background-size: contain;
      height: 100%;
    }
    .hero-center {
      grid-template-columns: 2fr 1fr;
    }
  
    .hero-info h1 {
      font-size: 3rem;
    }
    .hero-info p {
      font-size: 1.25rem;
    }
    .hero-images {
      display: block;
      justify-self: center;
    }
    .phone-img {
      width: 12rem;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .hero-center {
      grid-template-columns: 2fr 1fr;
      align-items: end;
      padding-bottom: 12vh;
    }
    .hero-info h1 {
      max-width: 100%;
      font-size: 5.5rem;
    }
    .hero-images {
      align-self: end;
    }
    .phone-img {
      width: 15rem;
    }
  }
  @media screen and (min-width: 1400px) {
    .hero-center {
      padding-bottom: 20vh;
    }
    .phone-img {
      width: 17rem;
    }
  }
  
`;
