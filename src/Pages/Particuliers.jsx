import PhotoNavigation from "../Composants/PhotoNavigation"
import BoutonNavigation from "../Composants/BoutonNavigation";
import TitreNavigation from "../Composants/TitreNavigation";

const Particuliers = () => {
    return (
        <><section>
        <PhotoNavigation />

<TitreNavigation
TitreNavigation="Particuliers"/>

     <BoutonNavigation 
    TitreBoutonVavigation="Particuliers"/>
     
            <div class="Particuliers">
                <h1>Vous souhaitez changer de matériel ?</h1>
                <p>Nous proposons une large gamme de configurations neuves ainsi que du matériel reconditionné adapté à vos besoins et budgets.</p>

                <h1>Optimiser votre système ?</h1>
                <p>Nous améliorons et paramétrons votre machine pour une efficacité maximale.</p>

                <h1>Faire une réparation de l’un de vos équipements ?</h1>
                <p>Un écran qui ne fonctionne plus, votre ordinateur ne démarre plus ? Nous avons une solution pour vous.</p>

                <p>Et bien plus encore ; sauvegarde/récupération de fichiers, antivirus, filtrage du contenu, installation sur site, assistance technique, sécurité parentale…</p>

                <p>Vous avez un besoin ponctuel : nous louons du matériel pour une journée, une semaine, un mois, trois mois : </p>
                <p>– Vidéo-projecteurs haute définition</p>
                <p>– Systèmes de numérisation de vos diapositives (avec le PC portable, le logiciel et le scanner de diapositives)</p>
                <p>Vous pouvez déposer gratuitement vos vieux matériels qui pourront, peut-être, servir en pièces détachées (écran, clavier notamment) ou avoir une seconde vie ici ou ailleurs.
                    Dans tous les cas, vos disques durs pourront, sur option, être extraits et vous être remis en boîtier externe !</p>
            </div>
        </section></>
    );
};
export default Particuliers 
    ;


