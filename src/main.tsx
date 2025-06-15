import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// src/main.jsx
import "./index.css"; // must contain @tailwind directives
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
