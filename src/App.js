import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import './App.css';

// Projects data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js featuring user authentication and payment integration.",
    link: "https://github.com/karthik/ecommerce-project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality using React and local storage.",
    link: "https://github.com/karthik/task-manager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts using OpenWeatherMap API with beautiful UI.",
    link: "https://github.com/karthik/weather-dashboard"
  }
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
            {['home', 'about', 'projects', 'contact', 'uhv blog'].map((section) => (
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
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }}>
              <h2 className="section-title">
                About <span>Me</span>
              </h2>
              <div className="divider" style={{ margin: '0' }}></div>
            </div>
            <div className="about-text">
              <p>
                I'm a passionate Computer Science Engineering student with a strong interest in web development,
                software engineering, and emerging technologies. Currently pursuing my degree, I spend my time
                learning new programming languages, building projects, and solving complex problems.
              </p>
              <p>
                My journey in technology started with curiosity about how websites and applications work, which
                led me to explore frontend and backend development. I enjoy creating user-friendly applications
                that solve real-world problems and am always eager to learn new technologies and frameworks.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source
                projects, or working on personal projects that challenge my skills and creativity.
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

      {/* UHV Blog Section */}
      <section id="uhv blog" className="section blog-section">
        <RevealOnScroll>
          <div className="blog-content">
            <h1 className="blog-title">
              The Holistic Perception of Harmony in Existence
              <span className="blog-meta">(As Defined in Universal Human Values)</span>
            </h1>
            <div className="divider" style={{ margin: '20px 0' }}></div>

            <h2>1. Introduction</h2>
            <p>
              Harmony in existence refers to the balanced, interconnected, and peaceful co-existence of all elements of nature—including individuals, society, and the natural environment. It stands as a foundational concept in Universal Human Values (UHV) and is essential for living a meaningful, purposeful, and fulfilling life.
            </p>

            <h2>2. Understanding Holistic Perception</h2>
            <p>Holistic perception involves seeing reality as a unified whole rather than fragmented components. This approach emphasizes:</p>
            <ul>
              <li>Interconnectedness of All Entities</li>
              <li>The Value of Relationships Over Isolation</li>
              <li>Alignment Between Human Life and Natural Order</li>
            </ul>
            <p>It presents a contrast to materialistic worldviews focused on consumption, individualism, and competition, encouraging instead a life of balance, reflection, and mutual well-being.
            </p>

            <h2>3. Harmony at Different Levels</h2>
            <h3>a. Personal Level</h3>
            <ul>
              <li>Achieving inner peace, mental clarity, and self-awareness</li>
              <li>Maintaining a balance between personal needs and responsibilities</li>
              <li>Living with purpose and autonomy, guided by personal values</li>
            </ul>

            <h3>b. Family and Society Level</h3>
            <ul>
              <li>Cultivating mutual respect, love, and trust within relationships</li>
              <li>Encouraging social justice, cooperation, and inclusivity</li>
              <li>Supporting sustainable and ethical social practices</li>
            </ul>

            <h3>c. Nature and Life Level</h3>
            <ul>
              <li>Living in sync with natural cycles and rhythms</li>
              <li>Utilizing resources in a responsible and sustainable manner</li>
              <li>Recognizing and respecting the inherent order and interdependence in nature</li>
            </ul>

            <h2>4. Core Universal Human Values</h2>
            <p>The following values form the ethical foundation for harmonious living:</p>
            <ul>
              <li><strong>Truth</strong> – Understanding and accepting reality as it is</li>
              <li><strong>Love</strong> – Unconditional affection and goodwill toward all beings</li>
              <li><strong>Peace</strong> – Inner harmony and external stability</li>
              <li><strong>Non-Violence</strong> – Upholding dignity and avoiding harm to others</li>
              <li><strong>Righteousness</strong> – Acting ethically and with integrity</li>
            </ul>

            <h2>5. Benefits of Harmonious Living</h2>
            <ul>
              <li>Reduces Inner Conflicts – Fosters mental peace and clarity</li>
              <li>Strengthens Community Bonds – Builds compassionate and connected societies</li>
              <li>Ensures Ecological Stability – Promotes sustainability and environmental health</li>
              <li>Cultivates True Happiness – Leads to a fulfilling and joyful life</li>
            </ul>

            <h2>6. Conclusion</h2>
            <p>
              To truly understand and live in harmony requires a shift from a fragmented, ego-driven lifestyle to one that is integrated, value-oriented, and conscious. Embracing Universal Human Values allows individuals and communities to thrive in a world where wellness is collective, and prosperity is shared.
            </p>

            <div style={{ marginTop: '40px', fontWeight: 'bold' }}>
              Authors: Abhishek H, Samarth Kini, Aadithya Nayak V, M Rohith, Karthik Acharya
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <RevealOnScroll>
          <div className="contact-grid">
            <div>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <h2 className="section-title">
                  Get In <span>Touch</span>
                </h2>
                <div className="divider" style={{ margin: '0' }}></div>
              </div>
              <p className="contact-text" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
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