"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AutoconsommationCard from "./stacked-sections/AutoconsommationCard";
import SolutionsCard from "./stacked-sections/SolutionsCard";

const testCards = [
  {
    title: "Autoconsommation Collective",
    content: "L'autoconsommation collective c'est gagner de l'argent ENSEMBLE",
  },
  {
    title: "Solutions",
    content: "Notre proposition à votre transition énergétique",
  },
];

const StickyCard = ({
  i,
  progress,
  range,
  targetScale,
  isMobile = false,
}: {
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
  isMobile?: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = progress ? useTransform(progress, range, [1, targetScale]) : 1;

  if (isMobile) {
    // Mode mobile : pas de sticky, taille libre
    return (
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="rounded-3xl relative flex min-h-[60vh] w-full origin-top flex-col overflow-hidden shadow-2xl"
        >
          {renderCardContent(i)}
        </motion.div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(0vh + ${i * 20 + 20}px)`,
        }}
        className="rounded-3xl relative -top-1/4 flex h-[80vh] w-[90vw] max-w-6xl origin-top flex-col overflow-hidden shadow-2xl"
      >
        {renderCardContent(i)}
      </motion.div>
    </div>
  );
};

const renderCardContent = (i: number) => {
  switch (i) {
    case 0:
      return <AutoconsommationCard />;
    case 1:
      return <SolutionsCard />;
    default:
      return null;
  }
};

const StackedSections = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    setIsHydrated(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Attendre l'hydratation pour éviter les erreurs SSR
  if (!isHydrated) {
    return (
      <section className="py-12">
        <div className="container mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            ABE producteur national d'énergie collective
            <span className="text-primary"> vous propose</span>
          </h2>
         
        </div>
        <div className="space-y-8">
          {testCards.map((card, i) => (
            <div key={`loading_${i}`} className="w-full max-w-4xl mx-auto px-4 mb-8">
              <div className="rounded-3xl relative flex min-h-[60vh] w-full origin-top flex-col overflow-hidden shadow-2xl bg-gray-100 animate-pulse">
                <div className="h-full flex items-center justify-center">
                  <div className="text-gray-400">Chargement...</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isMobile) {
    // Mode mobile : layout vertical simple
    return (
      <section className="py-12">
      <div className="container mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          ABE producteur national d'énergie collective
          <span className="text-primary"> vous propose</span>
        </h2>
       
      </div>

        <div className="space-y-8">
          {testCards.map((card, i) => (
            <StickyCard
              key={`test_${i}`}
              i={i}
              progress={null}
              range={[0, 1]}
              targetScale={1}
              isMobile={true}
            />
          ))}
        </div>
      </section>
    );
  }

  // Mode desktop : scroll stacking
  return <DesktopStackedSections />;
};

const DesktopStackedSections = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
          ABE producteur national d'énergie collective
          <span className="text-primary"> vous propose</span>
        </h2>
     
      </div>

      <main
        ref={container}
        className="relative z-10 flex w-full flex-col items-center justify-center pb-[20vh] pt-[5vh]"
      >
        {testCards.map((card, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (testCards.length - i - 1) * 0.1
          );
          return (
            <StickyCard
              key={`test_${i}`}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              isMobile={false}
            />
          );
        })}
      </main>
    </section>
  );
};

export default StackedSections;
