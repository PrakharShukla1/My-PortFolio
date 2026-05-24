// src/App.jsx

import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

// 📦 Import your beautifully organized components
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

// 🌌 Component: Mouse-Reactive Starfield
function SurfingStars() {
  const starsRef = useRef()

  useFrame((state, delta) => {
    // Constant rotation for dynamism
    starsRef.current.rotation.y += delta * 0.05
    starsRef.current.rotation.x += delta * 0.02
    
    // Mouse Parallax (Leans with your mouse movement)
    const { x, y } = state.mouse
    starsRef.current.position.x = THREE.MathUtils.lerp(starsRef.current.position.x, x * 1.5, 0.05)
    starsRef.current.position.y = THREE.MathUtils.lerp(starsRef.current.position.y, y * 1.5, 0.05)
  })

  // Drei's built-in Stars component
  return <Stars ref={starsRef} radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
}

// 💠 Component: Fixed & Highly Detailed Extraordinary Geometries (The Holographic Flow)
function ExtraordinaryGeometries() {
  const { viewport } = useThree()
  
  // Reusable glowing cyberpunk material based on your reference image
  // We make it slightly emissive so it looks self-illuminated
  const tealTechMaterial = new THREE.MeshStandardMaterial({
    color: '#00ffcc', // Teal/Cyan from your ref
    emissive: '#00ccaa', // Deeper color for the glow
    emissiveIntensity: 0.8,
    wireframe: true, // This is the key change!
    wireframeLinewidth: 2,
    transparent: true,
    opacity: 0.8,
  })

  const magentaTechMaterial = new THREE.MeshStandardMaterial({
    color: '#ff00cc', // Magenta from your ref
    emissive: '#cc00aa',
    emissiveIntensity: 1,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    opacity: 0.8,
  })

  // Simple nested element material (like the octahedron in your ref)
  const nestedMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    emissive: '#ffffff',
    emissiveIntensity: 0.5,
    wireframe: true,
  })

  return (
    <>
      {/* Page 1: Hero (Top Right) - Detailed Nested Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
        {/* We place it where the previous green blob was */}
        <group position={[viewport.width / 3.5, 1, -3]} scale={1.5}>
          {/* Main Outer Structure: A highly subdivided Icosahedron for that technical complexity */}
          <mesh>
            <icosahedronGeometry args={[1, 3]} /> {/* Subdivisions=3 makes it complex */}
            <primitive object={tealTechMaterial} attach="material" />
          </mesh>
          
          {/* Nested Inner Structure: Simple Octahedron (like your reference image) */}
          <mesh scale={0.6}>
            <octahedronGeometry args={[1, 0]} />
            <primitive object={nestedMaterial} attach="material" />
          </mesh>
        </group>
      </Float>

      {/* Page 2: About (Middle Left, Pushed Down) - Glowing Torus Knot */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        {/* Pushed down exactly 1 screen unit relative to Hero */}
        <group position={[-viewport.width / 3.5, -viewport.height, -4]} scale={2}>
           {/* Detailed Torus Knot */}
           <mesh>
             <torusKnotGeometry args={[0.8, 0.2, 128, 16]} />
             <primitive object={magentaTechMaterial} attach="material" />
           </mesh>
           
           {/* Nested element inside the knot hole */}
           <mesh position={[0,0,0]} scale={0.2}>
              <sphereGeometry args={[1]} />
              <primitive object={nestedMaterial} attach="material" />
           </mesh>
        </group>
      </Float>

      {/* Page 3: Projects (Bottom Right, Pushed Down Further) - Intricate Torus Network */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Pushed down exactly 2 screen units */}
        <group position={[viewport.width / 3.5, -viewport.height * 2, -5]} scale={2}>
          <mesh>
            <torusGeometry args={[1, 0.1, 16, 50]} />
            <primitive object={tealTechMaterial} attach="material" />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.1, 16, 50]} />
            <primitive object={tealTechMaterial} attach="material" />
          </mesh>
        </group>
      </Float>
    </>
  )
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        
        {/* Balanced lighting so the wireframes shine but don't look basic */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        {/* Added a back-point light with a complementary color for depth */}
        <pointLight position={[-10, -10, -10]} intensity={3} color="#00ffcc" />

        {/* FIX: Increased pages to 6 to account for the extra height Projects/Services take up */}
        <ScrollControls pages={7} damping={0.1}>
          
          {/* Background Starfield */}
          <SurfingStars />

          {/* CRITICAL FIX: Shapes are wrapped in <Scroll> so they move exactly with the page */}
          <Scroll>
            <ExtraordinaryGeometries />
          </Scroll>

          {/* HTML Overlay: Imports and maps your actual components */}
          <Scroll html style={{ width: '100%' }}>
            {/* FIX: Changed height to minHeight so overflowing content pushes the next section down instead of colliding! */}
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Hero />
            </div>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <AboutSkills />
            </div>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Projects />
            </div>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Services />
            </div>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Contact />
            </div>
          </Scroll>

        </ScrollControls>
      </Canvas>
    </div>
  )
}