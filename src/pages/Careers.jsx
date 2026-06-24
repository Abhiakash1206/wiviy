import React from "react";
import Navbar from "../components/Navbar";
import "./careers.css";

import heroBg from "../assets/buildfutureai.png";
import teamImg from "../assets/team-window.png";
import teamTableImg from "../assets/team-table.png";

const jobs = [
  "Frontend Engineer",
  "Backend Engineer",
  "Senior Frontend Engineer",
  "Principal Security Engineer",
  "ML Engineer",
];

const Careers = () => {
  return (
    <div className="careers-page">
      <Navbar darkText />

      <section
        className="careers-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="careers-hero-content">
          <h1>
            Build the Future of <span>AI Agents,</span>
            <br />
            Autonomous & Enterprise
            <br />
            Intelligence
          </h1>

          <p>
            We're enabling the next evolution of AI powered services,
            enterprise automation, and intelligent products. Join a team focused
            on innovation, execution, and industry-wide impact.
          </p>

          <button>Start Now</button>
        </div>
      </section>
<section className="careers-culture">
  <div className="careers-culture-card">
    <div className="careers-culture-text">
      <h2>Culture Snapshot</h2>
      <h3>A thriving environment</h3>
      <ul>
        <li>Autonomy, ownership, and purpose drive everything we do.</li>
        <li>Collaborative problem-solving across functions.</li>
        <li>Built for continuous innovation.</li>
        <li>Diverse, inclusive, and globally minded.</li>
        <li>We value curiosity, impact, clean code, and customer delight.</li>
      </ul>
    </div>

    <img src={teamImg} alt="Team discussion" className="careers-img" />

    <img src={teamTableImg} alt="Team brainstorming" className="careers-img" />

    <div className="careers-culture-text perks-block">
      <h2>Perks & Growth</h2>
      <ul>
        <li>Market-competitive and fair pay</li>
        <li>Opportunity to work on real products</li>
        <li>Exposure to cutting-edge tech stacks and future-ready platforms</li>
        <li>Learn & attend conferences, engage in communities</li>
        <li>Champion ideas and be the change</li>
      </ul>
    </div>
  </div>
</section>

      <section className="careers-apply">
        <p>
          Your work at ENTWY unlocks impact through AI, automation,
          <br />
          and digital transformation.
          <br />
          Together, we're building what's next and shaping the
          <br />
          technology of tomorrow.
        </p>

        <h1>APPLY HERE</h1>

        <div className="careers-tabs">
          {["ENGINEERING", "MARKETING", "SALES", "HR", "PRODUCT", "PARTNERSHIPS"].map(
            (item, index) => (
              <button key={item} className={index === 0 ? "active" : ""}>
                {item} →
              </button>
            )
          )}
        </div>

        <div className="careers-jobs">
          {jobs.map((job) => (
            <div className="careers-job-row" key={job}>
              <span>{job}</span>
              <button>Apply Now →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;