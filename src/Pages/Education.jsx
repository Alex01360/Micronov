import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";

const Education = () => {
  return (

    <>
    <section>
    <PhotoNavigation />

<TitreNavigation
TitreNavigation="Education"/>

<BoutonNavigation
TitreBoutonVavigation="Education"
/>

      <div class="Education">
        <p>Micronov s’appuie sur le partenariat développé avec Microsoft et sur ses 25 ans d’expérience en milieu scolaire
          pour vous proposer une solution complète prête à l’emploi : Ordinateurs neufs ou rénovés sous Windows, écrans
          tactiles grand format multi-touch 65″ ou plus, vidéo-projecteurs courte focale interactif, tableaux blancs avec
          volets, visualisateurs, bornes wifi, serveur NAS, mini-souris, caisses de rechargement de tablettes et de PC
          Portables, armoires de stockage, chariots de rechargement et de transport, socles de chargement et de transport.</p>
        <p>Nous proposons une offre logicielle complète intégrant :</p>

        <ul>
          <li>La suite bureautique LibreOffice ou Microsoft Office Education.</li>
          <li>De nombreux utilitaires.</li>
          <li>Plus de 80 logiciels pédagogiques destinés aux classes maternelles et primaires.</li>
          <li>Une imprimante partagée.</li>
          <li>Un accès Internet partagé sur l’ensemble des postes.</li>
        </ul>

        <p> Nous intervenons aussi pour le paramétrage et la formation à l’utilisation de vidéos projecteurs interactifs et,
          sur demande, toutes les options dont vous avez besoin : antivirus, filtrage du contenu, installation sur site,
          assistance technique, …</p>

        <p>L’ensemble des équipements est préparé et testé dans nos ateliers avant l’installation sur site.</p>
      </div>
    </section></>
  );
};
export default Education;



