import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CountriesProvider from "./data/useCountries";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CountriesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CountriesProvider>
);
