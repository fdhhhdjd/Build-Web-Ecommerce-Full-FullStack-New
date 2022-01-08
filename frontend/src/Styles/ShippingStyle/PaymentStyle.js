import { createGlobalStyle } from "styled-components";
export const PaymentStyle = createGlobalStyle`
.paymentContainer {
    display: grid;
    place-items: center;
    background-color: rgb(255, 255, 255);
    height: 65vh;
    margin: 2vmax;
  }
  
  .paymentForm {
    width: 22%;
    height: 100%;
  }
  
  .paymentForm > p {
    font: 400 2vmax "Roboto";
    color: rgba(0, 0, 0, 0.753);
    border-bottom: 1px solid rgba(0, 0, 0, 0.13);
    padding: 1vmax 0;
    text-align: center;
    width: 50%;
    margin: auto;
  }
  
  .paymentForm > div {
    display: flex;
    align-items: center;
    margin: 2vmax 0;
  }
  
  .paymentInput {
    padding: 1vmax 4vmax;
    padding-right: 1vmax;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    outline: none;
  }
  
  .paymentForm > div > svg {
    position: absolute;
    transform: translateX(1vmax);
    font-size: 1.6vmax;
    color: rgba(0, 0, 0, 0.623);
  }
  
  .paymentFormBtn {
    border: none;
    background-color: tomato;
    color: white;
    font: 300 0.9vmax "Roboto";
    width: 100%;
    padding: 0.8vmax;
    cursor: pointer;
    transition: all 0.5s;
    outline: none;
  }
  
  .paymentFormBtn:hover {
    background-color: rgb(179, 66, 46);
  }
  
  @media screen and (max-width: 600px) {
    .paymentForm {
      width: 90%;
    }
  
    .paymentForm > p {
      font: 400 8vw "Roboto";
      padding: 4vw 0;
      width: 60%;
    }
  
    .paymentForm > div {
      margin: 10vw 0;
    }
  
    .paymentInput {
      padding: 4vw 10vw;
    }
  
    .paymentForm > div > svg {
      font-size: 6vw;
    }
  
    .paymentFormBtn {
      font: 300 4vw "Roboto";
      padding: 4vw;
    }
  }
`;
