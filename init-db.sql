-- Script d'initialisation de la base de données
-- Ce script est exécuté automatiquement au premier démarrage du conteneur

-- Créer la table newsletter_subscribers si elle n'existe pas
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Créer un index sur l'email pour des requêtes plus rapides
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Afficher un message de confirmation
DO $$
BEGIN
    RAISE NOTICE 'Base de données ABE Vitrine initialisée avec succès !';
END $$;



