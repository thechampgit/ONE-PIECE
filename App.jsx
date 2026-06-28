
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Hero from './components/Hero'

const PAGES = {
  home: {
    heroBg: '/images/home-bg.jpg',
    revealBg: null,
    logo: 'ONE PIECE',
    leftTitle: <>STRAW HAT<br />PIRATES</>,
    leftDesc: 'The Straw Hat Pirates are a legendary and powerful pirate crew originating from the East Blue, led by Monkey D. Luffy. Bonded by unbreakable friendship and courage, they sail together in pursuit of their ultimate dreams.',
    leftBtn: 'WELCOME TO THE GRAND LINE',
    nextPage: 'luffy'
  },
  luffy: {
    heroBg: '/images/luffy-smiling.jpg',
    revealBg: '/images/zoro-reveal.jpg',
    logo: 'ONE PIECE',
    leftTitle: <>MONKEY D.<br />LUFFY</>,
    leftDesc: 'Monkey D. Luffy is an energetic, fearless, and kind-hearted boy who dreams of becoming the King of the Pirates. Inspired by the pirate Shanks, he never backs down from danger and valued friendship, courage, and freedom above everything else.',
    leftBtn: 'ENTER THE EAST BLUE',
    rightTitle: 'RORONOA ZORO',
    rightDesc: "Roronoa Zoro is a formidable swordsman and the first member to join the Straw Hat Pirates. Master of the unique Three Sword Style, his dream is to defeat Dracule Mihawk and become the World's Strongest Swordsman, displaying fierce loyalty and unbreakable discipline.",
    nextPage: 'nami'
  },
  nami: {
    heroBg: '/images/nami-bg.jpg',
    revealBg: '/images/sanji-reveal.jpg',
    logo: 'ONE PIECE',
    leftTitle: <>CAT BURGLAR<br />NAMI</>,
    leftDesc: 'Nami is the highly skilled navigator of the Straw Hat Pirates. She is an exceptionally talented cartographer who dreams of drawing a complete map of the entire world, utilizing her meteorological knowledge and wind-sensing abilities.',
    leftBtn: 'AIM FOR SNIPER ISLAND',
    rightTitle: 'VINSMOKE SANJI',
    rightDesc: "Sanji is the passionate cook of the Straw Hat Pirates, a master of the Black Leg Style, and a prince of the Germa Kingdom. He dreams of finding the All Blue, a legendary chef's paradise where all the seas of the world meet.",
    nextPage: 'usopp'
  },
  usopp: {
    heroBg: '/images/usopp-bg.jpg',
    revealBg: '/images/chopper-reveal.jpg',
    logo: 'ONE PIECE',
    leftTitle: <>GOD<br />USOPP</>,
    leftDesc: 'Usopp is the sniper of the Straw Hat Pirates. Known for his tall tales and cowardly tendencies, he strives to become a brave warrior of the sea. Despite his fears, his ingenuity, sharp-shooting skills, and heart shine in times of need.',
    leftBtn: 'RETURN BACK',
    rightTitle: 'TONY TONY CHOPPER',
    rightDesc: "Tony Tony Chopper is the adorable and brilliant doctor of the Straw Hat Pirates. A reindeer who ate the Human-Human Fruit, he can transform into various forms and dreams of curing every disease in the world.",
    nextPage: 'home'
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <AnimatePresence mode="wait">
      <Hero 
        key={currentPage}
        pageId={currentPage}
        pageData={PAGES[currentPage]} 
        onPageChange={handlePageChange} 
      />
    </AnimatePresence>
  )
}

export default App
