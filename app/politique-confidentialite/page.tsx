import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | ABE Metasystems",
  description: "Politique de confidentialité et protection des données personnelles d'ABE Metasystems",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  ABE Metasystems s'engage à protéger votre vie privée et vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
                </p>
                <p className="text-gray-700">
                  En utilisant notre site web abe-metasystems.com, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Responsable du traitement</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-2"><strong>Responsable :</strong> ABE Metasystems</p>
                <p className="text-gray-700 mb-2"><strong>Adresse :</strong> 9 Impasse de la Tour, 13330 Pélissane, France</p>
                <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@abe-metasystems.com</p>
                <p className="text-gray-700"><strong>Téléphone :</strong> 06 99 95 67 20</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Données collectées</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">3.1 Données collectées automatiquement</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Référent (site web d'origine)</li>
                  <li>Données de géolocalisation approximative</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-3">3.2 Données collectées volontairement</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations sur votre projet énergétique</li>
                  <li>Préférences de communication</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Finalités du traitement</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Répondre à vos demandes de contact et d'information</li>
                  <li>Vous proposer nos services d'autoconsommation collective</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Vous envoyer des newsletters (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Analyser l'utilisation de notre site web</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Base légale du traitement</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">Le traitement de vos données personnelles est basé sur :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Votre consentement</strong> pour l'envoi de newsletters et communications marketing</li>
                  <li><strong>L'exécution d'un contrat</strong> pour la fourniture de nos services</li>
                  <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et l'analyse du site</li>
                  <li><strong>Le respect d'obligations légales</strong> en matière de comptabilité et de facturation</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Partage des données</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec nos prestataires de services (hébergement, email) sous contrat de confidentialité</li>
                  <li>En cas de fusion, acquisition ou vente d'actifs</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Durée de conservation</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Newsletter :</strong> Jusqu'à désabonnement</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Vos droits</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement :</strong> À tout moment pour les traitements basés sur le consentement</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@abe-metasystems.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Cookies et technologies similaires</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Types de cookies utilisés :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site</li>
                  <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Sécurité des données</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation accidentelle</li>
                  <li>La modification non autorisée</li>
                  <li>La destruction ou la perte</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nos mesures incluent le chiffrement des données, l'accès restreint, et des audits de sécurité réguliers.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Transferts internationaux</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700">
                  Vos données personnelles sont principalement stockées en France. 
                  En cas de transfert vers des pays tiers, nous nous assurons que des garanties appropriées sont en place, 
                  conformément au RGPD.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Réclamations</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nous contacter directement à contact@abe-metasystems.com</li>
                  <li>Introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>CNIL :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                  <strong>Site web :</strong> www.cnil.fr
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Modifications</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700">
                  Cette politique de confidentialité peut être modifiée à tout moment. 
                  Les modifications importantes vous seront notifiées par email ou via un avis sur notre site web.
                </p>
              </div>
            </section>

            <div className="text-sm text-gray-500 mt-8 pt-6 border-t">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}





