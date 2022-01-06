import { createGlobalStyle } from "styled-components";
import hero from "../../Images/hero.svg";
export const ChangePasswordStyle = createGlobalStyle`
.updatePasswordContainer {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0%;
    left: 0;
  }
  
  .updatePasswordBox {
    background-color: white;
    width: 25vw;
    height: 70vh;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .updatePasswordHeading {
    text-align: center;
    color: rgba(0, 0, 0, 0.664);
    font: 400 1.3vmax "Roboto";
    padding: 1.3vmax;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    width: 50%;
    margin: auto;
  }
  
  .updatePasswordForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2vmax;
    justify-content: space-evenly;
    height: 70%;
    transition: all 0.5s;
  }
  
  .updatePasswordForm > div {
    display: flex;
    width: 100%;
    align-items: center;
  }
  
  .updatePasswordForm > div > input {
    padding: 1vmax 4vmax;
    padding-right: 1vmax;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    font: 300 0.9vmax cursive;
    outline: none;
  }
  
  .updatePasswordForm > div > svg {
    position: absolute;
    transform: translateX(1vmax);
    font-size: 1.6vmax;
    color: rgba(0, 0, 0, 0.623);
  }
  
  .updatePasswordBtn {
    border: none;
    background-color: tomato;
    color: white;
    font: 300 0.9vmax "Roboto";
    width: 100%;
    padding: 0.8vmax;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.219);
  }
  
  .updatePasswordBtn:hover {
    background-color: rgb(179, 66, 46);
  }
  
  @media screen and (max-width: 600px) {
    .updatePasswordContainer {
      background-color: white;
    }
    .updatePasswordBox {
      width: 100vw;
      height: 95vh;
    }
  
    .updatePasswordForm {
      padding: 5vmax;
    }
  
    .updatePasswordForm > div > input {
      padding: 2.5vmax 5vmax;
      font: 300 1.7vmax cursive;
    }
  
    .updatePasswordForm > div > svg {
      font-size: 2.8vmax;
    }
  
    .updatePasswordBtn {
      font: 300 1.9vmax "Roboto";
      padding: 1.8vmax;
    }
  }
`;
