import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import FlexWorkContextProvider from "./context/ContextStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FlexWorkContextProvider>
    <Router>
      <App />
    </Router>
  </FlexWorkContextProvider>
);
