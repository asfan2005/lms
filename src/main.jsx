import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AiBaholash,
  IjodiyHamkorlik,
  KelajakTalim,
  News,
  YutuqlarMonitoring,
} from "./components/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/yutuqlarMonitoring" element={<YutuqlarMonitoring />} />
        <Route path="/ijodiyHamkorlik" element={<IjodiyHamkorlik />} />
        <Route path="/kelajakTalim" element={<KelajakTalim />} />
        <Route path="/aiBaholash" element={<AiBaholash />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
