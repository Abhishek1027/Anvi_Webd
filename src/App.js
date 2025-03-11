import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useDocTitle } from "./components/CustomHook";
import "./index.css";

// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import Login from "./components/Login";
import DashboardAuth from "./dashboard/DashboardAuth"; // ✅ Corrected import path

// Dashboard Import

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: "ease-out-cubic" });
  }, []);

  useDocTitle("Anvi | Dashboard");

  return (
    <ScrollToTop>
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-demo" element={<DemoProduct />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Route */}
        <Route path="/dashboard/*" element={<DashboardAuth />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ScrollToTop>
  );
}
export default App;
