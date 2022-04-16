import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  if (!rootElement) throw new Error("Failed to find the root element");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <h1>Hello, React.</h1>
    </Router>
  );
});
