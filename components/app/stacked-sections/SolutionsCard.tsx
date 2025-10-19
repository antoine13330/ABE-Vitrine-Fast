"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Battery, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packs } from "@/lib/packs";
import { useRouter } from "next/navigation";

export default function SolutionsCard() {
  const router = useRouter();

  const handleDetailsClick = (packId: string) => {
    // Mapping des IDs de packs vers les IDs des sections dans la page écosystème
    const packToSectionMap: { [key: string]: string } = {
      'starter': 'smart-plugs',
      'confort': 'battery-storage', 
      'family': 'solar-carport'
    };
    
    const sectionId = packToSectionMap[packId];
    if (sectionId) {
      router.push(`/ecosysteme`);
      // Scroll vers la section après un délai plus long pour laisser le temps à la page de se charger
      setTimeout(() => {
        const scrollToSection = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Si l'élément n'est pas trouvé, on réessaie après un court délai
            setTimeout(scrollToSection, 100);
          }
        };
        scrollToSection();
      }, 500);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden h-full">
      {/* Gradient lumineux animé */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-400/15 via-purple-400/10 to-transparent rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-300/20 to-transparent rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/20 via-transparent to-gray-50/20" />

      {/* Ondes d'énergie */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, j) => (
          <motion.div
            key={j}
            className="absolute border border-red-400/20 rounded-full"
            style={{
              width: `${100 + j * 100}px`,
              height: `${100 + j * 100}px`,
              left: "50%",
              top: "50%",
              marginLeft: `${-50 - j * 50}px`,
              marginTop: `${-50 - j * 50}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: j * 0.5,
            }}
          />
        ))}
      </div>

      {/* Particules d'énergie */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, j) => (
          <motion.div
            key={j}
            className="absolute w-1 h-1 bg-red-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto w-full">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-[1.1]"
          >
            Notre proposition à votre
            <br />
            <span className="text-primary">transition énergétique</span>
          </motion.h2>

          {/* Packs avec progression claire */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto items-stretch">
            {packs.map((pack, j) => {
              const IconComponent = pack.icon;
              return (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + j * 0.1 }}
                  className={cn(
                    "group relative rounded-xl border transition-all duration-500 text-center flex flex-col",
                    pack.highlight
                      ? "bg-white/90 border-2 border-primary hover:bg-white hover:shadow-xl hover:shadow-primary/20 scale-105"
                      : "bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-white/90 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50"
                  )}
                >
                  {/* {pack.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4  rounded-full z-10">
                      <span className="text-white text-xs font-bold uppercase">
                        Recommandé
                      </span>
                    </div>
                  )} */}

                  <div className={cn(
                    "p-3 pb-0 sm:p-4 flex-1 flex flex-col justify-between",
                    pack.highlight ? "pt-6 sm:pt-8" : "pt-6 sm:pt-8"
                  )}>
                    <div className="flex flex-col items-center flex-1 justify-center">
                      {/* Logo tout en haut */}
                      <div
                        className={cn(
                          "p-2 sm:p-3 rounded-lg shadow-lg  mb-2",
                          pack.highlight ? "bg-primary" : "bg-gray-100"
                        )}
                      >
                        <IconComponent
                          className={cn(
                            "w-5 h-5 sm:w-6 sm:h-6",
                            pack.highlight ? "text-white" : "text-primary"
                          )}
                        />
                      </div>
                      <div className="bg-primary/10 px-3 py-1 rounded-full inline-block mb-2">
                          <p className="text-primary text-sm sm:text-base font-bold uppercase tracking-wide">
                            PACK {pack.title}
                          </p>
                        </div>
                      {/* Titre */}
                      <div className="text-center mb-4 w-full">
                        <div className="border-black border border-x-0 py-4 w-full mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase tracking-tight leading-tight">
                            {pack.slogan.split(' ')[0]}
                          </h3>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900 uppercase tracking-tight leading-tight">
                            {pack.slogan.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                       
                      </div>

                      {/* Image du produit */}
                      <div className="mb-4 h-32 flex items-end justify-center">
                      {pack.id === "starter" ? (
                        <div className="w-full max-w-32 mx-auto rounded-lg overflow-hidden h-32 flex items-end justify-center">
                          <img
                            src="/img/pack/plug.png"
                            alt="Prises intelligentes Starter Pack"
                            className="w-full h-full object-contain object-bottom"
                          />
                        </div>
                      ) : pack.id === "confort" ? (
                        <div className="w-full max-w-32 mx-auto rounded-lg overflow-hidden h-32 flex items-end justify-center">
                          <img
                            src="/img/pack/battery-plug.webp"
                            alt="Batterie et prises Confort Pack"
                            className="w-full h-full object-contain object-bottom"
                          />
                        </div>
                      ) : pack.id === "family" ? (
                        <div className="w-full h-32 mx-auto rounded-lg overflow-hidden flex items-center justify-center">
                          {/* filter to make the image with more contrast and lowered brightness / highlights */}
                          <img
                            src="/img/pack/carport-above.jpg"
                            alt="Carport solaire Family Pack"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-full max-w-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-end justify-center border-2 border-dashed border-gray-300 h-32">
                          <span className="text-gray-500 text-xs font-medium text-center px-2">
                            Image {pack.title}
                          </span>
                        </div>
                      )}
                      </div>

                      {/* Prix et économies en bas de l'image */}
                      <div className="text-center border-t border-black pt -2 w-full pt-4">
                        <p className="text-gray-900 text-xl sm:text-2xl font-black">
                          {pack.priceLabel}
                        </p>
                        {/* <p className="text-green-600 text-sm sm:text-base font-semibold">
                          Économies : {pack.saving}
                        </p> */}
                      </div>

                      {/* Point important pour Family Pack */}
                      {/* {pack.id === "family" && (
                        <div className="mb-2 sm:mb-3">
                          <div className="bg-green-100 border border-green-300 rounded-lg p-1 sm:p-1.5 text-center">
                            <p className="text-green-800 text-xs font-semibold">
                              ⭐ Accès à l'énergie à 75% du prix EDF
                            </p>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>

                  {/* Section des fonctionnalités et équipements */}
                  <div className="border-t border-gray-200 bg-gray-50/50">
                    <div className="p-3 sm:p-4 text-center">
                      <h4 className="text-xs font-semibold text-gray-800 mb-2">
                        Fonctionnalités clés :
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-600 mb-4 text-center">
                        {pack.id === "starter" && (
                          <>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Contrôle intelligent de la consommation
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Optimisation automatique des coûts
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Surveillance temps réel
                            </li>
                            <li className="flex items-center justify-center gap-2 opacity-0">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Espace pour alignement
                            </li>
                          </>
                        )}
                        {pack.id === "confort" && (
                          <>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Stockage d'énergie solaire
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Autonomie renforcée
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Batterie 10 kWh
                            </li>
                            <li className="flex items-center justify-center gap-2 opacity-0">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Espace pour alignement
                            </li>
                          </>
                        )}
                        {pack.id === "family" && (
                          <>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Production d'énergie
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Solution collective intégrée
                            </li>
                            <li className="flex items-center justify-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Carport solaire 6kWc
                            </li>
                            <li className="flex items-center justify-center gap-2 opacity-0">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                              Espace pour alignement
                            </li>
                          </>
                        )}
                      </ul>

                   

                      {/* Section Équipements inclus */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">
                          Équipements inclus :
                        </h4>
                        <ul className="space-y-1 text-xs text-gray-600">
                          {pack.id === "starter" && (
                            <>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                4 prises intelligentes
                              </li>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Système de contrôle et visualisation
                              </li>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Plug and play
                              </li>
                              <li className="flex items-center justify-center gap-2 opacity-0">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Espace pour alignement
                              </li>
                            </>
                          )}
                          {pack.id === "confort" && (
                            <>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                4 prises intelligentes
                              </li>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                1 batterie 10kWh
                              </li> 
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Installation incluse
                              </li>
                              <li className="flex items-center justify-center gap-2 opacity-0">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Espace pour alignement
                              </li>
                            </>
                          )}
                          {pack.id === "family" && (
                            <>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                4 prises intelligentes
                              </li>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                1 batterie 10kWh
                              </li>
                              <li className="flex items-center justify-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                1 carport solaire 6kWc avec installation
                              </li>
                              <li className="flex items-center justify-center gap-2 opacity-0">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                                Espace pour alignement
                              </li>
                            </>
                          )}
                        </ul>
                      </div>

                      
                         {/* Section Économies */}
                         <div className="mb-4 text-center">
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">
                          Économies :
                        </h4>
                        <ul className="space-y-1 text-xl text-green-600 font-bold">
                          <li className="flex items-center justify-center gap-2">
                            
                            {pack.saving}
                          </li>
                        </ul>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button
                          className="flex-1 text-xs sm:text-sm"
                          onClick={() => {
                            const message = `Bonjour, je suis intéressé(e) par le pack ${pack.title.toUpperCase()}. Pourriez-vous me donner plus d'informations ?`;
                            const encodedMessage = encodeURIComponent(message);
                            window.open(
                              `/contact?message=${encodedMessage}`,
                              "_blank"
                            );
                          }}
                        >
                          Choisir cette offre
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-xs sm:text-sm"
                          onClick={() => handleDetailsClick(pack.id)}
                        >
                          Détails
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Note de bas de page */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="text-center text-white/40 text-xs sm:text-sm mt-6 sm:mt-8"
          >
            * Économies estimées basées sur une consommation moyenne. Résultats
            variables selon utilisation.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
