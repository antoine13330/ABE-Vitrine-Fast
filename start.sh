#!/bin/bash

echo "========================================"
echo "   ABE Vitrine - Configuration rapide"
echo "========================================"
echo ""

# Vérifier si Docker est lancé
if ! docker info > /dev/null 2>&1; then
    echo "[ERREUR] Docker n'est pas lancé ou n'est pas installé."
    echo "Veuillez démarrer Docker et relancer ce script."
    exit 1
fi

echo "[1/5] Démarrage de PostgreSQL..."
docker-compose up -d
if [ $? -ne 0 ]; then
    echo "[ERREUR] Impossible de démarrer PostgreSQL"
    exit 1
fi

echo "[2/5] Attente du démarrage de la base de données..."
sleep 5

echo "[3/5] Génération du client Prisma..."
npx prisma generate
if [ $? -ne 0 ]; then
    echo "[ERREUR] Échec de la génération Prisma"
    exit 1
fi

echo "[4/5] Création des tables de base de données..."
npx prisma db push
if [ $? -ne 0 ]; then
    echo "[ERREUR] Échec de la création des tables"
    exit 1
fi

echo "[5/5] Création du fichier .env.local..."
if [ ! -f .env.local ]; then
    cat > .env.local << EOF
DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/abe_vitrine?schema=public"
NODE_ENV="development"
EOF
    echo "Fichier .env.local créé avec succès"
else
    echo "Le fichier .env.local existe déjà"
fi

echo ""
echo "========================================"
echo "   Configuration terminée avec succès!"
echo "========================================"
echo ""
echo "Services disponibles:"
echo "- PostgreSQL:    localhost:5432"
echo "- Adminer:       http://localhost:8080"
echo "- Prisma Studio: npx prisma studio"
echo ""
echo "Pour démarrer le serveur de développement:"
echo "  npm run dev"
echo ""
echo "Pour arrêter PostgreSQL:"
echo "  npm run db:down"
echo ""



