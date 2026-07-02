'use client';

import { useEffect, useState } from 'react';

const APPS = [
  {
    name: 'Triage Engine',
    tag: 'AI Operations Inbox Intelligence',
    desc: 'Turns a chaotic support queue into a prioritized, routed, reply-ready action plan.',
    href: 'https://triage.shivanchal.in',
    color: '#84cc16',
    icon: 'T'
  },
  {
    name: 'FinePrint',
    tag: 'AI Contract Risk Analyzer',
    desc: 'Read the fine print before you sign it — in seconds, in plain English.',
    href: 'https://contracts.shivanchal.in',
    color: '#60a5fa',
    icon: '§'
  },
  {
    name: 'Bidsight',
    tag: 'AI Tender & RFP Intelligence',
    desc: 'Upload a tender, get a go/no-go brief in seconds.',
    href: 'https://bids.shivanchal.in',
    color: '#f59e0b',
    icon: '◎'
  },
  {
    name: 'Dashboard',
    tag: 'Operations Analytics',
    desc: 'Real-time visibility into automation performance and time saved.',
    href: 'https://dashboard.shivanchal.in',
    color: '#ec4899',
    icon: '◫'
  }
];

const STATS = [
  { value: '5', label: 'AI Apps Live' },
  { value: '87%', label: 'Automation Rate' },
  { value: '16+', label: 'Years Ops Experience' },
  { value: '24/7', label: 'Always On' }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="nav-dot" />
            Shivanchal
          </div>
          <div className="nav-links">
            <span>Consultants</span>
          </div>
        </div>
      </nav>

      <header className={`hero ${mounted ? 'hero-in' : ''}`}>
        <div className="hero-badge">AI AUTOMATION &amp; OPERATIONS TRANSFORMATION</div>
        <h1 className="hero-title">
          <span className="gradient-text">Shivanchal</span>
        </h1>
        <p className="hero-sub">
          5 production AI applications built to turn messy operational work
          into fast, structured, decision-ready output — for SMEs who don't
          have time to waste.
        </p>
        <div className="hero-cta">
          <a href="#apps" className="btn btn-primary">Explore the Platform ↓</a>
          <a href="https://wa.me/919111331666" className="btn btn-ghost" target="_blank" rel="noreferrer">
            Talk to Us
          </a>
        </div>
      </header>

      <section className="stats">
        {STATS.map((s, i) => (
          <div className="stat-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section id="apps" className="apps-section">
        <div className="section-label">THE PLATFORM</div>
        <h2 className="section-title">Four tools. One operating system.</h2>

        <div className="apps-grid">
          {APPS.map((app, i) => (
            <a
              href={app.href}
              key={app.name}
              className="app-card"
              style={{ '--accent': app.color, animationDelay: `${i * 0.1}s` }}
              target="_blank"
              rel="noreferrer"
            >
              <div className="app-card-glow" />
              <div className="app-icon">{app.icon}</div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-tag">{app.tag}</p>
              <p className="app-desc">{app.desc}</p>
              <div className="app-launch">Launch →</div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to automate your operations?</h2>
          <p>Let's build an AI workflow tailored to your business.</p>
          <a href="https://wa.me/919111331666" className="btn btn-primary" target="_blank" rel="noreferrer">
            Start a Conversation
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Shivanchal Consultants · Bhopal, Madhya Pradesh</p>
        <p className="footer-sub">AI Automation & Operations Transformation Specialist</p>
      </footer>
    </div>
  );
}
