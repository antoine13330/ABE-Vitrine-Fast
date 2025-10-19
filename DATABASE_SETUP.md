# 🐳 Configuration de la Base de Données PostgreSQL avec Docker

Ce projet utilise PostgreSQL avec Docker pour faciliter le développement local.

## 🚀 Démarrage rapide

### 1. Démarrer la base de données

```bash
# Démarrer PostgreSQL et Adminer
docker-compose up -d

# Vérifier que les conteneurs sont en cours d'exécution
docker-compose ps
```

### 2. Configuration de l'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
DATABASE_URL="postgresql://[DB_USER]:[DB_PASSWORD]@localhost:5432/abe_vitrine?schema=public"
NODE_ENV="development"
```

### 3. Initialiser Prisma

```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations (créer les tables)
npx prisma migrate dev --name init

# OU juste pousser le schéma sans migration
npx prisma db push
```

### 4. Vérifier la base de données

#### Option A : Avec Prisma Studio (recommandé)
```bash
npx prisma studio
```
Ouvre une interface web sur `http://localhost:5555`

#### Option B : Avec Adminer (inclus dans Docker)
Ouvrez `http://localhost:8080` dans votre navigateur
- **Système** : PostgreSQL
- **Serveur** : postgres
- **Utilisateur** : abe_user
- **Mot de passe** : [VARIABLE_DB_PASSWORD]
- **Base de données** : abe_vitrine

## 📋 Commandes utiles

### Gestion des conteneurs
```bash
# Démarrer
docker-compose up -d

# Arrêter
docker-compose down

# Arrêter et supprimer les volumes (ATTENTION: supprime les données)
docker-compose down -v

# Voir les logs
docker-compose logs -f postgres

# Redémarrer
docker-compose restart
```

### Gestion de Prisma
```bash
# Générer le client après modification du schéma
npx prisma generate

# Créer une nouvelle migration
npx prisma migrate dev --name nom_de_la_migration

# Appliquer les migrations en production
npx prisma migrate deploy

# Réinitialiser la base de données
npx prisma migrate reset

# Ouvrir Prisma Studio
npx prisma studio
```

### Accès direct à PostgreSQL
```bash
# Se connecter à la base de données
docker-compose exec postgres psql -U abe_user -d abe_vitrine

# Lister les tables
docker-compose exec postgres psql -U abe_user -d abe_vitrine -c "\dt"

# Voir les données de la newsletter
docker-compose exec postgres psql -U abe_user -d abe_vitrine -c "SELECT * FROM newsletter_subscribers;"
```

## 🔧 Configuration

### Ports utilisés
- **5432** : PostgreSQL
- **8080** : Adminer (interface d'administration)

### Volumes
Les données sont persistées dans un volume Docker nommé `postgres_data`.

### Santé du conteneur
Le conteneur PostgreSQL inclut un healthcheck qui vérifie :
- Toutes les 10 secondes
- Si PostgreSQL répond
- Maximum 5 tentatives avant de marquer comme "unhealthy"

## 🗄️ Structure de la base de données

### Table: newsletter_subscribers
| Colonne    | Type      | Description                    |
|------------|-----------|--------------------------------|
| id         | TEXT      | Identifiant unique (CUID)      |
| email      | TEXT      | Email de l'abonné (unique)     |
| created_at | TIMESTAMP | Date d'inscription             |

## 🐛 Dépannage

### Le conteneur ne démarre pas
```bash
# Vérifier les logs
docker-compose logs postgres

# Vérifier si le port 5432 est déjà utilisé
netstat -an | findstr "5432"  # Windows
lsof -i :5432                  # Mac/Linux
```

### Erreur de connexion Prisma
1. Vérifiez que le conteneur est bien démarré : `docker-compose ps`
2. Vérifiez votre `.env.local`
3. Testez la connexion : `npx prisma db pull`

### Réinitialiser complètement
```bash
# Arrêter et supprimer tout
docker-compose down -v

# Redémarrer
docker-compose up -d

# Recréer les tables
npx prisma db push
```

## 🚀 Production

Pour la production, utilisez une base de données PostgreSQL hébergée :
- **Vercel** : Vercel Postgres
- **Railway** : Railway Postgres
- **Supabase** : Supabase Database
- **Neon** : Neon Serverless Postgres

Mettez à jour `DATABASE_URL` dans vos variables d'environnement de production.



