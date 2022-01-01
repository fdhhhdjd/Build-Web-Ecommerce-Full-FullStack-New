import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Contexts/GlobalState";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
