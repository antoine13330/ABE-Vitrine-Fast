# Makefile pour simplifier les commandes Docker et Prisma

.PHONY: help db-up db-down db-reset db-logs db-shell prisma-studio prisma-migrate prisma-push setup

help: ## Afficher l'aide
	@echo "Commandes disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## Configuration initiale complète
	@echo "📦 Installation des dépendances..."
	npm install
	@echo "🐳 Démarrage de PostgreSQL..."
	docker-compose up -d
	@echo "⏳ Attente du démarrage de la base de données..."
	sleep 5
	@echo "🔧 Génération du client Prisma..."
	npx prisma generate
	@echo "📊 Application du schéma Prisma..."
	npx prisma db push
	@echo "✅ Configuration terminée! Créez votre fichier .env.local avec:"
	@echo "DATABASE_URL=\"postgresql://abe_user:abe_password@localhost:5432/abe_vitrine?schema=public\""

db-up: ## Démarrer PostgreSQL
	docker-compose up -d
	@echo "✅ PostgreSQL démarré sur localhost:5432"
	@echo "✅ Adminer disponible sur http://localhost:8080"

db-down: ## Arrêter PostgreSQL
	docker-compose down
	@echo "✅ PostgreSQL arrêté"

db-reset: ## Réinitialiser complètement la base de données
	docker-compose down -v
	docker-compose up -d
	sleep 3
	npx prisma db push
	@echo "✅ Base de données réinitialisée"

db-logs: ## Voir les logs de PostgreSQL
	docker-compose logs -f postgres

db-shell: ## Accéder au shell PostgreSQL
	docker-compose exec postgres psql -U abe_user -d abe_vitrine

prisma-studio: ## Ouvrir Prisma Studio
	npx prisma studio

prisma-migrate: ## Créer une nouvelle migration
	npx prisma migrate dev

prisma-push: ## Pousser le schéma sans migration
	npx prisma db push

prisma-generate: ## Générer le client Prisma
	npx prisma generate

dev: db-up ## Démarrer le serveur de développement avec la DB
	npm run dev

clean: ## Nettoyer les fichiers temporaires
	rm -rf .next
	rm -rf node_modules/.cache
	@echo "✅ Nettoyage effectué"



