import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

const root = document.getElementById("projetos-explorer-root");
if (root) createRoot(root).render(<App />);