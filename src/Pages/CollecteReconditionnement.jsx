import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";
import Chariot from "../assets/Photo/Chariot.png";
const CollecteReconditionnement = () => {
    return (
        <section>
            <PhotoNavigation />

            <TitreNavigation
                TitreNavigation="Collecte et reconditionnement" />

            <BoutonNavigation
                TitreBoutonVavigation="Collecte et reconditionnement"
            />

            <div className="Collecte">
                <div className="Titre-Collecte">
                    <h1>Votre partenaire engagé depuis plus de 25 ans pour...</h1>

                </div>

                <div className="Partenaire">
                    <div className="Liste">
                        <div className="Liste-1">
                            <h2>Déployer</h2>
                            <ul>
                                <li>Inventaire / Audit de parc.</li>
                                <li>Enlèvement sur site.</li>
                                <li>Participation au déploiement.</li>
                                <li>Aide au déménagement.</li>
                                <li>Réparation / Mise à niveau.</li>
                                <li>Effacement des données
                                    (simple ou sécurisé conforme aux algorithmes de la défense nationale).</li>
                            </ul>
                        </div>

                        <div className="Liste-1">
                            <h2>Ré-Employer</h2>
                            <ul>
                                <li>2ème vie de vos matériels
                                    à destination de nouveaux besoins spécifiques, de votre personnel,
                                    ou autres.</li>
                                <li>Rachat / Reprise de parc.</li>
                                <li>Réemploi de pièces pour
                                    maintenance ou upgrades machines.</li>
                                <li>Reconditionnement
                                    (ajout, changement de pièces).</li>
                            </ul>
                        </div>

                        <div className="Liste-1">
                            <h2>Recycler</h2>
                            <ul>
                                <li>Reprise et traitement
                                    de 100 % de vos matériels obsolètes.</li>
                                <li>Séparation à la source des polluants
                                    (piles, cartouches, etc.).</li>
                                <li>Démantèlement avec séparation
                                    des différentes fractions au niveau local.</li>
                                <li>Élimination dans les filières agréées
                                    correspondantes (cartes électroniques, câbles, métaux, piles, etc.).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Liste">
                        <div className="Liste-2">
                            <img src={Chariot} width="230px"/>
                            <p>Mise à disposition d'un chariot pour remplissage «au fil de l'eau» et collecte du chariot plein
                            sur simple demande.</p>
                        </div>

                        <div className="Liste-2">
                            <h2>Faciliter</h2>
                            <ul>
                                <li>Renfort ponctuel de vos équipes.</li>
                                <li>Externalisation de tâches
                                    non stratégiques.</li>
                                <li>Externalisation des reventes
                                    au personnel.</li>
                            </ul>
                        </div>

                        <div className="Liste-2">
                            <h2>Eco-Structure</h2>
                            <ul>
                                <li>Réduction maximale
                                    de l'empreinte environnementale :
                                    statistiques annuelles pour bilan RSE
                                    (Responsabilité Sociétale des Entreprises).</li>
                                <li>Travaux effectués par des salariés
                                    en insertion du territoire.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="Liste">
                        <div className="Liste-3">
                            <h2>Collecte:</h2>
                            <p>27 tonnes de matériels obsolètes ont <br /> été collectées gràce a vous en 2022</p>
                        </div>

                        <div className="Liste-3">
                            <h2>Reconditionnement:</h2>
                            <p>Revente au personnel <br /> réemploi recyclage valorisation</p>
                        </div>

                        <div className="Liste-3">
                            <h2>Insertion:</h2>
                            <p>4 emplois équivalents <br /> temps plein en insertion</p>
                        </div >
                    </div>
                </div>
            </div>
        </section>


    );
};



export default CollecteReconditionnement;