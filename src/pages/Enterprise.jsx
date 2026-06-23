import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../assets/entwy-logo.png";

const Navbar = ({ darkText = false }) => {
  const navigate = useNavigate();
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);

  const navTextColor = darkText ? "text-black" : "text-white";
  const hoverColor = darkText ? "hover:text-purple-700" : "hover:text-purple-200";

  return (
    <nav className="relative w-full bg-transparent z-[9999]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Entwy"
            className="h-10 lg:h-16 w-auto object-contain"
          />
        </Link>

        <div
          className={`flex items-center gap-4 lg:gap-8 text-[10px] lg:text-xs font-bold whitespace-nowrap ${navTextColor}`}
        >
          <button
            type="button"
            onClick={() => {
              navigate("/enterprise");
              window.scrollTo(0, 0);
              setShowSolutionMenu(false);
            }}
            className="px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all cursor-pointer"
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
            className={`${hoverColor} transition-colors cursor-pointer`}
          >
            PRODUCTS
          </button>

          <button
            type="button"
            onClick={() => setShowSolutionMenu(!showSolutionMenu)}
            className={`${hoverColor} transition-colors cursor-pointer`}
          >
            SOLUTION
          </button>

          <a href="#" className={`${hoverColor} transition-colors`}>
            RESOURCES
          </a>

          <a href="#" className={`${hoverColor} transition-colors`}>
            ABOUT US
          </a>

          <a href="#" className={`${hoverColor} transition-colors`}>
            CAREERS
          </a>
        </div>

        <button className="shrink-0 bg-white text-purple-700 px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-[10px] lg:text-xs font-bold hover:bg-purple-50 transition-all flex items-center gap-2 shadow-lg">
          REQUEST DEMO
          <ArrowRight size={14} />
        </button>
      </div>

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
                setShowSolutionMenu(false);
                window.scrollTo(0, 0);
              }}
              className="text-left hover:text-purple-700 transition-colors"
            >
              GLOBAL PUBLIC SECTOR
            </button>

            <button
              type="button"
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