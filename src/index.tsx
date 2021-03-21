import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { AppContext } from "./context";

ReactDOM.render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
