import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'
import Navbar from './Navbar'

const Hero = ({ pageId, pageData, onPageChange }) => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    if (!pageData.revealBg) return

    const hero = heroRef.current
    const reveal = revealRef.current
    if (!hero || !reveal) return

    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let visible = false

    const animate = () => {
      x += (mouseX - x) * 0.10
      y += (mouseY - y) * 0.10

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)

    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
    }
  }, [pageData])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } },
  }

  const navbarVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
  }

  const isNamiPage = pageData.logo.includes('NAMI')

 return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="hero"
    ref={heroRef}
  >
    <div 
      className="hero-bg"
      style={{ backgroundImage: `url(${pageData.heroBg})` }}
    />
    <motion.div
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
    >
      <Navbar
        logo={pageData.logo}
        onSwitch={() => onPageChange(pageData.nextPage)}
        onHome={() => onPageChange('home')}
      />
    </motion.div>

    <motion.div
      className="hero-content"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={`left ${pageId}-left`} variants={item}>
        <h1 className="st-title">{pageData.leftTitle}</h1>

        <motion.p className="st-desc" variants={item}>
          {pageData.leftDesc}
        </motion.p>
      </motion.div>

      <motion.div className="button-column" variants={item}>
        <motion.button
          className="st-btn"
          onClick={() => onPageChange(pageData.nextPage)}
        >
          {pageData.leftBtn}
        </motion.button>
      </motion.div>

     
    </motion.div>

    {pageData.revealBg && (
      <div
        className="fire-reveal"
        ref={revealRef}
      >
        <div 
          className="fire-reveal-bg"
          style={{ backgroundImage: `url(${pageData.revealBg})` }}
        />
        <div className={pageData.rightTitle === 'VINSMOKE SANJI' ? "reveal-left" : "reveal-right"}>
          <h1>{pageData.rightTitle}</h1>
          <p>{pageData.rightDesc}</p>
        </div>
      </div>
    )}
  </motion.div>
);
}

export default Hero 