import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../assets/entwy-logo.png";

const Navbar = ({ darkText = false }) => {
  const navigate = useNavigate();
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);

  return (
    <nav className="relative w-full bg-transparent z-[9999]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex justify-between items-center gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Entwy"
            className="h-10 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div
          className={`flex flex-1 items-center justify-center gap-3 lg:gap-8 text-[9px] sm:text-[10px] lg:text-xs font-bold whitespace-nowrap overflow-x-auto scrollbar-hide ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              navigate("/enterprise");
              window.scrollTo(0, 0);
              setShowSolutionMenu(false);
            }}
            className="px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all cursor-pointer shrink-0"
          >
            ENTERPRISE
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/carbon-credit");
              window.scrollTo(0, 0);
              setShowSolutionMenu(false);
            }}
            className={`transition-colors cursor-pointer shrink-0 ${
              darkText
                ? "hover:text-purple-700"
                : "hover:text-purple-200"
            }`}
          >
            PRODUCTS
          </button>

          <button
            type="button"
            onClick={() => setShowSolutionMenu(!showSolutionMenu)}
            className={`transition-colors cursor-pointer shrink-0 ${
              darkText
                ? "hover:text-purple-700"
                : "hover:text-purple-200"
            }`}
          >
            SOLUTION
          </button>

        <button
  type="button"
  onClick={() => {
    navigate("/resources");
    window.scrollTo(0, 0);
    setShowSolutionMenu(false);
  }}
  className={`transition-colors shrink-0 ${
    darkText ? "hover:text-purple-700" : "hover:text-purple-200"
  }`}
>
  RESOURCES
</button>

          <a
            href="#"
            className={`transition-colors shrink-0 ${
              darkText
                ? "hover:text-purple-700"
                : "hover:text-purple-200"
            }`}
          >
            ABOUT US
          </a>

          <a
            href="#"
            className={`transition-colors shrink-0 ${
              darkText
                ? "hover:text-purple-700"
                : "hover:text-purple-200"
            }`}
          >
            CAREERS
          </a>
        </div>

        {/* Request Demo */}
        <button className="shrink-0 bg-white text-purple-700 px-3 lg:px-6 py-2 lg:py-3 rounded-lg text-[9px] lg:text-xs font-bold hover:bg-purple-50 transition-all flex items-center gap-1 lg:gap-2 shadow-lg">
          REQUEST DEMO
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Solution Menu */}
      {showSolutionMenu && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-b-3xl bg-white/35 backdrop-blur-2xl border border-white/30 shadow-2xl px-10 lg:px-28 py-14 lg:py-20 text-black animate-slideDown origin-top">
          <div className="flex flex-col gap-8 text-lg lg:text-xl font-bold tracking-wide">

            <button
              type="button"
              onClick={() => {
                navigate("/enterprise");
                window.scrollTo(0, 0);
                setShowSolutionMenu(false);
              }}
              className="text-left hover:text-purple-700 transition-colors"
            >
              ENTERPRISE
            </button>

            <button
              type="button"
              onClick={() => {
                navigate("/carbon-credit");
                window.scrollTo(0, 0);
                setShowSolutionMenu(false);
              }}
              className="text-left hover:text-purple-700 transition-colors"
            >
              GLOBAL PUBLIC SECTOR
            </button>

            <button
  type="button"
  onClick={() => {
    navigate("/indian-public-sector");
    window.scrollTo(0, 0);
    setShowSolutionMenu(false);
  }}
  className="text-left hover:text-purple-700 transition-colors"
>
  INDIAN PUBLIC SECTOR
</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;