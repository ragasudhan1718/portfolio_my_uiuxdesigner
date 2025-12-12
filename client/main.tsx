// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <HashRouter>
      <Index />
    </HashRouter>
  </React.StrictMode>
);
