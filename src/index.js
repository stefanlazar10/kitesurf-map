import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Setup/Functions/Dashboard.css";
import App from "./App";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
