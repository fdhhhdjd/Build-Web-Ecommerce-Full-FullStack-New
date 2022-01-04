import styled from "styled-components";
import { Home } from "../../imports/Image";
export const LoaderStyle = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border: 2px solid black;
    position: absolute;
    left: 0;
    top: 0;
    animation: rotationBreak 3s ease-in-out infinite alternate;
  }
  .loader::after {
    border-color: #ff3d00;
    animation-direction: alternate-reverse;
  }

  @keyframes rotationBreak {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
