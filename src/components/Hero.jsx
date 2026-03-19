// src/components/Hero.jsx

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const text1Ref = useRef()
  const text2Ref = useRef()
  const text3Ref = useRef()
  const text4Ref = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.fromTo(text1Ref.current, 
        { y: 50, opacity: 0, filter: 'blur(10px)' }, 
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, delay: 0.5 }
      )
      .fromTo(text2Ref.current, 
        { y: 50, opacity: 0, filter: 'blur(10px)' }, 
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 }, 
        "-=0.9"
      )
      .fromTo(text3Ref.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.9"
      )
      .fromTo(text4Ref.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.8"
      )
  }, [])

  return (
    <section style={styles.section}>
      <div style={styles.content}>
        
        <p ref={text1Ref} style={styles.greeting}>
          SYSTEM ONLINE // FULL-STACK ENGINEER
        </p>
        
        <h1 ref={text2Ref} style={styles.name}>
          I'm <span style={styles.highlight}>Prakhar Shukla</span>.
        </h1>
        
        <p ref={text3Ref} style={styles.tagline}>
          A creative MERN stack developer blurring the line between robust engineering and immersive UI. 
        </p>

      <p ref={text4Ref}>
  I architect secure APIs, authentication systems, and scalable backend logic with Node.js, Express, and MongoDB, while crafting highly interactive front-end experiences using React.
</p>

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
    maxWidth: '850px',
    zIndex: 10,
    pointerEvents: 'auto', 
  },
  greeting: {
    fontFamily: 'monospace',
    color: '#00ffcc', 
    letterSpacing: '0.2em',
    marginBottom: '1rem',
    fontSize: '1rem',
    textShadow: '0 0 10px rgba(0, 255, 204, 0.5)', 
  },
  name: {
    fontSize: 'clamp(3rem, 7vw, 7rem)', 
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 1.5rem 0',
    color: '#ffffff',
  },
  highlight: {
    color: 'transparent',
    WebkitTextStroke: '2px #00ffcc', 
    textShadow: '0 0 30px rgba(0, 255, 204, 0.4)',
  },
  tagline: {
    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
    color: '#ffffff',
    maxWidth: '700px',
    lineHeight: '1.4',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  subtext: {
    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
    color: '#aaaaaa',
    maxWidth: '650px',
    lineHeight: '1.6',
    fontWeight: '300',
  }
}