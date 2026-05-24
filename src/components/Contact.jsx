// src/components/Contact.jsx

import React, { useRef } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const containerRef = useRef()

  const handleMouseEnter = (e, color) => {
    gsap.to(e.currentTarget, {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      x: 10,
      borderColor: color,
      duration: 0.3
    })

    gsap.to(e.currentTarget.querySelector('.arrow'), {
      x: 5,
      color: color,
      opacity: 1,
      duration: 0.3
    })
  }

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: 'transparent',
      x: 0,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      duration: 0.3
    })

    gsap.to(e.currentTarget.querySelector('.arrow'), {
      x: 0,
      opacity: 0.3,
      color: '#fff',
      duration: 0.3
    })
  }

  const channels = [
    {
      id: '01',
      type: 'EMAIL',
      val: 'prakharshuklam30s@gmail.com',
      link: 'mailto:prakharshuklam30s@gmail.com',
      color: '#00ffcc'
    },
    {
      id: '02',
      type: 'GITHUB',
      val: 'github.com/PrakharShukla1',
      link: 'https://github.com/PrakharShukla1',
      color: '#ff00cc'
    },
    {
      id: '03',
      type: 'LINKEDIN',
      val: 'linkedin.com/in/prakhar-shukla',
      link: 'https://www.linkedin.com/in/prakhar-shukla-4416732b1/',
      color: '#b026ff'
    }
  ]

  return (
    <section style={styles.section} id="contact">
      <div ref={containerRef} style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.titleRow}>
            <span style={styles.index}>[ 04 ]</span>
            <h2 style={styles.title}>CONTACT</h2>
          </div>

          <div style={styles.statusBox}>
            <div className="pulsing-dot" style={styles.dot}></div>
            <p style={styles.statusText}>
              AVAILABLE FOR INTERNSHIPS & FULL-STACK ROLES
            </p>
          </div>
        </div>

        {/* Links */}
        <div style={styles.list}>
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.row}
              onMouseEnter={(e) => handleMouseEnter(e, ch.color)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.rowLeft}>
                <span style={{ ...styles.rowId, color: ch.color }}>
                  {ch.id}
                </span>

                <div style={styles.rowInfo}>
                  <span style={styles.rowLabel}>{ch.type}</span>
                  <span style={styles.rowValue}>{ch.val}</span>
                </div>
              </div>

              <span className="arrow" style={styles.arrow}>→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footerBuffer}>
          <div style={styles.footerLine}></div>

          <div style={styles.footerContent}>
            <p style={styles.footerText}>
              © {new Date().getFullYear()} PRAKHAR SHUKLA
            </p>

            <p style={styles.footerText}>
              TERMINAL_STABLE_V3
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#030303',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 10%',
    boxSizing: 'border-box',
    pointerEvents: 'none',
  },

  container: {
    width: '100%',
    maxWidth: '850px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    zIndex: 10,
    pointerEvents: 'auto',
  },

  header: {
    marginBottom: '20px',
  },

  titleRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '20px',
  },

  index: {
    fontFamily: 'monospace',
    color: '#444',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '900',
    color: '#fff',
    margin: 0,
    letterSpacing: '-2px',
  },

  statusBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '10px',
  },

  dot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#00ffcc',
    borderRadius: '50%',
    boxShadow: '0 0 10px #00ffcc',
  },

  statusText: {
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    color: '#888',
    letterSpacing: '1px',
    margin: 0,
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
  },

  rowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },

  rowId: {
    fontFamily: 'monospace',
    fontSize: '1rem',
    fontWeight: 'bold',
  },

  rowInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  rowLabel: {
    fontSize: '0.7rem',
    color: '#555',
    letterSpacing: '3px',
    fontFamily: 'monospace',
    marginBottom: '4px',
  },

  rowValue: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    fontWeight: '600',
  },

  arrow: {
    fontSize: '1.8rem',
    opacity: 0.3,
  },

  footerBuffer: {
    marginTop: '40px',
    paddingBottom: '80px',
  },

  footerLine: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: '20px',
  },

  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  footerText: {
    fontFamily: 'monospace',
    fontSize: '0.7rem',
    color: '#222',
    margin: 0,
    letterSpacing: '1px',
  }
}