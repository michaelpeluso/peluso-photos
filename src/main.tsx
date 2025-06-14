import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </StrictMode>
);
