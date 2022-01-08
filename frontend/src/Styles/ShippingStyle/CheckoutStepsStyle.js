import { createGlobalStyle } from "styled-components";
export const CheckoutStepsStyle = createGlobalStyle`
.MuiStepConnector-line {
    display: none !important;
  }
  
  .MuiStepConnector-root {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.349);
  }
  
  .MuiStepConnector-active,
  .MuiStepConnector-completed {
    background-color: tomato;
  }
`;
