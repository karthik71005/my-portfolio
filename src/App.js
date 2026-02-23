import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import './App.css';

// Projects data
const projectsData = [
  {
    id: 1,
    title: "AgentHire-X – Multi-Agent Recruitment Intelligence System",
    description: "A hierarchical Planner–Executor–Reflector AI system built with LangChain and FAISS. Implements tool-based execution, RAG-powered semantic retrieval, and live observability dashboard for autonomous decision workflows.",
    link: "https://github.com/karthik71005/agentic-hiring-system-AgentHire-X"
  },
  {
    id: 2,
    title: "DetectX – Diabetes Prediction System",
    description: "A machine learning-based healthcare system for early diabetes detection. Includes data preprocessing, model training, evaluation, and performance analysis using structured medical datasets.",
    link: "https://github.com/GDG-PIRATES"
  },
  {
    id: 3,
    title: "Full-Stack E-Commerce Platform",
    description: "Production-grade e-commerce system built with FastAPI, MongoDB, and React. Implements JWT auth, RBAC, Stripe payments, Cloudinary uploads, async service architecture, Redux state management, and complete admin/user workflows.",
    link: "https://github.com/karthik71005/E-commerce-website"
  },
];


// Reusable component for scroll animations
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [typedName, setTypedName] = useState('');
  const fullName = "Karthik";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Typing speed

    return () => clearInterval(interval);
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">KARTHIK ACHARYA</a>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'about', 'projects', 'contact','experience'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-button"
              >
                {section}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Hi, I'm <span>{typedName}</span><span className="typing-cursor"></span>
          </h1>
          <div className="divider"></div>
          <p className="hero-subtitle">
            Computer Science Engineering Student & Aspiring Developer
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="cta-button"
          >
            Learn More About Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <RevealOnScroll>
          <div className="about-grid">
            <div className="section-header align-left">
              <h2 className="section-title">
                About <span>Me</span>
              </h2>
              <div className="divider align-left"></div>
            </div>
            <div className="about-text">
              <p>
                I'm a Computer Science Engineering student focused on building AI-driven systems and scalable backend architectures.
                My core interest lies in agentic workflows, automation platforms, and designing systems that solve real-world operational problems.
              </p>

              <p>
                I work with LLM-based pipelines, async APIs, and cloud databases to build production-ready applications.
                I enjoy designing clean architectures, implementing secure authentication systems, and optimizing workflow orchestration.
              </p>

              <p>
                Beyond development, I’m deeply interested in system design, distributed systems, and turning complex processes
                into intelligent, reliable automation solutions.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="experience" className="section">
        <RevealOnScroll>
          <div className="about-grid">
            <div className="section-header align-left">
              <h2 className="section-title">
                Experience <span></span>
              </h2>
              <div className="divider align-left"></div>
            </div>
            <div className="about-text">
              <h3>AI Systems Engineer – 23ML Tech Pvt. Ltd.</h3>
              <p className="duration">Oct 2025 – Present · Remote</p>
              <p>
                Designed and deployed scalable backend systems and automation workflows.
                Built production-grade APIs, implemented role-based access control,
                webhook processing, and real-time order lifecycle management.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>


      {/* Projects Section */}
      <section id="projects" className="section projects-bg">
        <RevealOnScroll>
          <div className="section-header">
            <h2 className="section-title">
              Selected <span>Projects</span>
            </h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-top-bar"></div>
                <div className="project-header">
                  <span className="project-label">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <ExternalLink size={20} className="text-secondary" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <RevealOnScroll>
          <div className="contact-grid">
            <div>
              <div className="section-header contact-header">
                <h2 className="section-title">
                  Get In <span>Touch</span>
                </h2>
                <div className="divider align-left"></div>
              </div>
              <p className="contact-desc">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>
            <div className="contact-links">
              <a
                href="mailto:akarthikaushi@gmail.com"
                className="contact-btn"
              >
                <Mail size={24} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-acharya-842153293/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a
                href="https://github.com/karthik71005"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <Github size={24} />
                GitHub
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2025 KARTHIK — BUILT WITH REACT
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;