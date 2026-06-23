export default function Footer() {
  return (
    <footer
      className="mt-24 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #060814 0%, #090D23 50%, #060814 100%)",
      }}
    >
      <div className="max-w-[1875px] mx-auto px-[49px] py-14">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-x-[40px]">
          <div className="min-w-[140px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              ABOUT
            </h3>
            <div className="space-y-2 text-[13px] text-gray-300">
              <p>About Entwy</p>
              <p>Contact</p>
              <p>Careers</p>
              <p>Entwy Design</p>
            </div>
          </div>

          <div className="min-w-[220px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              ENTERPRISE INDUSTRIES
            </h3>
            <div className="space-y-2 text-[13px] text-gray-300">
              <p>Healthcare, Insurance & Pharmaceutical</p>
              <p>Banking & Investment</p>
              <p>Education, Learning & Skill Development</p>
              <p>Food & Beverage (F&amp;B)</p>
              <p>Beauty & Personal Care</p>
              <p>Energy & Industrial Supply</p>
              <p>Chain Logistics</p>
            </div>
          </div>

          <div className="min-w-[220px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              ENTERPRISE SOLUTIONS
            </h3>
            <div className="space-y-2 text-[13px] text-gray-300">
              <p>Carbon Credit Market Intelligence</p>
              <p>Strategic Foresight</p>
              <p>Data Analytics</p>
              <p>Generative AI Applications</p>
              <p>Intelligence Systems</p>
              <p>Cloud Infrastructure</p>
              <p>Marketing & Data Interpretation</p>
              <p>Business Process Automation</p>
              <p>Cybersecurity & Privacy Protection</p>
            </div>
          </div>

          <div className="min-w-[170px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              OTHER RESOURCES
            </h3>
            <div className="space-y-2 text-[13px] text-gray-300">
              <p>Zuntra Home</p>
              <p>GST: 33AACCZ1832A1ZW</p>
              <p>CIN:</p>
              <p>U62011TN2023PTC160015</p>
            </div>
          </div>

          <div className="min-w-[180px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              LOCATION
            </h3>
            <p className="text-[#8A5CF6] font-semibold mb-3 text-[13px]">
              INDIA
            </p>
            <div className="text-[13px] text-gray-300 leading-7">
              <p>No.63, 3rd Floor,</p>
              <p>Estate Main Rd,</p>
              <p>Developed Plots,</p>
              <p>Industrial Estate,</p>
              <p>Perungudi, Chennai</p>
              <p>- 600096</p>
            </div>
          </div>

          <div className="min-w-[160px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              UNITED STATES
            </h3>
            <p className="text-[#8A5CF6] font-semibold mb-3 text-[13px]">
              NEW YORK
            </p>
            <div className="text-[13px] text-gray-300 leading-7">
              <p>631 4th Ave</p>
              <p>Brooklyn, NY 11232</p>
            </div>
          </div>

          <div className="min-w-[180px]">
            <h3 className="text-[14px] font-semibold text-[#8A5CF6] uppercase whitespace-nowrap mb-6">
              STAY CONNECTED
            </h3>
            <p className="text-[13px] text-gray-300 mb-8">
              Get the latest news & updates
            </p>
            <button className="px-10 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#C084FC] to-[#8A5CF6] shadow-[0_0_35px_rgba(138,92,246,0.6)] hover:scale-105 transition-all duration-300">
              Sign Up →
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1875px] mx-auto px-[49px] py-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400">
          <div className="flex items-center gap-4">
            <span>A subsidiary of Zuntra Digital Pvt. Ltd.</span>
            <a
              href="mailto:info@zuntra.com"
              className="text-[#8A5CF6] hover:text-white transition"
            >
              info@zuntra.com
            </a>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Discover more from our parent company —</span>
            <a
              href="https://zuntra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A5CF6] hover:text-white transition"
            >
              Zuntra Digital →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}