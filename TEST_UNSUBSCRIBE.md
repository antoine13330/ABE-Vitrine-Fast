// Script de test pour récupérer un unsubscribeId depuis la base de données
// À exécuter dans la console du navigateur sur Prisma Studio (http://localhost:5555)

// 1. Aller sur Prisma Studio : http://localhost:5555
// 2. Sélectionner la table "NewsletterSubscriber"
// 3. Copier un unsubscribeId depuis la colonne "unsubscribeId"
// 4. Tester l'URL de désinscription : http://localhost:3001/unsubscribe/[UNSUBSCRIBE_ID]

// Exemple d'URL de test :
// http://localhost:3001/unsubscribe/clh1234567890abcdef

// Ou utiliser cette requête SQL dans Prisma Studio :
/*
SELECT "unsubscribeId", email, "createdAt" 
FROM "newsletter_subscribers" 
ORDER BY "createdAt" DESC 
LIMIT 5;
*/



