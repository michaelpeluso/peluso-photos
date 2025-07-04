import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/ui/NavBar";
import Home from "./components/pages/Home";
import ComingSoon from "./components/pages/ComingSoon";

import "./styles/index.css";
import "./styles/theme.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </StrictMode>
);
