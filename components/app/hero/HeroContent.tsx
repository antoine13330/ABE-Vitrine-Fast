'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroContentProps {
  isTransitioning?: boolean;
}

// Composant pour les mots avec surlignage
const HighlightedWord = ({ word, delay = 0.8 }: { word: string; delay?: number }) => {
  return (
    <motion.span 
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Boîte rouge semi-transparente pour desktop - derrière le texte */}
      <motion.div
        className="absolute inset-0 bg-primary/60 -rotate-1 rounded-md md:block hidden -z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      {/* Background pour mobile */}
      <span className="bg-primary/60 md:hidden px-2 py-1 rounded-md">{word}</span>
      {/* Version desktop avec texte par-dessus */}
      <span className="md:inline hidden">{word}</span>
    </motion.span>
  );
};

// Composant pour le titre principal
const MainTitle = () => {
  const prefixText = "Un abri solaire ";
  const middleText = " et l'énergie à ";
  const suffixText = " du prix EDF, ca vous dit ?";

  return (
    <>
      {/* Version mobile */}
      <h1 
        className="text-2xl sm:text-3xl font-extrabold text-white sm:leading-relaxed text-center md:hidden"
        style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}
        id="hero-heading"
      >
        {prefixText}
        <HighlightedWord word="gratuit" />
        {middleText}
        <HighlightedWord word="75%" delay={1.0} />
        {suffixText}
      </h1>

      {/* Version desktop */}
      <div className="hidden md:block">
        {/* Ligne 1 */}
        <motion.div
          className="w-full overflow-hidden mb-0 flex justify-center"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 80, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-3">
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-nowrap"
              style={{ textShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}
              aria-hidden="true"
            >
              {prefixText}
              <HighlightedWord word="gratuit" />
              {middleText}
              <HighlightedWord word="75%" delay={1.0} />
            </span>
          </div>
        </motion.div>

        {/* Ligne 2 */}
        <motion.div
          className="w-full overflow-hidden mb-8 flex justify-center"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 80, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="sr-only" id="hero-heading">
          Un abri solaire gratuit et l'énergie à 75% du prix EDF, ça vous dit ?
          </h1>
          <span 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ textShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}
            aria-hidden="true"
          >
            {suffixText}
          </span>
        </motion.div>
      </div>
    </>
  );
};

// Composant pour le sous-titre
const Subtitle = () => {
  const text = "Rejoignez l'autoconsommation collective et transformez votre quartier en centrale énergétique locale.";

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xs sm:text-base md:text-xl lg:text-3xl text-white max-w-xl md:max-w-3xl font-light md:font-normal leading-loose text-center px-2 md:px-0 mb-8"
      style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)' }}
    >
      {text}
    </motion.p>
  );
};

export default function HeroContent() {
  return (
    <div className="h-full flex flex-col justify-center md:items-center w-full py-8 sm:py-16 md:py-0 mb-8">
      <div className="w-full max-w-3xl md:max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 mb-14 sm:mb-8 md:mb-0"
          >
            <MainTitle />
          </motion.div>
          <Subtitle />
        </div>
      </div>
    </div>
  );
}
