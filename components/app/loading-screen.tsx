"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface TextStep {
  threshold: number;
  text: string;
  height: number; // Hauteur de l'espace à créer
}

const steps: TextStep[] = [
  { threshold: 35, text: "Et si le courant passait", height: 120 },
  { threshold: 78, text: "avec votre voisin ?", height: 120 },
];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Animation simple
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        return prev + 0.75;
      });
    }, 25);

    return () => clearInterval(progressTimer);
  }, [onComplete]);


  return (
    <motion.div
      key="loading-screen"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
      }}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="fixed inset-0 z-[9998] bg-primary overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Chargement de la page"
    >
        {/* Container pour les textes qui apparaissent au centre */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center w-full relative z-[99999]">
          <div className="w-full max-w-4xl relative z-[99999]">
            <div className="flex flex-col items-start w-full text-left">
              {/* Ligne 1: "Et si le courant passait" */}
              <motion.div
                className="w-full mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: progress >= 35 ? 1 : 0,
                  y: progress >= 35 ? 0 : 20
                }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              >
                <div className="w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white text-nowrap "
                      style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}>
                    Et si le courant passait
                  </h1>
                </div>
              </motion.div>

              {/* Ligne 2: "avec votre voisin ?" */}
              <motion.div
                className="w-full mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: progress >= 78 ? 1 : 0,
                  y: progress >= 78 ? 0 : 20
                }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              >
                <div className="w-full">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white  "
                      style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}>
                    avec votre voisin ?
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Barre de progression et pourcentage - fixés en bas */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-8 sm:pb-12 md:pb-16 w-full">
          <div className="w-full max-w-4xl">
            {/* Pourcentage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: progress >= 100 ? 0 : 1, 
                x: 0 
              }}
              transition={{ 
                delay: progress >= 100 ? 0 : 0.2, 
                duration: progress >= 100 ? 0.3 : 0.7,
                ease: [0.65, 0, 0.35, 1]
              }}
              className="mb-6"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tabular-nums">
                <span className="sr-only">Chargement : </span>{Math.floor(progress)}<span aria-label="pourcent">%</span>
              </p>
            </motion.div>

            {/* Barre de progression */}
            <motion.div 
              className="w-full max-w-2xl"
              animate={{ 
                opacity: progress >= 100 ? 0 : 1
              }}
              transition={{ 
                delay: progress >= 100 ? 0 : 0.4, 
                duration: progress >= 100 ? 0.3 : 0.8,
                ease: [0.65, 0, 0.35, 1]
              }}
              style={{ transformOrigin: "left" }}
              role="progressbar"
              aria-valuenow={Math.floor(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progression du chargement"
            >
              <div className="w-full h-1 bg-white/20 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ 
                    duration: isPaused ? 0.3 : 0.05,
                    ease: isPaused ? "easeOut" : "linear"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
    </motion.div>
  );
}
