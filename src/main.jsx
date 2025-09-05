import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";  // We'll switch this to Tailwind later

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
