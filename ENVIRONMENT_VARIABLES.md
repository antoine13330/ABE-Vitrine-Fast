# 🔧 Variables d'Environnement

## Configuration requise

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

### Base de données
```env
DATABASE_URL="postgresql://[DB_USER]:[DB_PASSWORD]@localhost:5432/abe_vitrine?schema=public"
```

### Configuration SMTP
```env
SMTP_HOST=mail.abe-metasystems.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@abe-metasystems.com
SMTP_PASSWORD=[VOTRE_MOT_DE_PASSE_EMAIL]
```

### Configuration des emails
```env
EMAIL_FROM=contact@abe-metasystems.com
EMAIL_TO=contact@abe-metasystems.com
```

### Environnement
```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://abe-metasystems.com
```

## Variables Docker

Pour Docker Compose, définissez ces variables dans votre environnement :

```bash
export DB_USER="votre_utilisateur_db"
export DB_PASSWORD="votre_mot_de_passe_db"
```

## Sécurité

⚠️ **IMPORTANT** :
- Ne jamais commiter le fichier `.env.local`
- Utiliser des mots de passe forts et uniques
- En production, configurer les variables dans les paramètres de déploiement
- Changer immédiatement tous les mots de passe exposés

