
// src/components/Services.jsx

import React, { useRef } from 'react'
import gsap from 'gsap'

export default function Services() {
  const containerRef = useRef()

  // High-tech hover physics
  const handleMouseEnter = (e, color) => {
    gsap.to(e.currentTarget, { 
      scale: 1.02, 
      borderColor: color, 
      boxShadow: `0 10px 30px ${color}33`, // Adds 20% opacity hex to the color for a soft glow
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

  // Expanded high-impact services
  const services = [
    {
      id: 'OP.01',
      title: 'Front-End Architecture',
      description: 'Engineering highly interactive, responsive, and performance-optimized user interfaces with React.js that engage users and drive seamless digital experiences.',
      icon: 'UI/UX', 
      accentColor: '#ff00cc', // Magenta
    },
    {
      id: 'OP.02',
      title: 'Secure API Development',
      description: 'Designing and deploying robust, RESTful APIs using Node.js and Express. Built to handle heavy data traffic securely and efficiently for complex applications.',
      icon: 'BACKEND',
      accentColor: '#00ffcc', // Teal
    },
    {
      id: 'OP.03',
      title: 'Database Engineering',
      description: 'Structuring scalable and high-performance NoSQL database architectures using MongoDB. Ensuring lightning-fast data retrieval, aggregation, and secure storage.',
      icon: 'DATA',
      accentColor: '#ffaa00', // Warning Orange
    },
    {
      id: 'OP.04',
      title: 'Identity & Access Management',
      description: 'Implementing military-grade user authentication and authorization protocols using JWT, OAuth, and Bcrypt to keep user data strictly confidential.',
      icon: 'AUTH',
      accentColor: '#b026ff', // Cyber Purple
    },
    {
      id: 'OP.05',
      title: 'System Deployment',
      description: 'Preparing codebases for production environments. Optimizing build processes, managing environment variables, and ensuring seamless deployment pipelines.',
      icon: 'DEPLOY',
      accentColor: '#00ff00', // Matrix Green
    }
  ]

  return (
    <section style={styles.section} id="services">
      <div ref={containerRef} style={styles.content}>
        
        <h2 style={styles.heading}>
          <span style={styles.highlight}>//</span> System Capabilities
        </h2>
        
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>
            Executing full-stack development protocols. From raw server-side logic and database architecture to highly polished client-facing interactive modules.
          </p>
        </div>

        {/* Services Grid */}
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{ ...styles.card, borderTop: `2px solid ${service.accentColor}` }}
              onMouseEnter={(e) => handleMouseEnter(e, service.accentColor)} 
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.cardHeader}>
                <span style={{ ...styles.modNumber, color: service.accentColor }}>[{service.id}]</span>
                <span style={{ ...styles.iconBadge, color: service.accentColor, borderColor: service.accentColor }}>
                  {service.icon}
                </span>
              </div>
              
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>

              <div style={styles.cardFooter}>
                <span style={{ ...styles.statusLine, color: service.accentColor }}>
                  &gt; STATUS: OPERATIONAL _
                </span>
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
    marginTop: '100px', 
    minHeight: '80vh', 
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
    color: '#ff00cc', 
    textShadow: '0 0 15px rgba(255, 0, 204, 0.6)',
    marginRight: '10px'
  },
  descriptionWrapper: {
    borderLeft: '3px solid #00ffcc', 
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#0a0a0a',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '2rem 1.5rem', 
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
  },
  modNumber: {
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    letterSpacing: '1px',
  },
  iconBadge: {
    fontFamily: 'monospace',
    fontSize: '0.7rem',
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid',
    letterSpacing: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '1rem',
  },
  cardText: {
    color: '#cccccc',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    fontWeight: '300',
    flexGrow: 1, 
    marginBottom: '2rem',
  },
  cardFooter: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1rem',
  },
  statusLine: {
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    opacity: 0.8,
  }

}