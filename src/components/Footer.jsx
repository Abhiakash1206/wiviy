import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#070b1d] text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">ABOUT</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>About Entwy</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Entwy Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              ENTERPRISE INDUSTRIES
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Healthcare, Insurance &amp; Pharmaceutical</li>
              <li>Banking &amp; Investment</li>
              <li>Education, Learning &amp; Skill Development</li>
              <li>Food &amp; Beverage</li>
              <li>Beauty &amp; Personal Care</li>
              <li>Energy &amp; Industrial Supply</li>
              <li>Chain Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              ENTERPRISE SOLUTIONS
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Carbon Credit Market Intelligence</li>
              <li>Strategic Foresight</li>
              <li>Data Analytics</li>
              <li>Generative AI Applications</li>
              <li>Intelligence Systems</li>
              <li>Cloud Infrastructure</li>
              <li>Marketing &amp; Data Interpretation</li>
              <li>Business Process Automation</li>
              <li>Cybersecurity &amp; Privacy Protection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              OTHER RESOURCES
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Zuntra Home</li>
              <li>GST: 33AACCZ1832A1ZW</li>
              <li>CIN: U62011TN2023PTC160015</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              LOCATION
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="text-purple-300 font-semibold">INDIA</li>
              <li>
                No.63, 3rd Floor,
                <br />
                Estate Main Rd,
                <br />
                Developed Plots,
                <br />
                Industrial Estate,
                <br />
                Perungudi, Chennai
                <br />- 600096
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              UNITED STATES
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="text-purple-300 font-semibold">NEW YORK</li>
              <li>
                631 4th Ave
                <br />
                Brooklyn, NY 11232
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 text-sm font-bold mb-5">
              STAY CONNECTED
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Get the latest news &amp; updates
            </p>
            <button className="w-full bg-purple-500 text-white py-4 rounded-full font-bold hover:bg-purple-600 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.45)]">
              Sign Up →
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">
          <p>
            A subsidiary of Zuntra Digital Pvt. Ltd.{" "}
            <span className="text-purple-300">info@zuntra.com</span>
          </p>

          <p>
            Discover more from our parent company —{" "}
            <span className="text-purple-300">Zuntra Digital →</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;