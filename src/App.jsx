import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Team from "./sections/Team";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>

      {/* ✅ LANDING PAGE */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Benefits />
            <Team />
            <Footer />
          </>
        }
      />

      {/* ✅ AUTH PAGE */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ✅ DASHBOARD */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;