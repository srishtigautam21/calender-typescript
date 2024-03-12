import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { CalenderProvider } from "./context/calenderContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CalenderProvider>
      <App />
    </CalenderProvider>
  </React.StrictMode>
);
