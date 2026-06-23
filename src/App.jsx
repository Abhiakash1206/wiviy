import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Enterprise from "./pages/Enterprise";
import CarbonCredit from "./pages/CarbonCredit";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/carbon-credit" element={<CarbonCredit />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;