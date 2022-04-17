import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  if (!rootElement) throw new Error("Failed to find the root element");
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
});
