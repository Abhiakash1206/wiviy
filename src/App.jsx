import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Enterprise from "./pages/Enterprise";
import CarbonCredit from "./pages/CarbonCredit";
import Footer from "./components/Footer";
import "./App.css";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/carbon-credit" element={<CarbonCredit />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;