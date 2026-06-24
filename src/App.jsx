import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Enterprise from "./pages/Enterprise";
import CarbonCredit from "./pages/CarbonCredit";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
import "./App.css";
import IndianPublicSector from "./pages/IndianPublicSector";
import GlobalPublicSector from "./pages/GlobalPublicSector";
import Careers from "./pages/Careers";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/carbon-credit" element={<CarbonCredit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/indian-public-sector" element={<IndianPublicSector />} />
          <Route path="/global-public-sector" element={<GlobalPublicSector />} />
          <Route path="/careers" element={<Careers />} />
 
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;