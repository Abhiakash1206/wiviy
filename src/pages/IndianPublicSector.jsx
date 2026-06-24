import React from "react";
import Navbar from "../components/Navbar";
import "./IndianPublicSector.css";

import glitterBg from "../assets/cb45b9297fb10f95128bef84d49c1be69e298faf.png";
import indiaMap from "../assets/efdb93d59d129ed40bbe8d6a2f04f5eaa7530275.png";
import upperSwooshBg from "../assets/fcc8243bc1defe50454a7e0b0d339cb8761a0418.png";
import lowerWavyBg from "../assets/67953722c6dbbd30218027a9f73d1e3c7c5bce6d - Copy.png";
export default function IndianPublicSector() {
  return (
    <div className="page-container">
      <Navbar darkText />

      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${glitterBg})` }}
      >
        {/* Make sure this line is exactly here inside the section container */}
        <div 
          className="hero-map-overlay"
          style={{ backgroundImage: `url(${indiaMap})` }}
        />

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-tagline">AI-POWERED SOLUTIONS</span>
            <h1 className="hero-title">
              Indian Public <br />
              <span className="purple-accent">Sector</span>
            </h1>
            <p className="hero-subtitle">
              Empowering governments worldwide with AI-driven solutions to drive transparency, 
              accelerate innovation, trust societal public services and improve governance.
            </p>
            <button className="hero-cta-btn">
              Explore Public Solutions <span style={{ marginLeft: '4px' }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. CORE MATRIX SOLUTIONS SECTION */}
      <section className="solutions-section">
        <div className="solutions-header">
          <h2 className="solutions-title">AI Solutions for Indian Governance</h2>
          <p className="solutions-subtitle">
            Advanced AI technologies enabling government departments to automate processes, manage data efficiently, and deliver better public services.
          </p>
        </div>

        <div className="solutions-grid">
          <div className="gov-card">
            <div className="card-icon-wrapper">🏛</div>
            <h3 className="gov-card-title">Digital Governance Systems</h3>
            <ul className="gov-card-list">
              <li className="gov-card-item">Automated public service workflows</li>
              <li className="gov-card-item">Integrated government data platforms</li>
              <li className="gov-card-item">Real time administrative insights</li>
              <li className="gov-card-item">Faster digital service delivery</li>
            </ul>
          </div>

          <div className="gov-card">
            <div className="card-icon-wrapper">👥</div>
            <h3 className="gov-card-title">Citizen Service Platforms</h3>
            <ul className="gov-card-list">
              <li className="gov-card-item">AI assisted service portals</li>
              <li className="gov-card-item">Automated citizen request management</li>
              <li className="gov-card-item">Digital grievance resolution systems</li>
              <li className="gov-card-item">Faster citizen communication channels</li>
            </ul>
          </div>

          <div className="gov-card">
            <div className="card-icon-wrapper">📊</div>
            <h3 className="gov-card-title">Data Intelligence Systems</h3>
            <ul className="gov-card-list">
              <li className="gov-card-item">Government data analytics dashboards</li>
              <li className="gov-card-item">Policy performance monitoring tools</li>
              <li className="gov-card-item">Data driven decision insights</li>
              <li className="gov-card-item">Public program impact analytics</li>
            </ul>
          </div>

          <div className="gov-card">
            <div className="card-icon-wrapper">📄</div>
            <h3 className="gov-card-title">Administrative Automation</h3>
            <ul className="gov-card-list">
              <li className="gov-card-item">Automated document processing systems</li>
              <li className="gov-card-item">Intelligent workflow management tools</li>
              <li className="gov-card-item">Reduced manual administrative tasks</li>
              <li className="gov-card-item">Faster internal approvals processing</li>
            </ul>
          </div>

          <div className="gov-card">
            <div className="card-icon-wrapper">🏗</div>
            <h3 className="gov-card-title">Smart Infrastructure Management</h3>
            <ul className="gov-card-list">
              <li className="gov-card-item">Urban infrastructure monitoring systems</li>
              <li className="gov-card-item">AI enabled resource planning</li>
              <li className="gov-card-item">Intelligent asset management tools</li>
              <li className="gov-card-item">Predictive maintenance analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONS SECTION WITH CENTERPIECE DIAGRAM NODE */}
      <section className="operations-outer-bg">
        <div className="content-section">
          <div className="section-center-heading">
            <h2 className="section-title">AI Transforming Public Sector Operations</h2>
            <p className="section-subtitle-dark">
              Innovative AI systems helping Indian government departments improve efficiency and governance.
            </p>
          </div>

          <div className="operations-interactive-layout">
            <div className="op-side-panel">
              <div className="op-panel-header">
                <span style={{ fontSize: '1.15rem' }}>📊</span> Smart City Systems
              </div>
              <ul className="op-list-container">
                <li className="op-list-point">
                  AI powered analytics monitor urban infrastructure, traffic systems, and utilities to improve city planning and resource management.
                </li>
                <li className="op-list-point">
                  Intelligent data platforms support municipal authorities with insights for infrastructure development and better citizen services.
                </li>
                <li className="op-list-point">
                  Automated monitoring systems enhance safety, urban planning, and environmental stability across growing cities.
                </li>
              </ul>
            </div>

            <div className="center-node-graphic">
              <div className="outer-dotted-ring">
                <div className="center-ai-chip">
                  <span>AI</span>
                  <div className="chip-mini-nodes">•••••</div>
                </div>
                <div className="satellite-badge sat-top">🏛</div>
                <div className="satellite-badge sat-tr">📋</div>
                <div className="satellite-badge sat-right">👥</div>
                <div className="satellite-badge sat-br">🛡</div>
                <div className="satellite-badge sat-bottom">📈</div>
                <div className="satellite-badge sat-bl">🗄</div>
                <div className="satellite-badge sat-left">⚙️</div>
                <div className="satellite-badge sat-tl">🚌</div>
              </div>
            </div>

            <div className="op-side-panel">
              <div className="op-panel-header" style={{ color: '#047857' }}>
                <span style={{ fontSize: '1.15rem' }}>🖥️</span> Public Service Automation
              </div>
              <ul className="op-list-container">
                <li className="op-list-point green-bullet">
                  AI systems automate government service processes, reducing delays and improving accessibility for citizens across digital platforms.
                </li>
                <li className="op-list-point green-bullet">
                  Automated workflows help departments manage applications, approvals, and documentation with greater efficiency.
                </li>
                <li className="op-list-point green-bullet">
                  Digital automation enables faster public service delivery and better coordination across multiple government agencies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOVERNMENT INNOVATION SECTION */}
      <section className="innovation-section">
        <div className="innovation-header">
          <h2 className="innovation-title">Government Innovation</h2>
          <p className="innovation-subtitle">
            AI technologies enabling Indian public sector organizations to modernize governance, improve transparency, and enhance service delivery.
          </p>
        </div>

        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="mock-dashboard-preview">
              <div className="dash-top-row">
                <div className="dash-sidebar-icons">
                  <span>㗊</span><span>📈</span><span>🗄</span><span>📄</span>
                </div>
                <div className="dash-chart-main">
                  <strong>Overview</strong>
                  <div className="dash-line-art"></div>
                </div>
                <div className="dash-pie-box">
                  <strong style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>Distribution</strong>
                  <div className="dash-circle-graph"></div>
                </div>
              </div>
              
              <div className="dash-bottom-row">
                <div className="dash-bar-lines">
                  <div className="dash-bar" style={{ height: '40px' }}></div>
                  <div className="dash-bar" style={{ height: '65px' }}></div>
                  <div className="dash-bar" style={{ height: '50px' }}></div>
                  <div className="dash-bar" style={{ height: '75px' }}></div>
                  <div className="dash-bar" style={{ height: '30px' }}></div>
                </div>
                <div className="dash-list-lines">
                  <div className="dash-strip" style={{ width: '80%' }}></div>
                  <div className="dash-strip" style={{ width: '90%' }}></div>
                  <div className="dash-strip" style={{ width: '60%' }}></div>
                  <div className="dash-strip" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="innovation-card-meta">
              <h3 className="innovation-card-title">Data Platforms</h3>
              <p className="innovation-card-desc">
                Integrated data platforms help government agencies analyze public information, improve transparency, and enable better policy planning across departments.
              </p>
            </div>
          </div>

          <div className="innovation-card" style={{ backgroundColor: '#f3e8ff' }}>
            <div className="mock-workflow-preview">
              <div className="workflow-node-chain">
                <div className="wf-square-node blue-node">📄</div>
                <div style={{ color: '#cbd5e1' }}>••••</div>
                <div className="wf-square-node purple-node">⚙️</div>
                <div style={{ color: '#cbd5e1' }}>••••</div>
                
                <div className="wf-center-stack">
                  <div className="wf-square-node green-node">🛡️</div>
                  <div className="wf-square-node indigo-node">👤</div>
                  <div className="wf-square-node orange-node">✓</div>
                </div>

                <div style={{ color: '#cbd5e1' }}>••••</div>
                <div className="wf-square-node purple-node">🔔</div>
              </div>
            </div>

            <div className="innovation-card-meta">
              <h3 className="innovation-card-title green-text">Workflow Automation</h3>
              <p className="innovation-card-desc dark-text">
                AI powered automation reduces manual administrative tasks and helps government departments deliver services faster and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* 6. OVERHAULED TRANSFORMATION & FOOTER BLOCKS */}
      <section className="transformation-section">
        {/* UPPER BOX: Uses fcc8243bc1defe50454a7e0b0d339cb8761a0418.png */}
        <div 
          className="info-banner-purple"
          style={{ backgroundImage: `url(${upperSwooshBg})` }}
        >
          <div className="info-banner-left">
            <div className="info-badge-ai">AI</div>
            <div className="info-text-wrapper">
              <h4 className="info-banner-title">Empowering India's Public Sector with Intelligent AI Driven Governance Solutions</h4>
              <p className="info-banner-sub">Transforming governance with AI technologies that improve citizen services, data insights, and administrative efficiency.</p>
            </div>
          </div>
          <button className="transformation-cta-btn">
            Explore Solutions <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* LOWER BOX: Uses 67953722c6dbbd30218027a9f73d1e3c7c5bce6d.png */}
        <div 
          className="hero-transformation-panel"
          style={{ backgroundImage: `url(${lowerWavyBg})` }}
        >
          <h2 className="hero-panel-heading">Start Transformation</h2>
          <button className="transformation-cta-btn highlight-btn">
            Contact Us <span className="arrow-icon">→</span>
          </button>
        </div>
      </section>

      {/* Overhauled Dark System Footer */}
      <footer className="site-footer-dark"></footer>
    </div>
  );
}