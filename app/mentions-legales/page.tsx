import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | ABE Metasystems",
  description: "Mentions légales et informations légales d'ABE Metasystems",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Éditeur du site</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-2"><strong>Raison sociale :</strong> ABE Metasystems</p>
                <p className="text-gray-700 mb-2"><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</p>
                <p className="text-gray-700 mb-2"><strong>Adresse :</strong> 9 Impasse de la Tour, 13330 Pélissane, France</p>
                <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> 06 99 95 67 20</p>
                <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@abe-metasystems.com</p>
                <p className="text-gray-700 mb-2"><strong>Directeur de la publication :</strong> [Nom du directeur]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Hébergement</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="text-gray-700 mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p className="text-gray-700 mb-2"><strong>Site web :</strong> https://vercel.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Propriété intellectuelle</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-gray-700">
                  La marque et le logo d'ABE Metasystems sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Responsabilité</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-gray-700 mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@abe-metasystems.com, en décrivant le problème de la manière la plus précise possible.
                </p>
                <p className="text-gray-700">
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Liens hypertextes</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site abe-metasystems.com. 
                  Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Le site abe-metasystems.com peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
                  Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
                <p className="text-gray-700">
                  Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. 
                  Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Droit applicable</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700">
                  Tout litige en relation avec l'utilisation du site abe-metasystems.com est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Marseille.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-2">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <p className="text-gray-700 mb-2">• Par email : contact@abe-metasystems.com</p>
                <p className="text-gray-700 mb-2">• Par téléphone : 06 99 95 67 20</p>
                <p className="text-gray-700">• Par courrier : 9 Impasse de la Tour, 13330 Pélissane, France</p>
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





