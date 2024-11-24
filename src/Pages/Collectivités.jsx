import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation"
import TitreNavigation from "../Composants/TitreNavigation";

const Collectivités = () => {
    return (
        <>
          
            <section>
            <PhotoNavigation />

           <TitreNavigation
           TitreNavigation="Collectivités et mairies"/>

                <BoutonNavigation
                  TitreBoutonVavigation="Collectivités et mairies"
                />


                <div className="Collectivités">
                    <h1> L’informatique optimisée pour les mairies et autres collectivités</h1>

                    <p>Micronov s’appuie sur ses 25 ans d’expérience auprès des mairies pour vous proposer une solution complète
                        prête à l’emploi : Ordinateurs neufs ou rénovés sous Windows, écrans neufs ou rénovés, écrans tactiles grand
                        format multi-touch 65″ ou plus, vidéo-projecteurs courte focale interactif, tableaux blancs avec volets,
                        visualiseurs, bornes wifi, serveur NAS, téléphonie VoIP.</p>

                    <ul>
                        <li>1 offre logicielle complète intégrant :</li>
                        <li>La suite bureautique LibreOffice ou Microsoft Office.</li>
                        <li>De nombreux utilitaires.</li>
                    </ul>

                    <p>Un contrat d’assistance commun entre la Mairie et l’École de la commune permet des économies.</p>
                    <p>Dans le cadre de la Loi (à préciser !), les mairies de doivent d’augmenter à 20% le matériel rénové dans
                        leurs commandes.</p>
                    <p>Micronov peut répondre à des Marchés publics avec clauses sociales d’inclusion / d’insertion.</p>
                </div>
            </section>
        </>
    );
};
export default Collectivités;




