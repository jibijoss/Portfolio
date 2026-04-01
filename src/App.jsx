import React, { useEffect, useState } from "react";
import "./App.css";

// ─────────────────────────────────────────────────────
//  NAVBAR — sticky top navigation bar
// ─────────────────────────────────────────────────────
function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo" onClick={() => scrollToSection("hero")}>
        JJ
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {["about", "education", "skills", "internship"].map((sec) => (
          <li key={sec}>
            <button onClick={() => scrollToSection(sec)}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <button
            className="navbar__projects-btn"
            onClick={() => onNavigate("projects")}
          >
            Projects ↗
          </button>
        </li>
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────
//  HERO — full-screen introduction section
// ─────────────────────────────────────────────────────
function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <video autoPlay loop muted playsInline className="bg-video">
  <source src="/4822860-hd_1920_1080_30fps.mp4" type="video/mp4" />
</video>
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">
        <p className="hero__greeting animate-fade-up">Hello, I'm</p>
        <h1 className="hero__name animate-fade-up delay-1">
          Jibi Jos
        </h1>
        <p className="hero__title animate-fade-up delay-2">
          Programming Aspirant &amp; Web Developer
        </p>
        <p className="hero__tagline animate-fade-up delay-3">
          Passionate about building responsive, user-friendly web experiences.
        </p>

        <div className="hero__actions animate-fade-up delay-4">
          <button
            className="btn btn--primary"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </button>
          <button
            className="btn btn--outline"
            onClick={() => onNavigate("projects")}
          >
            View Projects ↗
          </button>
            <a href="./Jibijoscv.pdf" download className="btn btn--resume">
    Download Resume ⬇
  </a>
        </div>

        <div className="hero__social animate-fade-up delay-5">
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=jibijoss121@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="Email"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          <a href="tel:+918921463593" className="social-link" title="Phone">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.05 3.37 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          
          <a href="https://github.com/jibijoss"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              </a>
          <a
            href="https://www.linkedin.com/in/jibi-jos-6bb250392/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
  href="https://www.instagram.com/_jiby_jos/"
  target="_blank"
  rel="noreferrer"
  className="social-link"
  title="Instagram"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.75 1.27 4 4 0 0 1 7.75-1.27z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
</a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
//  ABOUT — personal information section
// ─────────────────────────────────────────────────────
function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <div className="section__tag">01 — About</div>
        <h2 className="section__title">Who I Am</h2>

        <div className="about__grid">
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <div className="avatar__ring" />
            </div>
            <div className="about__location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Trivandrum, Kerala, India
            </div>
          </div>

          <div className="about__text">
            <p className="about__bio">
              I am passionate about web development, with a strong interest in
              building responsive and user-friendly websites. Continuously
              learning new technologies to enhance my skills and stay updated
              with industry trends.
            </p>
            <p className="about__bio">
              Highly motivated and currently seeking an opportunity to apply my
              knowledge and grow within a dynamic organization.
            </p>

            <div className="about__contact-grid">
              <div className="contact-item">
                <span className="contact-item__label">Email</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jibijoss121@gmail.com"
                  className="contact-item__value"
                >
                  jibijoss121@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">Phone</span>
                <a href="tel:+918921463593" className="contact-item__value">
                  +91 8921463593
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">Address</span>
                <span className="contact-item__value">
                  SGLRA 142, Kumarapuram, Medical College PO, Thiruvananthapuram, PinCode 695011
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/jibi-jos-6bb250392/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item__value"
                >
                  jibi-jos-6bb250392
                </a>
              </div>
            </div>

            <div className="about__chips">
              {["English", "Malayalam", "Hindi"].map((lang) => (
                <span key={lang} className="chip chip--lang">
                  {lang}
                </span>
              ))}
              {["Music", "Cooking", "Sports", "Exploring"].map((h) => (
                <span key={h} className="chip chip--hobby">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
//  EDUCATION — academic background section
// ─────────────────────────────────────────────────────
function Education() {
  return (
    <section className="section education" id="education">
      <div className="section__inner">
        <div className="section__tag">02 — Education</div>
        <h2 className="section__title">Academic Journey</h2>

        <div className="timeline">

          {/* Item 1 */}
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__line" />
            <div className="timeline__card">
              <span className="timeline__year">2026</span>
              <h3 className="timeline__degree">
                MERN Stack Course (6 months)
              </h3>
              <p className="timeline__inst">
                Jetking Kaloor, Kochi, Ernakulam
              </p>
              <p className="timeline__detail">
                Full-stack web development training focusing on MongoDB,
                Express, React, and Node.js.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__line" />
            <div className="timeline__card">
              <span className="timeline__year">2022 – 2025</span>
              <h3 className="timeline__degree">
                Bachelor of Computer Applications
              </h3>
              <p className="timeline__inst">
                Naipunnya School of Management, Cherthala, Alappuzha
              </p>
              <p className="timeline__detail">
                Affiliated with the University of Kerala.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__line" />
            <div className="timeline__card">
              <span className="timeline__year">2021 – 2022</span>
              <h3 className="timeline__degree">12th Grade</h3>
              <p className="timeline__inst">
                Marion Villa Convent ISC School
              </p>
              <p className="timeline__detail">
                Affiliated with CISCE (Council for the Indian School Certificate
                Examinations).
              </p>
            </div>
          </div>
        {/* Item 3 */}
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__line" />
            <div className="timeline__card">
              <span className="timeline__year">2020</span>
              <h3 className="timeline__degree">10th Grade</h3>
              <p className="timeline__inst">
                Marion Villa Convent ISC School
              </p>
              <p className="timeline__detail">
                Affiliated with CISCE (Council for the Indian School Certificate
                Examinations).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
//  SKILLS — technical skills section
// ─────────────────────────────────────────────────────
function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <div className="section__tag">03 — Skills</div>
        <h2 className="section__title">What I like to Work With</h2>

        <div className="skills__grid">
          
          <div className="skill-card">
            <div className="skill-card__icon">🎨</div>
            <h3 className="skill-card__category">Frontend</h3>
            <div className="skill-card__tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card__icon">⚙️</div>
            <h3 className="skill-card__category">Backend</h3>
            <div className="skill-card__tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card__icon">🗄️</div>
            <h3 className="skill-card__category">Database</h3>
            <div className="skill-card__tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card__icon">🛠️</div>
            <h3 className="skill-card__category">Tools</h3>
            <div className="skill-card__tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card__icon">💡</div>
            <h3 className="skill-card__category">Personal Skills</h3>
            <div className="skill-card__tags">
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Creative Thinking</span>
              <span className="skill-tag">Teamwork</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
//  INTERNSHIP — internship experience section
// ─────────────────────────────────────────────────────
function Internship() {
  return (
    <section className="section internship" id="internship">
      <div className="section__inner">
        <div className="section__tag">04 — Internship</div>
        <h2 className="section__title">Work Experience</h2>

        <div className="internship__card">
          <div className="internship__header">
            <div className="internship__badge">✓ Completed</div>
            <h3 className="internship__org">Sristhi Innovatives</h3>
            <p className="internship__location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Technopark, Trivandrum
            </p>
          </div>

          <p className="internship__desc">
            Successfully completed an internship with training in{" "}
            <strong>Python and AI</strong>, gaining hands-on experience with
            fundamental data science and machine learning libraries.
          </p>

          <div className="internship__tools">
            <span className="tool-badge">Python</span>
            <span className="tool-badge">pandas</span>
            <span className="tool-badge">NumPy</span>
            <span className="tool-badge">SciPy</span>
            <span className="tool-badge">Matplotlib</span>
            <span className="tool-badge">Scikit-learn</span>
            <span className="tool-badge">AI Basics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────
//  FOOTER — site footer
// ─────────────────────────────────────────────────────
function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          JJ
        </div>
        <p className="footer__tagline">
          Building the web, one line at a time.
        </p>
        <button
          className="btn btn--primary footer__projects-btn"
          onClick={() => onNavigate("projects")}
        >
          View My Projects ↗
        </button>
        <p className="footer__copy">
          © {new Date().getFullYear()} Jibi Jos · Trivandrum, Kerala, India
        </p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────
//  HOME PAGE
// ─────────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate} />
      <About />
      <Education />
      <Skills />
      <Internship />
      <Footer onNavigate={onNavigate} />
    </>
  );
}

// ─────────────────────────────────────────────────────
//  PROJECTS PAGE
// ─────────────────────────────────────────────────────
function ProjectsPage({ onNavigate }) {
  return (
    <div className="projects-page">
      <nav className="navbar navbar--scrolled">
        <div className="navbar__logo" onClick={() => onNavigate("home")}>
          JJ
        </div>
        <button className="btn btn--outline" onClick={() => onNavigate("home")}>
          ← Back Home
        </button>
      </nav>

      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="section__inner">
          <div className="section__tag">05 — Projects</div>
          <h2 className="section__title">My Projects</h2>

          <div className="skill__grid">
            <div className="skill-card">
              <div className="skill-card__icon">PORTFOLIO </div>
              <h3 className="skill-card__category">Portfolio Website</h3>
              <p>
                A personal portfolio website built using React and Vite to
                showcase my skills, education, and projects.(this website)
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-card__icon">ROUTESAFE </div>
              <h3 className="skill-card__category">ML Based Accident Risk Prediction System</h3>
              <p>Developed a real-time road accident risk prediction system using Scikit-learn models for 
                data analysis and prediction, integrated Google Maps API for location-based 
                visualization, built a responsive frontend with HTML5, CSS3, JavaScript, and 
                Bootstrap, and implemented backend functionality using Python and MySQL.Applied Scikit-learn models 
                for data analysis and prediction. <br /> <br />
                <span>Tech Stack: Python, MySQL, HTML, CSS, JavaScript, Bootstrap, Scikit-learn</span>
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-card__icon">CONNECTA </div>
              <h3 className="skill-card__category"> MERN Stack Social Networking Web Application</h3>
              <p>Designed and developed a full-stack social media platform using the MERN stack,
                 implementing secure user authentication and profile management, building a dynamic
                  UI with sidebar navigation, search, and profile tabs, integrating REST APIs 
                  for user data, posts, and media handling, and creating a responsive interface 
                  for an improved user experience.  </p><br /><br />
                  <span> Tech Stack: React.js, Node.js, Express.js, MongoDB, JavaScript, CSS</span>
            </div>
            <div className="skill-card">
              <div className="skill-card__icon">DELIGHT </div>
              <h3 className="skill-card__category">E-commerce Web Application</h3>
              <p>Developed “DELIGHT,” a web-based ice cream selling application that serves as a 
                connecting platform between the company owner and customers. Designed the website 
                using HTML, CSS, and JavaScript, with MySQL integrated as the backend to manage content 
                and updates efficiently. <br /> <br />
                <span>Frontend:HTML,CSS,JavaScript. Backend/Database:MySQL</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────
//  APP — root component, handles page switching
// ─────────────────────────────────────────────────────
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showIntro, setShowIntro] = useState(false);

useEffect(() => {
  setTimeout(() => setShowIntro(true), 100); // ensures render first
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 3500);

  return () => clearTimeout(timer);
}, []);


  function navigateTo(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showIntro) {
  return (
    <div className="intro-screen">
      <div className="intro-content">
        <h1 className="intro-title">Welcome to Jibi’s Portfolio</h1>
        <p className="intro-subtitle">
          Explore my journey, skills, and creative work
        </p>
        <div className="intro-line"></div>

        <div className="intro-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="app-root">
      {currentPage === "home" && <HomePage onNavigate={navigateTo} />}
      {currentPage === "projects" && <ProjectsPage onNavigate={navigateTo} />}
    </div>
  );
}

export default App;