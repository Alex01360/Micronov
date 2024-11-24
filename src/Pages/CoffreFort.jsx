import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp, faArrowLeft, faArrowDown, } from "@fortawesome/free-solid-svg-icons";
import Coffre from "../assets/Photo/CoffreFort.png";
import TitreNavigation from "../Composants/TitreNavigation";
import ArrièrePlan from "../Composants/ArrièrePlan";
const CoffreFort = () => {
      return (
            <><section>
                  <PhotoNavigation />

                  <TitreNavigation
                        TitreNavigation="Coffre-Fort numérique" />

                  <BoutonNavigation
                        TitreBoutonVavigation="Coffre-Fort numérique" />

                  <div className="Page-Coffre-Fort-Numérique">
                        <div className="Construire">
                              <h1>CONSTRUIRE, CONSULTER, TRANSMETTRE SON PATRIMOINE NUMÉRIQUE ...</h1>
                              <h2>DES SOLUTIONS D'ORGANISATION AUTOUR DE VOUS, POUR VOUS</h2>
                        </div>

                        <div className="Proche">
                              <p>Proches et conjoint</p>
                              <FontAwesomeIcon icon={faArrowDown} />
                        </div>

                        <div className="Solutions">
                              <div className="Gestionnaire-Cabinet-Assistant">
                                    <div className="Texte-Gestionnaire">
                                          <p>Gestionnaire de patrimoine</p>
                                          <FontAwesomeIcon icon={faArrowRight} />
                                    </div>

                                    <div className="Texte-Cabinet">
                                          <p>Cabinet d'avocats</p>
                                          <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                              </div>

                              <div className="Coffre-Fort">
                                    <h2>Coffre-Fort Privé</h2>
                                    <p>
                                          Un outil fiable pour sécuriser et gérer ses données avec ses proches
                                    </p>

                                    <h2>Les +</h2>

                                    <ul>
                                          <li>Biens et garanties (devis, garanties décennales, ... )</li>
                                          <li>Bulletins de paie</li>
                                          <li>Déclaration d'impôts(avec collecteur)</li>
                                          <li>Factures (avec callecteur)</li>
                                          <li>Véhicules</li>
                                          <li>Animaux</li>
                                          <li>Identité</li>
                                          <li>Donations</li>
                                    </ul>
                              </div>

                              <div className="Enfants-Conseil-Expertise">
                                    <div className="Texte-Enfants">
                                          <FontAwesomeIcon icon={faArrowLeft} />
                                          <p>Enfants</p>
                                    </div>

                                    <div className="Texte-Conseil">
                                          <FontAwesomeIcon icon={faArrowLeft} />
                                          <p>Conseil immobilier</p>
                                    </div>
                              </div>
                        </div>

                        <div className="Assistant-Assureurs-Expertise">
                              <div className="Texte-Assistant">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>Assistant numérique</p>
                                    <FontAwesomeIcon icon={faArrowDown} />
                              </div>

                              <div className="Texte-Assureurs">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>Assureurs</p>
                                    <FontAwesomeIcon icon={faArrowDown} />
                              </div>

                              <div className="Texte-Expertise">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>Cabinet expertise comptable</p>
                                    <FontAwesomeIcon icon={faArrowDown} />
                              </div>
                        </div>


                        <div className="Solutions">
                              <div className="Associés-Partenaire">
                                    <div className="Texte-Associés-Partenaire">
                                          <p>Associés</p>
                                          <FontAwesomeIcon icon={faArrowRight} />
                                    </div>

                                    <div className="Texte-Associés-Partenaire">
                                          <p>Autre partenaire</p>
                                          <FontAwesomeIcon icon={faArrowRight} />
                                    </div>

                                    <div className="Texte-Associés-Partenaire">
                                          <p>Partenaire informatique</p>
                                          <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                              </div>

                              <div className="Coffre-Fort">
                                    <h2>Coffre-Fort Pro</h2>
                                    <p>Un service agile, moteur de la transformation des entreprises</p>

                                    <h2>les +</h2>
                                    <ul>
                                          <li>Alertes</li>
                                          <li>Assemblées générales</li>
                                          <li>Signature électronique </li>
                                          <li>liasses fiscales</li>
                                          <li>Factures</li>
                                          <li>RH (contrats,bulletins)</li>
                                    </ul>
                              </div>

                              <div className="Gestionnaire-Commissaire">
                                    <div className="Texte-Gestionnaire-Commissaire">
                                          <FontAwesomeIcon icon={faArrowLeft} />
                                          <p>Gestionnaire de paie</p>
                                    </div>

                                    <div className="Texte-Gestionnaire-Commissaire">
                                          <FontAwesomeIcon icon={faArrowLeft} />
                                          <p>Commissaire aux comptes</p>
                                    </div>
                              </div>
                        </div>


                        <div className="Partage-Adhérents">
                              <div className="Texte-Partage">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>Partage d'information partenaires</p>
                              </div>

                              <div className="Texte-Adhérents">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                    <p>Adhérents</p>
                              </div>
                        </div>
                  </div>
            </section>

                  <section>
                        <div className="Bon-à-Savoir">
                              <h1>Bon a savoir</h1>
                              <p>
                                    Les données numériques que vous produisez sont-elles stockées
                                    exclusivement en France ou bien hors de France et où précisément ?
                              </p>

                              <p>
                                    Vos données numériques intéressent des entreprises qui en connaissent la
                                    valeur d'exploitation marketing, politique, patrimoniale voire de
                                    revente.
                              </p>

                              <p>
                                    Il est important de s'appuyer sur des acteurs qui construisent un
                                    éco-système qui permet à chacun de conserver la PROPRIÉTÉ de ses
                                    Informations, DONNÉES, DOCUMENTS, IMAGES qui constituent son PATRIMOINE
                                    NUMÉRIQUE.
                              </p>

                              <p>
                                    Le numérique est source de pollution (un e-mail standard génère environ
                                    4 g de C02; avec une pièce jointe volumineuse, il produit jusqu'à 50 g
                                    de C02. Envoyer une photo de 1 Mo à dix personnes équivaut ainsi à
                                    parcourir 500 mètres en voiture). Les anciens datacenters mais aussi les
                                    nouveaux ne sont pas du tout vertueux et très consommateurs d'énergie.
                              </p>

                              <p>
                                    Il est important de s'affranchir peu à peu des extranets qu'on nous
                                    impose ou conseille : si nous avons 2 banques, 1 expert-comptable, 1
                                    gestionnaire de paie, 1 partenaire d'informatique ... on a autant ou
                                    plus d'accès à des extranets ... et une multitude de mots de passe et de
                                    datas centers pour stocker tout cela.
                              </p>
                        </div>


                        <div className="Coffre-Fort-Numérique">
                              <div className="Texte-Coffre">
                                    <h1>La solution coffre-fort numérique</h1>

                                    <p>Des solutions pensées pour :</p>

                                    <ul>
                                          <li>
                                                Stocker ses liens extranets / identifiants / mots de passe et process.
                                          </li>
                                          <li>Gérer ses documents d'auto-entrepreneur.</li>
                                          <li>Organiser sa fin de vie et faciliter le travail du notaire.</li>
                                          <li>Mettre ses contrats signés et ses alertes de renouvellement.</li>
                                          <li>Gérer ses biens et les documents attachés.</li>
                                          <li>
                                                Accéder à ses informations où que l'on se trouve et sur tout support
                                                (smartphone, tablette, PC ou Mac ...).{" "}
                                          </li>
                                    </ul>

                                    <p>respect des consignes RGPD* et des agréments Afnor</p><p>
                                          Le service GererMesAffaires est exigeant sur tous les aspects de
                                          sécurité
                                    </p>

                                    <p>NF203 CCFN (Coffre-fort numérique):</p>

                                    <p>
                                          GererMesAffaires est conforme aux exigences de la marque NF Logiciel,
                                          certifiée par AFNOR Certification.
                                    </p>

                                    <p> La technologie utilisée permet :</p>

                                    <ul>
                                          <li>La bonne conformité de l'entreprise au RGPO</li>
                                          <li>
                                                La continuité d'accès et la protection contre la perte de données
                                          </li>
                                          <li>le contrôle d'accès et la confidentialité</li>
                                    </ul>

                                    <p>
                                          GererMesAffaires garantit un hébergement 100% souverain, toutes les
                                          données restent sur le territoire français.
                                    </p>
                              </div>

                              <div className="Photo-Lien-Coffre">
                                    <img src={Coffre} width="1000px" />

                                    <button>
                                          <a href="https://www.gerermesaffaires.com/" target="_blank"><p>En savoir plus</p></a>
                                    </button>
                              </div>
                        </div>
                  </section></>
      );
};

export default CoffreFort;
