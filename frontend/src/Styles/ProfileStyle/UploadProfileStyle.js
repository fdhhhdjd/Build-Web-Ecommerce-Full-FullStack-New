import { createGlobalStyle } from "styled-components";
import hero from "../../Images/hero.svg";
export const UploadProfileStyle = createGlobalStyle`
.updateProfileContainer {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    top: 0%;
    left: 0;
  }
  
  .updateProfileBox {
    background-color: white;
    width: 25vw;
    height: 70vh;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .updateProfileHeading {
    text-align: center;
    color: rgba(0, 0, 0, 0.664);
    font: 400 1.3vmax "Roboto";
    padding: 1.3vmax;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    width: 50%;
    margin: auto;
  }
  
  .updateProfileForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2vmax;
    justify-content: space-evenly;
    height: 70%;
    transition: all 0.5s;
  }
  
  .updateProfileForm > div {
    display: flex;
    width: 100%;
    align-items: center;
  }
  
  .updateProfileForm > div > input {
    padding: 1vmax 4vmax;
    padding-right: 1vmax;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    font: 300 0.9vmax cursive;
    outline: none;
  }
  
  .updateProfileForm > div > svg {
    position: absolute;
    transform: translateX(1vmax);
    font-size: 1.6vmax;
    color: rgba(0, 0, 0, 0.623);
  }
  
  #updateProfileImage > img {
    width: 3vmax;
    border-radius: 100%;
    margin: 1vmax;
  }
  #updateProfileImage > input {
    display: flex;
    padding: 0%;
  }
  
  #updateProfileImage > input::file-selector-button {
    cursor: pointer;
    width: 100%;
    z-index: 2;
    height: 5vh;
    border: none;
    margin: 0%;
    font: 400 0.8vmax cursive;
    transition: all 0.5s;
    padding: 0 1vmax;
    color: rgba(0, 0, 0, 0.623);
    background-color: rgb(255, 255, 255);
  }
  
  #updateProfileImage > input::file-selector-button:hover {
    background-color: rgb(235, 235, 235);
  }
  
  .updateProfileBtn {
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
  
  .updateProfileBtn:hover {
    background-color: rgb(179, 66, 46);
  }
  
  @media screen and (max-width: 600px) {
    .updateProfileContainer {
      background-color: white;
    }
    .updateProfileBox {
      width: 100vw;
      height: 95vh;
    }
  
    .updateProfileForm {
      padding: 5vmax;
    }
  
    .updateProfileForm > div > input {
      padding: 2.5vmax 5vmax;
      font: 300 1.7vmax cursive;
    }
  
    .updateProfileForm > div > svg {
      font-size: 2.8vmax;
    }
  
    #updateProfileImage > img {
      width: 8vmax;
      border-radius: 100%;
    }
  
    #updateProfileImage > input::file-selector-button {
      height: 7vh;
      font: 400 1.8vmax cursive;
    }
  
    .updateProfileBtn {
      font: 300 1.9vmax "Roboto";
      padding: 1.8vmax;
    }
  }
`;
