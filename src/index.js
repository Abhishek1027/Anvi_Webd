import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorContextProvider } from "./dashboard/ColorContext/darkContext"; // Ensure correct path
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorContextProvider>
      <BrowserRouter>
        {" "}
        {/* ✅ This should be the ONLY <BrowserRouter> in the app */}
        <App />
      </BrowserRouter>
    </ColorContextProvider>
  </React.StrictMode>,
);
