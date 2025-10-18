import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | ABE Metasystems",
  description: "Conditions générales de vente et prestations d'ABE Metasystems",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CGV() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Objet et champ d'application</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre ABE Metasystems 
                  et ses clients pour la vente de services d'autoconsommation collective et de solutions énergétiques.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>ABE Metasystems</strong><br />
                  SAS au capital de [montant] €<br />
                  Siège social : 9 Impasse de la Tour, 13330 Pélissane, France<br />
                  RCS [numéro] - SIRET [numéro]<br />
                  Téléphone : 06 99 95 67 20<br />
                  Email : contact@abe-metasystems.com
                </p>
                <p className="text-gray-700">
                  Toute commande implique l'acceptation sans réserve des présentes CGV par le client.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services proposés</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">ABE Metasystems propose :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Études de faisabilité pour l'autoconsommation collective</li>
                  <li>Installation et maintenance de panneaux solaires</li>
                  <li>Gestion de communautés énergétiques</li>
                  <li>Logiciels de gestion de l'énergie (Thunder, Prodigy)</li>
                  <li>Conseil en transition énergétique</li>
                  <li>Services de monitoring et optimisation énergétique</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Commandes et devis</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">3.1 Devis</h3>
                <p className="text-gray-700 mb-4">
                  Toute prestation fait l'objet d'un devis détaillé établi par ABE Metasystems. 
                  Le devis est valable 30 jours à compter de sa date d'émission.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">3.2 Commande</h3>
                <p className="text-gray-700 mb-4">
                  La commande est formalisée par la signature du devis par le client ou par tout autre moyen 
                  de confirmation écrite (email, bon de commande).
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">3.3 Acceptation</h3>
                <p className="text-gray-700">
                  L'acceptation de la commande par ABE Metasystems est confirmée par l'envoi d'un accusé de réception 
                  ou par la signature du contrat de prestation.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Tarifs et facturation</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">4.1 Tarifs</h3>
                <p className="text-gray-700 mb-4">
                  Les tarifs sont indiqués en euros TTC sur les devis et factures. 
                  Ils sont fermes et non révisables pendant la durée d'exécution du contrat, sauf clause contraire.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">4.2 Facturation</h3>
                <p className="text-gray-700 mb-4">
                  La facturation s'effectue selon les modalités convenues dans le contrat :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Acompte à la commande (30% maximum)</li>
                  <li>Facturation intermédiaire selon l'avancement des travaux</li>
                  <li>Solde à la livraison ou à la réception des travaux</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">4.3 Paiement</h3>
                <p className="text-gray-700">
                  Le paiement s'effectue par virement bancaire, chèque ou carte bancaire. 
                  Le délai de paiement est de 30 jours net à compter de la date d'émission de la facture.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Exécution des prestations</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">5.1 Délais</h3>
                <p className="text-gray-700 mb-4">
                  Les délais d'exécution sont indiqués à titre indicatif. 
                  En cas de retard, ABE Metasystems s'engage à informer le client et à justifier les causes du retard.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">5.2 Réception</h3>
                <p className="text-gray-700 mb-4">
                  La réception des travaux s'effectue en présence du client ou de son représentant. 
                  Un procès-verbal de réception est établi et signé par les deux parties.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">5.3 Réserves</h3>
                <p className="text-gray-700">
                  Toute réserve doit être formulée par écrit dans les 8 jours suivant la réception. 
                  À défaut, les travaux sont réputés conformes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Garanties</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">6.1 Garantie de conformité</h3>
                <p className="text-gray-700 mb-4">
                  ABE Metasystems garantit la conformité des prestations aux spécifications du contrat. 
                  La garantie de conformité est de 2 ans à compter de la réception des travaux.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">6.2 Garantie des équipements</h3>
                <p className="text-gray-700 mb-4">
                  Les équipements installés bénéficient des garanties constructeur. 
                  ABE Metasystems s'engage à faire valoir ces garanties auprès des fabricants.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">6.3 Garantie de performance</h3>
                <p className="text-gray-700">
                  Pour les installations photovoltaïques, ABE Metasystems garantit un rendement minimum 
                  selon les spécifications techniques du contrat.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Responsabilité</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">7.1 Limitation de responsabilité</h3>
                <p className="text-gray-700 mb-4">
                  La responsabilité d'ABE Metasystems est limitée au montant des prestations facturées. 
                  En aucun cas, ABE Metasystems ne pourra être tenue responsable des dommages indirects.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">7.2 Force majeure</h3>
                <p className="text-gray-700">
                  ABE Metasystems ne saurait être tenue responsable de l'inexécution ou des retards dans l'exécution 
                  de ses obligations dus à des cas de force majeure.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Propriété intellectuelle</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Tous les éléments de propriété intellectuelle (logiciels, méthodes, savoir-faire) 
                  restent la propriété exclusive d'ABE Metasystems.
                </p>
                <p className="text-gray-700">
                  Le client s'engage à ne pas reproduire, modifier ou diffuser ces éléments sans autorisation écrite d'ABE Metasystems.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Protection des données</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700">
                  Le traitement des données personnelles est régi par notre politique de confidentialité, 
                  accessible sur notre site web et conforme au RGPD.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Résiliation</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">10.1 Résiliation par le client</h3>
                <p className="text-gray-700 mb-4">
                  Le client peut résilier le contrat avec un préavis de 30 jours, 
                  sous réserve du paiement des prestations déjà réalisées.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">10.2 Résiliation par ABE Metasystems</h3>
                <p className="text-gray-700">
                  ABE Metasystems peut résilier le contrat en cas de non-paiement des factures 
                  après mise en demeure restée sans effet pendant 15 jours.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Droit applicable et juridiction</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Les présentes CGV sont soumises au droit français. 
                  En cas de litige, les parties s'efforceront de trouver une solution amiable.
                </p>
                <p className="text-gray-700">
                  À défaut d'accord amiable, les tribunaux de Marseille seront seuls compétents.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Dispositions générales</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">12.1 Modification des CGV</h3>
                <p className="text-gray-700 mb-4">
                  ABE Metasystems se réserve le droit de modifier les présentes CGV à tout moment. 
                  Les nouvelles conditions seront applicables dès leur mise en ligne.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">12.2 Nullité partielle</h3>
                <p className="text-gray-700 mb-4">
                  Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées telles 
                  en application d'une loi, d'un règlement ou à la suite d'une décision de justice, 
                  les autres stipulations gardent toute leur force et leur portée.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-3">12.3 Contact</h3>
                <p className="text-gray-700">
                  Pour toute question relative aux présentes CGV :<br />
                  Email : contact@abe-metasystems.com<br />
                  Téléphone : 06 99 95 67 20
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





