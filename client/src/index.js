import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
