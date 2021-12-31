import { createGlobalStyle } from "styled-components";
import { purple } from "../../imports/Image";
export const NotFoundStyle = createGlobalStyle`
body {
        background: url(${purple});
        background-repeat: repeat-x;
        background-size: cover;
        background-position: left top;
        height: 100%;
        overflow: hidden;
  .svg{
    position: absolute;
    top: 50%;
    left: 35%;
    margin-top: -225px;
    margin-left: -400px;
    width:500px; 
    height:380px;
  }
  .message-box {
    height: 200px;
    width: 380px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: 50px;
    color: #FFF;
    font-family: Roboto;
    font-weight: 300;
  }
  .message-box h1 {
    font-size: 100px;
    line-height: 46px;
    margin-bottom: 40px;
  }
  .message-box p {
    font-size: 30px;
  }
  .buttons-con .action-link-wrap {
    margin-top: 40px;
  }
  .buttons-con .action-link-wrap span {
    background: #68c950;
    padding: 8px 25px;
    border-radius: 4px;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px
  }
  .buttons-con .action-link-wrap span:hover {
    background: #5A5C6C;
    color: #fff;
  }
  .link{
   
    color: #FFF;
  
    text-decoration: none;

  }

  
  @keyframes float {
      100% {
      transform: translateY(20px);
    }
  }
  @media (max-width: 1024px) {
    background: url(${purple});

  }
  @media (max-width: 768px) {
    background: url(${purple});
  }
  @media (max-width: 450px) {
    background: url(${purple});
    .svg{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -350px;
      margin-left: -190px;
      width:300px; 
      height:200px;
    }
    .message-box {
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -190px;
      text-align: center;
    }
  }
`;
