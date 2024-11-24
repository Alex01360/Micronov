import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";

const MentionLégales = () => {
    return (
        <>
        <section>
        <PhotoNavigation />

<TitreNavigation
TitreNavigation="Mentions légales"
/>

<BoutonNavigation
TitreBoutonVavigation="Mentions légales"
/>

            <div className="Mentions-Légales">
                <h1> Mentions légales du site internet de notre entreprise MICRONOV à Bourg-en-Bresse</h1>
                <p><strong>Ce site est édité par :</strong> MICRONOV</p>
                <p><strong>Capital : </strong>27 440,82 €</p>
                <p><strong>Adresse : </strong>13 AVENUE ARSÈNE D’ARSONVAL 01000 BOURG EN BRESSE (France)</p>
                <p><strong>Téléphone :</strong> (+33) 4 74 22 72 72</p>
                <p><strong>N° Registre du Commerce ou Répertoire des métiers : </strong>6209Z</p>
                <p><strong>N° SIRET de l’établissement :</strong> 419215561 00020</p>
                <p><strong>N° d’assujettissement à la TVA : </strong>FR82419215561</p>
                <p><strong>Référence aux règles professionnelles applicables :</strong> Traitement des déchets d’équipement électrique et
                    électronique</p>
                <p><strong>Qualité de locataire gérant ou gérant mandataire : </strong>Roger SAGE, Gérant</p>
                <p><strong>Directeur de rédaction et de publication :</strong> R. SAGE</p>
                <p>Ce site a été conçu et réalisé par MICRONOV – Apie communication – FAZAE</p>
                <p>Son hébergement est assuré par FAZAE, dans un centre de données situé en France.</p>
            </div>
        </section></>
        );
    };
    export default MentionLégales;
