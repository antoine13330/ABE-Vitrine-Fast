"use client";

import { motion } from "framer-motion";
import { Zap, TrendingDown, Home, Sun, Users, Building2 } from "lucide-react";

export default function AutoconsommationCard() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden h-full">
      {/* Gradients animés */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Pattern de fond animé */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
            animation: "float 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, j) => (
          <motion.div
            key={j}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-semibold">
              Consomer intelligement
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 sm:mb-4 leading-[1.1]"
          >
            Gagner de l'argent
            <span className="inline-block bg-primary text-white ml-2 px-3 py-1 sm:px-4 sm:py-2 text-2xl sm:text-3xl lg:text-5xl rounded-xl transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-transform">
              ENSEMBLE
            </span>
            <br />
            <span className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700">
                avec l'autoconsommation collective
              </span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            {/* Colonne gauche - Informations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 backdrop-blur-sm p-2 sm:p-2.5 rounded-lg flex-shrink-0">
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Baissez votre facture
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Ce support à la production nationale permet de réduire
                    vos dépenses et augmenter votre pouvoir d'achat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 backdrop-blur-sm p-2 sm:p-2.5 rounded-lg flex-shrink-0">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Créer un revenu vertueux
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Transformez votre surplus d'énergie en source de revenus
                    tout en participant à la transition énergétique locale.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 backdrop-blur-sm p-2 sm:p-2.5 rounded-lg flex-shrink-0">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Rayon de 10 kms
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Organisez-vous localement pour produire votre énergie,
                    la consommer et revendre votre surplus à vos voisins.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Colonne droite - Qui est concerné */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-gray-200 max-w-xs sm:max-w-lg mx-auto">
                {/* En-tête */}
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-3xl md:text-4xl font-black text-primary uppercase">
                    Vous êtes concernés
                  </h3>
                </div>

                {/* Grille des profils */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { icon: Home, label: "Particulier" },
                    { icon: Users, label: "Commerçant" },
                    { icon: Building2, label: "Collectivité" },
                    { icon: Building2, label: "Entreprise" },
                  ].map((item, j) => (
                    <div
                      key={j}
                      className="aspect-square flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg bg-gray-50 border border-gray-200"
                    >
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                      </div>
                      <span className="text-xs sm:text-lg font-bold text-gray-900">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
