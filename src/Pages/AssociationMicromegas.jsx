import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";


const AssociationMicromegas = () => {
    return (
        <section>
            <PhotoNavigation />

         <TitreNavigation
TitreNavigation="L'Association Micromegas"/>

      <BoutonNavigation
                TitreBoutonVavigation="L'Association Micromegas" />
                <div className="Texte-Association-Micromegas">
                <p>L’association MICROMÉGAS, créée en 1997, est portée depuis l’origine par une triple dynamique:</p>

                <ul>
                    <li>Permettre l’insertion dans le monde du travail de personnes qui en sont très éloignées.</li>
                    <li>Donner une deuxième vie à du matériel informatique, notamment lors de son remplacement dans les entreprises, et être ainsi un acteur précurseur de l’économie circulaire.</li>
                    <li>Créer puis accompagner dans la durée une entreprise d’informatique éthique et pérenne.</li>
                </ul>

                <p>18 mois plus tard, le projet s’est concrétisé par la création de la SARL MICRONOV. Portée par cette dynamique, l’association MICROMÉGAS agit depuis cette date sur deux axes:</p>

                <ul>
                    <li>Elle accompagne MICRONOV, entreprise d’informatique et entreprise d’insertion, dans la cohérence entre son projet économique et son projet social.</li>
                    <li>Ses membres accompagnent bénévolement les salariés en contrat d’insertion pour construire et mener à bien leur projet professionnel après MICRONOV: accéder à un emploi pérenne, reprendre une formation qualifiante, consolider un choix de vie autour de l’informatique ou autre.</li></ul><p>Si ce projet utile et motivant vous attire, rencontrons-nous et pourquoi pas :</p>

                <p>Participez à notre mission d’insertion
                    Devenez accompagnateur
                    Soyez invité à notre prochaine assemblée générale. </p>


                <p>Pour nous joindre : </p>


                <a href="mailto:contact@micromegas01.fr">contact@micromegas01.fr</a>
            </div>
        </section>
    )
}

export default AssociationMicromegas;





