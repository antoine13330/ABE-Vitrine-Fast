# Configuration SMTP pour LWS - ABE Metasystems

## 📧 Configuration de l'envoi d'emails

### 1. Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
# Configuration SMTP pour LWS
SMTP_HOST=mail.abe-metasystems.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@abe-metasystems.com
SMTP_PASSWORD=votre_mot_de_passe_email
```

### 2. Obtenir les informations SMTP

#### Option A : Via votre compte email chez LWS

1. Connectez-vous à votre panneau LWS
2. Allez dans la section **Emails**
3. Sélectionnez l'adresse `contact@abe-metasystems.com`
4. Récupérez les informations SMTP :
   - **Serveur SMTP** : `mail.abe-metasystems.com` ou `smtp.lws.fr`
   - **Port** : `587` (TLS) ou `465` (SSL)
   - **Nom d'utilisateur** : `contact@abe-metasystems.com`
   - **Mot de passe** : Le mot de passe de votre email

#### Option B : Serveurs SMTP LWS standards

```
Serveur sortant (SMTP) : smtp.lws.fr
Port SMTP : 587 (TLS) ou 465 (SSL)
Authentification : OUI
Nom d'utilisateur : contact@abe-metasystems.com
Mot de passe : [votre mot de passe email]
```

### 3. Paramètres recommandés

**Configuration recommandée :**
```env
SMTP_HOST=mail.abe-metasystems.com
SMTP_PORT=587
SMTP_SECURE=false  # false pour TLS sur port 587
SMTP_USER=contact@abe-metasystems.com
SMTP_PASSWORD=VotreMdP!Sécurisé123
```

**Alternative avec SSL :**
```env
SMTP_HOST=mail.abe-metasystems.com
SMTP_PORT=465
SMTP_SECURE=true  # true pour SSL sur port 465
SMTP_USER=contact@abe-metasystems.com
SMTP_PASSWORD=VotreMdP!Sécurisé123
```

### 4. Tester la configuration

Une fois le fichier `.env.local` créé :

1. Redémarrez votre serveur de développement :
   ```bash
   npm run dev
   ```

2. Allez sur la page de contact : `http://localhost:3000/contact`

3. Remplissez et envoyez le formulaire

4. Vérifiez la boîte mail `contact@abe-metasystems.com`

### 5. Sécurité

⚠️ **Important :**
- Le fichier `.env.local` est déjà dans `.gitignore` - NE PAS le commiter
- Ne partagez JAMAIS votre mot de passe email
- Utilisez un mot de passe fort
- En production (Vercel/Netlify), ajoutez ces variables dans les **Environment Variables**

### 6. Déploiement en production

#### Sur Vercel :
1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez chaque variable :
   - `SMTP_HOST` = `mail.abe-metasystems.com`
   - `SMTP_PORT` = `587`
   - `SMTP_SECURE` = `false`
   - `SMTP_USER` = `contact@abe-metasystems.com`
   - `SMTP_PASSWORD` = `[votre mot de passe]`
4. Redéployez l'application

### 7. Dépannage

#### Email non reçu ?
- Vérifiez les spams
- Vérifiez que le compte email existe chez LWS
- Vérifiez les credentials dans `.env.local`
- Regardez les logs dans la console (npm run dev)

#### Erreur "Authentication failed" ?
- Vérifiez le nom d'utilisateur (doit être l'email complet)
- Vérifiez le mot de passe
- Vérifiez que l'email est actif chez LWS

#### Erreur de connexion ?
- Essayez avec `smtp.lws.fr` au lieu de `mail.abe-metasystems.com`
- Essayez le port 465 avec `SMTP_SECURE=true`
- Vérifiez votre firewall

### 8. Format des emails envoyés

Les emails seront envoyés avec :
- **De :** Site Web ABE (via contact@abe-metasystems.com)
- **À :** contact@abe-metasystems.com
- **Répondre à :** L'email du visiteur
- **Sujet :** Nouveau message de [Nom] - Site ABE Metasystems
- **Format :** HTML + Texte brut (compatible tous clients email)

### 9. Fonctionnalités

✅ Validation des champs (email, nom, message)
✅ Email au format HTML professionnel avec couleurs ABE
✅ Protection anti-spam basique
✅ Messages d'erreur clairs pour l'utilisateur
✅ État de chargement pendant l'envoi
✅ Bouton répondre directement dans l'email reçu

---

**Besoin d'aide ?** Contactez le support LWS ou vérifiez leur documentation SMTP.







