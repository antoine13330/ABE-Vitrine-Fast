# ABE Vitrine Fast 🚀

Site vitrine ultra-performant pour ABE Metasystems - Spécialiste de l'autoconsommation collective et de l'énergie solaire.

## 🎯 Objectifs

- Score Lighthouse > 90
- Design digne d'Awwwards
- Mobile-first et responsive
- SEO optimisé pour "autoconsommation collective", "économiser facture électricité", etc.
- Animations fluides et modernes

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **UI Components**: Radix UI + Custom
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Database**: PostgreSQL + Prisma ORM
- **Container**: Docker

## 🚀 Démarrage Rapide

### Configuration complète (recommandée)

```bash
# Installation + Base de données + Configuration automatique
npm run setup
```

Cette commande va :
1. Installer toutes les dépendances
2. Démarrer PostgreSQL via Docker
3. Générer le client Prisma
4. Créer les tables de base de données

### Configuration manuelle

```bash
# 1. Installation des dépendances
npm install

# 2. Démarrer PostgreSQL (via Docker)
npm run db:up

# 3. Créer le fichier .env.local
echo 'DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/abe_vitrine?schema=public"' > .env.local

# 4. Générer Prisma et créer les tables
npm run db:generate
npm run db:push

# 5. Démarrage du serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 🗄️ Gestion de la Base de Données

```bash
# Démarrer PostgreSQL
npm run db:up

# Arrêter PostgreSQL
npm run db:down

# Voir les logs de la DB
npm run db:logs

# Ouvrir l'interface Prisma Studio
npm run db:studio

# Réinitialiser la base de données
npm run db:reset

# Créer une migration
npm run db:migrate

# Appliquer le schéma sans migration
npm run db:push
```

📖 **Guide détaillé**: Voir [DATABASE_SETUP.md](./DATABASE_SETUP.md)

## 📁 Structure du Projet

```
abe-vitrine-fast/
├── app/                      # Pages et routes
│   ├── about/               # Page À propos
│   ├── contact/             # Page Contact
│   ├── logiciels/           # Page Logiciels (Prodigy & Thunder)
│   ├── professionnel/       # Page Professionnel
│   ├── layout.tsx           # Layout principal avec SEO
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── app/                 # Composants de l'application
│   │   ├── loading-screen.tsx    # Écran de chargement avec transition
│   │   ├── navbar.tsx            # Navigation
│   │   ├── hero-banner.tsx       # Bannière hero
│   │   └── stacked-sections.tsx  # Sections superposées
│   └── ui/                  # Composants UI réutilisables
├── lib/
│   ├── providers/           # Providers (Smooth Scroll)
│   └── utils.ts             # Utilitaires (cn, etc.)
└── public/
    └── img/                 # Images et assets
```

## ✨ Fonctionnalités

### Loading Screen
- Animation de chargement avec progression
- Transition fluide du logo vers la navbar
- Effet pulse et animations Framer Motion

### Hero Banner
- Concept créatif "Et si le courant passait avec votre voisin"
- Visualisation du flux d'énergie entre maisons
- Statistiques clés animées
- CTAs stratégiques

### Scroll Animations
- Sections superposées (style Arkeale/Big Energy)
- Animations au scroll avec Framer Motion
- Transitions fluides avec Lenis

### Newsletter 📧
- Design ultra-moderne avec effets 3D et glassmorphisme
- Animation interactive au mouvement de la souris
- Particules flottantes et gradients animés
- Validation côté client et serveur
- Stockage sécurisé dans PostgreSQL via Prisma
- Messages de succès/erreur animés
- Gestion des doublons

### Pages
- **Accueil**: Hero + Blocs superposés avec contenu ACC
- **À propos**: Mission, vision, valeurs d'ABE
- **Contact**: Formulaire + coordonnées
- **Logiciels**: ABE Prodigy & Thunder
- **Professionnel**: Accès hub.abe-metasystems.com

## 🎨 Charte Graphique

- **Couleurs principales**:
  - Noir: `#000000` (arrière-plans)
  - Rouge ABE: `#ef4444` (accents, CTA)
  - Blanc: `#ffffff` (textes, contrastes)

- **Typographie**: Inter (Google Fonts)

## 🔧 Optimisations Performance

- Image optimization avec Sharp
- Lazy loading des composants lourds
- Code splitting automatique
- Compression et minification
- Cache headers optimisés
- SSR/SSG pour SEO

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints Tailwind standard
- Tests sur mobile, tablette, desktop
- Touch-friendly sur mobile

## 🔍 SEO

- Metadata optimisées pour chaque page
- Open Graph et Twitter Cards
- Sitemap.xml automatique
- Robots.txt configuré
- Schema.org markup (à ajouter)
- Keywords: autoconsommation collective, économie énergie, etc.

## 📊 Performance Targets

- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 90
- Lighthouse Best Practices: > 90
- Lighthouse SEO: > 90

## 🔗 Liens

- **Site**: https://abe-metasystems.com
- **Hub Pro**: https://hub.abe-metasystems.com
- **Repository**: https://github.com/antoine13330/ABE-Vitrine-Fast

## 📝 TODO

- [ ] Ajouter vraies images des produits
- [ ] Connecter formulaire contact à API
- [ ] Ajouter simulateur d'économies
- [ ] Implémenter analytics
- [ ] Tests Lighthouse et optimisations
- [ ] Ajouter animations supplémentaires
- [ ] Schema.org markup
- [ ] Tests E2E

## 🤝 Contribution

Ce projet est développé par ABE Metasystems.

## 📄 License

Propriétaire - ABE Metasystems © 2025
