import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg text-black p-2 md:p-8 lg:p-12">
      <App />
    </div>
  </StrictMode>
);
