import React, { useState } from "react";
import "./App.css";

// ─── NAV ───────────────────────────────────────────────────────────────────────
function Navbar() {
  const links = ["About", "Skills", "Education", "Projects", "Contact"];
  return (
    <nav className="navbar">
      <div className="nav-brand">JJ</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <span className="hero-tag">Programming Aspirant</span>
        <h1 className="hero-name">
          Jibi <span className="accent">Jos</span>
        </h1>
        <p className="hero-bio">
          Passionate about web development with a strong interest in building
          responsive and user-friendly websites. Continuously learning new
          technologies to enhance skills and stay updated with industry trends.
          Highly motivated and currently seeking an opportunity to apply
          knowledge and grow within a dynamic organization.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-ring">
          <div className="badge-inner">
            <span>MEARN</span>
            <span className="badge-sub">Stack Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: "◈",
      items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: "◉",
      items: ["Node.js", "Express.js", "Python"],
    },
    {
      title: "Database",
      icon: "◫",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      icon: "◎",
      items: ["Git", "VS Code", "Bootstrap"],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader label="Technical Skills" title="What I Work With" />
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-icon">{cat.icon}</div>
              <h3 className="skill-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="personal-skills">
          <h3 className="subsection-title">Personal Skills</h3>
          <div className="personal-tags">
            {["Leadership", "Creative Thinking", "Teamwork"].map((s) => (
              <span className="personal-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EDUCATION ─────────────────────────────────────────────────────────────────
function Education() {
  const entries = [
    {
      year: "2025",
      degree: "MEARN Stack Course",
      institution: "Jetking Kaloor",
      location: "Kochi, Ernakulam",
      note: "6-month professional course — in progress",
    },
    {
      year: "2022–2025",
      degree: "Bachelor of Computer Applications",
      institution: "Naipunnya School of Management",
      location: "Cherthala, Alappuzha",
      note: "University of Kerala",
    },
    {
      year: "2021–2022",
      degree: "12th Grade (ISC)",
      institution: "Marion Villa Convent ISC School",
      location: "Trivandrum, Kerala",
      note: "Council for the Indian School Certificate Examinations (CISCE)",
    },
  ];

  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <SectionHeader label="Education" title="Academic Background" />
        <div className="timeline">
          {entries.map((e, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">{e.year}</div>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3 className="tl-degree">{e.degree}</h3>
                <p className="tl-institution">{e.institution}</p>
                <p className="tl-location">{e.location}</p>
                <span className="tl-note">{e.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="internship-block">
          <div className="intern-header">
            <span className="section-tag">Internship</span>
          </div>
          <div className="intern-card">
            <h3>Sristhi Innovatives, Technopark</h3>
            <p className="intern-location">Trivandrum, Kerala</p>
            <p className="intern-desc">
              Training in Python and AI — covering foundational libraries
              including pandas, NumPy, SciPy, Matplotlib, and Scikit-learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      name: "RouteSafe",
      subtitle: "ML Based Accident Risk Prediction System",
      color: "#1a3a5c",
      accent: "#2e86de",
      points: [
        "Developed a machine learning system to predict real-time road accident risks.",
        "Integrated Google Maps API for location-based visualization.",
        "Built responsive frontend using HTML5, CSS3, JavaScript, and Bootstrap.",
        "Implemented backend logic using Python and MySQL database.",
        "Applied Scikit-learn models for data analysis and prediction.",
      ],
      stack: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Scikit-learn"],
    },
    {
      name: "Connecta",
      subtitle: "MERN Stack Social Networking Web Application",
      color: "#1a3a2a",
      accent: "#27ae60",
      points: [
        "Designed and developed a full-stack social media platform using the MERN stack.",
        "Implemented secure user authentication and profile management features.",
        "Built dynamic UI with sidebar navigation, search, and profile tabs.",
        "Integrated REST APIs for user data, posts, and media handling.",
        "Developed responsive user interface for improved user experience.",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "CSS"],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader label="Projects" title="Selected Work" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card ${active === i ? "expanded" : ""}`}
              key={p.name}
              style={{ "--proj-color": p.color, "--proj-accent": p.accent }}
            >
              <div className="proj-header">
                <span className="proj-index">0{i + 1}</span>
                <div>
                  <h3 className="proj-name">{p.name}</h3>
                  <p className="proj-subtitle">{p.subtitle}</p>
                </div>
              </div>

              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span className="proj-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <button
                className="proj-toggle"
                onClick={() => setActive(active === i ? null : i)}
              >
                {active === i ? "Show Less ↑" : "View Details ↓"}
              </button>

              {active === i && (
                <ul className="proj-points">
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const details = [
    { label: "Location", value: "Kumarapuram, Trivandrum, Kerala — 695011", icon: "📍" },
    { label: "Phone", value: "+91 8921463593", icon: "📞" },
    { label: "Email", value: "jibijoss121@gmail.com", icon: "✉️" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jibi-jos-6bb250392",
      icon: "🔗",
      href: "https://www.linkedin.com/in/jibi-jos-6bb250392/",
    },
  ];

  const languages = ["English", "Malayalam", "Hindi"];

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <SectionHeader label="Get In Touch" title="Contact" />
        <div className="contact-layout">
          <div className="contact-cards">
            {details.map((d) => (
              <div className="contact-card" key={d.label}>
                <span className="contact-icon">{d.icon}</span>
                <div>
                  <p className="contact-label">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noreferrer" className="contact-value link">
                      {d.value}
                    </a>
                  ) : (
                    <p className="contact-value">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-extra">
            <div className="languages-block">
              <h3 className="subsection-title">Languages</h3>
              <div className="lang-list">
                {languages.map((l) => (
                  <span className="lang-pill" key={l}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div className="hobbies-block">
              <h3 className="subsection-title">Hobbies</h3>
              <div className="hobby-list">
                {["🎵 Music", "⚽ Sports", "🍳 Cooking", "🌍 Exploring"].map((h) => (
                  <span className="hobby-item" key={h}>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jibi Jos — All rights reserved.</p>
      <p className="footer-sub">Built with React · Trivandrum, Kerala</p>
    </footer>
  );
}

// ─── SHARED: SECTION HEADER ────────────────────────────────────────────────────
function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <span className="section-tag">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-rule" />
    </div>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
