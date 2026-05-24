// src/components/Projects.jsx

import React, { useRef } from 'react'
import gsap from 'gsap'

export default function Projects() {
  const containerRef = useRef()

  // High-tech hover physics
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1.02, 
      borderColor: 'rgba(0, 255, 204, 0.8)', 
      boxShadow: '0 10px 30px rgba(0, 255, 204, 0.15)',
      duration: 0.4, 
      ease: 'power3.out' 
    })
  }
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1, 
      borderColor: 'rgba(255, 255, 255, 0.05)', 
      boxShadow: 'none',
      duration: 0.4, 
      ease: 'power3.out' 
    })
  }

  // Your project data: Easy to update later!
  const projects = [
  {
    id: 'SYS.01',
    title: 'YoursPhysio',
    subtitle: 'Professional Physiotherapy & Healthcare Platform',
    description:
      'A modern healthcare and physiotherapy platform designed for patient engagement, appointment booking, treatment information, and professional healthcare services with a clean responsive UI.',
    stack: 'React.js • Node.js • Tailwind CSS • MongoDB',
    status: 'LIVE NOW',
    accentColor: '#00ffcc',
    link: 'https://www.yoursphysio.in',
  },

  {
    id: 'SYS.02',
    title: 'Chat-App',
    subtitle: 'Real-Time Messaging & Video Calling Platform',
    description:
      'A full-stack real-time chat application featuring instant messaging, group chats, image sharing, seen status, message editing/deletion, authentication, and WebRTC-based video & voice calling.',
    stack: 'MERN Stack • Socket.IO • WebRTC • Cloudinary',
    status: 'LIVE NOW',
    accentColor: '#ff00cc',
    link: 'https://chatapp-frontend-ten-sepia.vercel.app/',
  },

  {
    id: 'SYS.03',
    title: 'EventFlow',
    subtitle: 'Smart Event Management System',
    description:
      'A complete event management platform for discovering, organizing, and managing events with user authentication, booking workflows, responsive dashboards, and seamless event coordination.',
    stack: 'MongoDB • Express • React • Node.js',
    status: 'LIVE NOW',
    accentColor: '#00ffcc',
    link: 'https://eventflow-frontend-sooty.vercel.app/',
  }
];
  return (
    <section style={styles.section}>
      <div ref={containerRef} style={styles.content}>
        
        <h2 style={styles.heading}>
          <span style={styles.highlight}>//</span> Active Directives
        </h2>
        
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>
            Currently architecting and deploying industry-specific platforms. Here is a live look at the systems currently compiling in my local environment.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{ ...styles.card, borderTop: `2px solid ${project.accentColor}` }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.cardHeader}>
                <div style={styles.topRow}>
                  <span style={{ ...styles.modNumber, color: project.accentColor }}>[{project.id}]</span>
                  {/* Glowing Development Badge */}
                  <span style={styles.statusBadge}>{project.status}</span>
                </div>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardSubtitle}>{project.subtitle}</p>
              </div>
              
              <div style={styles.cardBody}>
                {/* Placeholder for future image/graphic */}
               
                <p style={styles.cardText}>{project.description}</p>
              </div>

            <div style={styles.cardFooter}>
  <p style={{ ...styles.techStack, color: project.accentColor }}>
    {project.stack}
  </p>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      ...styles.actionBtn,
      borderColor: project.accentColor,
      color: project.accentColor,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    VIEW PROJECT ↗
  </a>
</div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

// 🎨 Inline Styles
const styles = {
  section: {
    marginTop: '100px', // ADDED: Provides the gap from the skills section
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10vh 10%', 
    pointerEvents: 'none', 
  },
  content: {
    maxWidth: '1200px',
    width: '100%',
    zIndex: 10,
    pointerEvents: 'auto', 
  },
  heading: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  highlight: {
    color: '#00ffcc', 
    textShadow: '0 0 15px rgba(0, 255, 204, 0.6)',
    marginRight: '10px'
  },
  descriptionWrapper: {
    borderLeft: '3px solid #ff00cc', 
    paddingLeft: '1.5rem',
    marginBottom: '3.5rem',
    maxWidth: '800px',
  },
  description: {
    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
    color: '#e0e0e0',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#0a0a0a',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    marginBottom: '1rem',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.8rem',
  },
  modNumber: {
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    letterSpacing: '1px',
  },
  statusBadge: {
    fontFamily: 'monospace',
    fontSize: '0.7rem',
    backgroundColor: 'rgba(255, 170, 0, 0.1)',
    color: '#ffaa00',
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid #ffaa00',
    letterSpacing: '1px',
    animation: 'pulse 2s infinite', 
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '0.2rem',
  },
  cardSubtitle: {
    color: '#aaaaaa',
    fontSize: '0.9rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  cardBody: {
    marginBottom: '1.5rem',
  },
  imagePlaceholder: {
    width: '100%',
    height: '140px',
    backgroundColor: '#111111',
    border: '1px dashed rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  placeholderText: {
    fontFamily: 'monospace',
    color: '#444444',
    fontSize: '0.8rem',
    letterSpacing: '2px',
  },
  cardText: {
    color: '#cccccc',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    fontWeight: '300',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1rem',
  },
  techStack: {
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    lineHeight: '1.5',
  },
  actionBtn: {
    background: 'transparent',
    border: '1px solid',
    padding: '0.6rem',
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    cursor: 'pointer', 
    textAlign: 'center',
    opacity: 0.7,
  }
}