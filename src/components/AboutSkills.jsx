// src/components/AboutSkills.jsx

import React, { useRef } from 'react'
import gsap from 'gsap'

export default function AboutSkills() {
  const containerRef = useRef()

  // High-end GSAP hover effects for the new System Panels
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { 
      y: -10, 
      borderColor: 'rgba(0, 255, 204, 0.8)', // Glowing teal border on hover
      boxShadow: '0 15px 30px rgba(0, 255, 204, 0.15)',
      duration: 0.4, 
      ease: 'power3.out' 
    })
  }
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { 
      y: 0, 
      borderColor: 'rgba(255, 255, 255, 0.05)', 
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
      duration: 0.4, 
      ease: 'power3.out' 
    })
  }

  return (
    <section style={styles.section}>
      <div ref={containerRef} style={styles.content}>
        
        <h2 style={styles.heading}>
          <span style={styles.highlight}>//</span> The Arsenal
        </h2>
        
        {/* FIXED: Much punchier, brighter description with a techy left-border */}
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>
            I don't just build websites; I engineer full-stack applications. From secure database architectures to fluid, state-driven user interfaces, here is the tech stack I use to bring complex ideas to life.
          </p>
        </div>

        {/* Upgraded Cyberpunk System Panels Grid */}
        <div style={styles.grid}>
          
          {/* Panel 1 */}
          <div style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={styles.cardHeader}>
              <span style={styles.modNumber}>[MOD.01]</span>
              <h3 style={styles.cardTitle}>Frontend Engineering</h3>
            </div>
            <p style={styles.cardText}>
              Building complex, stateful, and responsive UIs that feel alive.
            </p>
            <p style={styles.techStack}>
              React.js • React Router • Redux • GSAP • Three.js • Tailwind CSS
            </p>
          </div>

          {/* Panel 2 */}
          <div style={{...styles.card, borderTop: '2px solid #ff00cc'}} onMouseEnter={(e) => {
             gsap.to(e.currentTarget, { y: -10, borderColor: 'rgba(255, 0, 204, 0.8)', boxShadow: '0 15px 30px rgba(255, 0, 204, 0.15)', duration: 0.4 })
          }} onMouseLeave={(e) => {
             gsap.to(e.currentTarget, { y: 0, borderColor: 'rgba(255, 255, 255, 0.05)', boxShadow: 'none', duration: 0.4 })
          }}>
            <div style={styles.cardHeader}>
              <span style={{...styles.modNumber, color: '#ff00cc'}}>[MOD.02]</span>
              <h3 style={styles.cardTitle}>Backend & APIs</h3>
            </div>
            <p style={styles.cardText}>
              Architecting the logic, routing, and secure data handling behind the scenes.
            </p>
            <p style={{...styles.techStack, color: '#ff00cc'}}>
              Node.js • Express.js • RESTful APIs • JWT Auth • Server Logic
            </p>
          </div>

          {/* Panel 3 */}
          <div style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={styles.cardHeader}>
              <span style={styles.modNumber}>[MOD.03]</span>
              <h3 style={styles.cardTitle}>Database Architecture</h3>
            </div>
            <p style={styles.cardText}>
              Designing scalable schemas and writing lightning-fast aggregation pipelines.
            </p>
            <p style={styles.techStack}>
              MongoDB • Mongoose • NoSQL Modeling • Cloud DBs
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

// 🎨 Inline Styles
const styles = {
  section: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10%',
    pointerEvents: 'none', 
  },
  content: {
    maxWidth: '1100px',
    zIndex: 10,
    pointerEvents: 'auto', 
    marginTop: '5vh', 
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
  // New wrapper for the punchier description
  descriptionWrapper: {
    borderLeft: '3px solid #00ffcc', // Cyberpunk neon accent line
    paddingLeft: '1.5rem',
    marginBottom: '3.5rem',
    maxWidth: '800px',
  },
  description: {
    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', // Made it slightly larger
    color: '#e0e0e0', // Brighter white/grey instead of dull dark grey
    lineHeight: '1.6',
    fontWeight: '400', // Upped the weight so it reads better
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    background: '#0a0a0a', // Solid dark tech background instead of soft glass
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderTop: '2px solid #00ffcc', // Hard neon top border
    padding: '2rem',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    marginBottom: '1rem',
  },
  modNumber: {
    fontFamily: 'monospace',
    color: '#00ffcc',
    fontSize: '0.85rem',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    display: 'block',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  cardText: {
    color: '#cccccc',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: '300',
    marginBottom: '2rem',
  },
  techStack: {
    fontFamily: 'monospace',
    color: '#00ffcc',
    fontSize: '0.85rem',
    lineHeight: '1.5',
    paddingTop: '1rem',
    borderTop: '1px dashed rgba(255, 255, 255, 0.1)', // Technical divider
  }
}