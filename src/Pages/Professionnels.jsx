import PhotoNavigation from "../Composants/PhotoNavigation";
import BoutonNavigation from "../Composants/BoutonNavigation";
import TitreNavigation from "../Composants/TitreNavigation";
import ArrièrePlan from "../Composants/ArrièrePlan";

const Professionnels = () => {
    return (

        <>
            <section>
                <PhotoNavigation />

                <TitreNavigation
                    TitreNavigation="Professionnel et Associations" />

                <BoutonNavigation
                    TitreBoutonVavigation="Professionnels et Associations" />
            </section>

            <section>
            <ArrièrePlan
Arrière_Plan=""/>


                <div className="Professionnels">
                    <h1>Vous voulez faire évoluer votre système informatique ?</h1>
                    <p>Nous sommes à vos côtés dès l’origine de votre projet pour :</p>

                    <ul>
                        <li> Analyser vos besoins</li>
                        <li> Définir vos priorités</li>
                        <li> Sécuriser vos données</li>
                        <li> Sécuriser votre messagerie et vos accès internet</li>
                        <li> Intégrer à bon escient les nouvelles technologies</li>
                    </ul>

                    <p>Durant toute la vie de votre réseau, nous répondons présents à chacune de vos demandes :</p>

                    <ul>
                        <li> Assistance par téléphone, e-mail ou sur site</li>
                        <li> Mise à jour des logiciels</li>
                        <li> Évolution des matériels</li>
                        <li> Maintenance du matériel en atelier ou/et sur site</li>
                        <li> Prestations sur mesure</li>
                    </ul>


                    <p> Parmi les technologies utilisées :</p>

                    <ul>
                        <li> Windows Serveur, Active Directory, Système RAID, TSE/RDS</li>
                        <li> ADSL/SDSL/Fibre optique, antivirus, Firewall, filtrage de contenu, IDP</li>
                        <li> Routeurs, VPN, NAT, DMZ</li>
                        <li> Sauvegardes DAT, sauvegardes à distance</li>
                        <li> Bornes WiFi,</li>
                        <li> Switchs manageables</li>
                        <li> Téléphonie VoIP</li>
                    </ul>

                    <h1> Vous choisissez avec l’éclairage nécessaire, nous réalisons l’intégration de vos matériels et logiciels.
                    </h1>
                    <p> L’intervention sur site se doit d’être la plus courte possible. Dans ce but, nous effectuons un maximum de
                        préparations en atelier, que ce soit pour les serveurs, les postes de travail, les équipements réseau
                        (routeurs,
                        …),
                        ou les périphériques.</p>
                    <p> Parmi les prestations réalisées :</p>

                    <ul>
                        <li> Configuration et installation serveur</li>
                        <li> Applications réseau</li>
                        <li> Prise en main à distance</li>
                        <li> Accès internet en réseau sécurisé</li>
                        <li> Architecture et sécurisation des données</li>
                        <li> Récupération et transfert de données</li>
                        <li> Installation de clients légers</li>
                        <li> Configuration de points d’accès</li>
                        <li> Sécurisation de réseaux WiFi</li>
                        <li> Audit de parcs, audit sécurité, audit RGPD</li>
                        <li> Formation sur mesure</li>
                        <li> Administration réseau</li>
                        <li> Infogérance</li>
                        <li> Maintenance du matériel, en atelier et sur site</li>
                        <li> Assistance aux utilisateurs</li>
                        <li> Location courte pour tester une solution de visio-conférence ou audio-conférence et longue durée
                            (financement d’un système de téléphonie VoIP complet)</li>
                        <li> Démarrage de coffre-fort numérique Entreprises ou Associations ou Auto-entrepreneurs</li>
                    </ul>
                </div>
            </section>
            </>

    );
};
export default Professionnels;



