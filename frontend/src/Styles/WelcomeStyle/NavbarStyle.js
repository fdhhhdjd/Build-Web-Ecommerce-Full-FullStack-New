import { createGlobalStyle } from "styled-components";
export const NavbarStyle = createGlobalStyle`
margin: 0;
ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  
  .nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    position: relative;
    z-index: 1;
   
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .btn-navbar {
    font-size: 1rem;
    padding: 0.25rem 0.95rem;
    border-radius: 0.75rem;
    border-color: transparent;
    color: white;
    background: hsla(0, 0%, 100%, 0.2);
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .btn:hover {
    background: hsl(210, 22%, 49%);
  }
  .nav-links {
    display: none;
  }
  .signin-btn {
    display: none;
  }
  
  .nav-links li {
    height: 100%;
  }
  
  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: block;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      height: 100%;
      display: grid;
      align-items: center;
    }
    .nav-links li {
      height: 100%;
    }
    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: white;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
  }
  
  .right-arrow {
    margin-top: 5px;
    font-size: 10px;
  }
`;
