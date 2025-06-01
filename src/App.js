import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

// Projects data - easily modify this array to add/remove projects
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

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const navButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    color: '#64748b',
    padding: '0.5rem 1rem',
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  const projectCardStyle = {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '2px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const contactButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#1e293b',
    textDecoration: 'none',
    padding: '1rem 2rem',
    border: '1px solid #cbd5e1',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    backgroundColor: '#ffffff'
  };

  return (
    <div style={{ 
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      lineHeight: '1.7', 
      color: '#1e293b',
      backgroundColor: '#ffffff'
    }}>
      {/* Navigation */}
    <nav style={{
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid #e2e8f0',
  zIndex: 1000,
  padding: '1.5rem 0'
}}>
  <div style={{
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 3rem'
  }}>
    <h2 style={{ 
      margin: 0, 
      color: '#0f172a',
      fontSize: '1.5rem',
      fontWeight: '700',
      letterSpacing: '-0.025em'
    }}>
      KARTHIK ACHARYA
    </h2>
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {['home', 'about', 'projects', 'contact', 'uhv blog'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          style={navButtonStyle}
          onMouseOver={(e) => {
            e.target.style.color = '#0f172a';
            e.target.style.backgroundColor = '#f8fafc';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#64748b';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {section}
        </button>
      ))}
    </div>
  </div>
</nav>



      {/* Home Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: '0 3rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%)',
          backgroundSize: '50px 50px'
        }}></div>
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '4.5rem', 
            marginBottom: '1.5rem', 
            fontWeight: '300',
            color: '#0f172a',
            letterSpacing: '-0.05em',
            lineHeight: '1.1'
          }}>
            Hi, I'm <span style={{ fontWeight: '700' }}>Karthik</span>
          </h1>
          <div style={{
            width: '60px',
            height: '2px',
            backgroundColor: '#64748b',
            margin: '2rem auto',
          }}></div>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '3rem', 
            color: '#64748b',
            fontWeight: '400',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            Computer Science Engineering Student & Aspiring Developer
          </p>
          <button
            onClick={() => scrollToSection('about')}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '0.875rem',
              backgroundColor: 'transparent',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0f172a';
              e.target.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#0f172a';
            }}
          >
            Learn More About Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '8rem 3rem',
        maxWidth: '1400px',
        margin: '0 auto',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ 
              fontSize: '3rem', 
              marginBottom: '2rem', 
              color: '#0f172a',
              fontWeight: '300',
              letterSpacing: '-0.025em',
              lineHeight: '1.2'
            }}>
              About <span style={{ fontWeight: '700' }}>Me</span>
            </h2>
            <div style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#64748b',
              marginBottom: '2rem'
            }}></div>
          </div>
          <div style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#475569'
          }}>
            <p style={{ marginBottom: '2rem' }}>
              I'm a passionate Computer Science Engineering student with a strong interest in web development, 
              software engineering, and emerging technologies. Currently pursuing my degree, I spend my time 
              learning new programming languages, building projects, and solving complex problems.
            </p>
            <p style={{ marginBottom: '2rem' }}>
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
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '8rem 3rem',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              marginBottom: '2rem', 
              color: '#0f172a',
              fontWeight: '300',
              letterSpacing: '-0.025em'
            }}>
              Selected <span style={{ fontWeight: '700' }}>Projects</span>
            </h2>
            <div style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#64748b',
              margin: '0 auto'
            }}></div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                style={{
                  ...projectCardStyle,
                  transform: 'translateY(0)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#0f172a'
                }}></div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <ExternalLink size={18} color="#94a3b8" />
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1.5rem', 
                  color: '#0f172a',
                  fontWeight: '600',
                  letterSpacing: '-0.025em'
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: '#64748b', 
                  marginBottom: '2rem', 
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0f172a',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #cbd5e1',
                    paddingBottom: '2px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderBottomColor = '#0f172a';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderBottomColor = '#cbd5e1';
                  }}
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="uhv blog" style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto' }}>
  <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
    The Holistic Perception of Harmony in Existence<br />
    <small style={{ fontSize: '1rem', color: '#555' }}>
      (As Defined in Universal Human Values)
    </small>
  </h1>
  <hr style={{ margin: '20px 0' }} />

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
  <p>It presents a contrast to materialistic worldviews focused on consumption, individualism, and competition, encouraging instead a life of balance, reflection, and mutual well-being.</p>

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
</section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '8rem 3rem',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ 
                fontSize: '3rem', 
                marginBottom: '2rem',
                color: '#0f172a',
                fontWeight: '300',
                letterSpacing: '-0.025em',
                lineHeight: '1.2'
              }}>
                Get In <span style={{ fontWeight: '700' }}>Touch</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: '#64748b',
                marginBottom: '2rem'
              }}></div>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#64748b',
                lineHeight: '1.7'
              }}>
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <a
                href="mailto:akarthikaushi@gmail.com"
                style={contactButtonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#0f172a';
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = '#0f172a';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#1e293b';
                  e.target.style.borderColor = '#cbd5e1';
                }}
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-acharya-842153293/"
                target="_blank"
                rel="noopener noreferrer"
                style={contactButtonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#0f172a';
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = '#0f172a';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#1e293b';
                  e.target.style.borderColor = '#cbd5e1';
                }}
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/karthik71005"
                target="_blank"
                rel="noopener noreferrer"
                style={contactButtonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#0f172a';
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = '#0f172a';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#1e293b';
                  e.target.style.borderColor = '#cbd5e1';
                }}
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem',
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        textAlign: 'center',
        borderTop: '1px solid #1e293b'
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '0.875rem',
          fontWeight: '400',
          letterSpacing: '0.5px'
        }}>
          © 2025 KARTHIK — BUILT WITH REACT
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;