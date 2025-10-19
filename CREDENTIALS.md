# 🔐 Identifiants de Développement

## PostgreSQL (Docker)

### Connexion à la base de données
```
Host:     localhost
Port:     5432
User:     [VARIABLE_DB_USER]
Password: [VARIABLE_DB_PASSWORD]
Database: abe_vitrine
```

### URL de connexion Prisma
```
DATABASE_URL="postgresql://[DB_USER]:[DB_PASSWORD]@localhost:5432/abe_vitrine?schema=public"
```

## Adminer (Interface Web PostgreSQL)

### Accès
- **URL**: http://localhost:8080
- **Système**: PostgreSQL
- **Serveur**: postgres
- **Utilisateur**: [VARIABLE_DB_USER]
- **Mot de passe**: [VARIABLE_DB_PASSWORD]
- **Base de données**: abe_vitrine

## Prisma Studio

### Lancement
```bash
npm run db:studio
# ou
npx prisma studio
```

Accessible sur: http://localhost:5555

## Services Web

| Service | URL | Description |
|---------|-----|-------------|
| Application | http://localhost:3000 | Site Next.js |
| Adminer | http://localhost:8080 | Interface DB |
| Prisma Studio | http://localhost:5555 | ORM Interface |

## ⚠️ Notes de Sécurité

**IMPORTANT**: Ces identifiants sont pour le développement local uniquement !

### Pour la production :
1. **Ne jamais** utiliser ces identifiants en production
2. Utiliser des mots de passe forts et uniques
3. Stocker les credentials dans des variables d'environnement sécurisées
4. Utiliser des services de base de données hébergés :
   - Vercel Postgres
   - Railway
   - Supabase
   - Neon
   - AWS RDS

### Fichiers à ne jamais commit :
- `.env`
- `.env.local`
- `.env.production.local`
- Tout fichier contenant des secrets

### Rotation des secrets :
Si vous commitez accidentellement des credentials :
1. Supprimer immédiatement les credentials de Git
2. Révoquer/changer tous les mots de passe
3. Vérifier l'historique Git avec `git log --all --source --full-history -- .env`



