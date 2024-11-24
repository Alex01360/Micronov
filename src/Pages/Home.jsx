import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faAngleLeft, faAngleRight, faBriefcase, faLaptop, faPuzzlePiece, faGraduationCap, faServer, faArrowRight, faRocket, faRecycle } from '@fortawesome/free-solid-svg-icons'
import PhotoAccueil from "../assets/Photo/Accueil-Corrigé.png";
import PhotoAccueil1 from "../assets/Photo/Accueil-1-Corrigé.png";
import Serveur from "../assets/Photo/Serveur info.webp";
import RepriseParc from "../assets/Photo/Reprise de parc-7.png";
import Assistance from "../assets/Photo/Maintenance info-1-1.png";
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';

const Home = () => {
    return (
        <><section>
            <Splide
                options={{
                    perPage: 1,
                    width: '1920px',
                    type: 'loop',
                    pagination: 0,
                }}>

                <SplideSlide>
                    <div className="Slider">
                        <div className="Photo-Difficultés">
                            <img src={PhotoAccueil} width="1920px" />
                        </div>

                        <div className="Texte-Difficultés">
                            <h1>Micronov répond à vos questions ou difficultés informatiques</h1>
                            <p>Au 04 74 22 72 72 Assistance téléphonique pour les clients sous CONTRAT D'ASSISTANCE puis
                                Tapez
                                1/Accueil téléphonique hors assistance Tapez 2 pour avoir un commercial</p>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="Slider">
                        <div className="Photo-Difficultés">
                            <img src={PhotoAccueil1} width="1920px" />
                        </div>

                        <div className="Texte-Difficultés-1">
                            <h1>MICRONOV</h1>
                            <p>L’informatique et le Numérique auprès des Entreprises, Associations et Particuliers</p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </section>

            <section>
                <div className="Container-13">
                    <div className="Container-14">
                        <div className="Texte-Orientation">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <h1>Professionnels/ <br /> Associations</h1>
                            <p> Nous vous conseillons et vous orientons en fonction de vos besoins que nous requalifions
                                ensemble.</p>
                        </div>

                        <div className="Texte-Orientation-1">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <h1>Professionnels/ <br /> Associations</h1>
                            <p> Nous vous conseillons et vous orientons en fonction de vos besoins que nous requalifions
                                ensemble.</p>

                            <NavLink to="/Professionnels">
                                <button>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </NavLink>

                        </div>
                    </div>

                    <div className="Container-14">
                        <div className="Texte-Orientation">
                            <FontAwesomeIcon icon={faLaptop} />
                            <h1>Particuliers</h1>
                            <p>Venez découvrir notre gamme de matériels neufs et rénovés pour vous, selon vos besoins.</p>
                        </div>

                        <div className="Texte-Orientation-1">
                            <FontAwesomeIcon icon={faLaptop} />
                            <h1>Particuliers</h1>
                            <p>Venez découvrir notre gamme de matériels neufs et rénovés pour vous, selon vos besoins.</p>

                            <NavLink to="/Particuliers">
                                <button>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </NavLink>

                        </div>
                    </div>

                    <div className="Container-14">
                        <div className="Texte-Orientation">
                            <FontAwesomeIcon icon={faPuzzlePiece} />
                            <h1>Collectivités et mairies</h1>
                            <p>Nous vous accompagnons dans toutes vos problématiques.</p>
                        </div>

                        <div className="Texte-Orientation-1">
                            <FontAwesomeIcon icon={faPuzzlePiece} />
                            <h1>Collectivités et mairies</h1>
                            <p>Nous vous accompagnons dans toutes vos problématiques.</p>

                            <NavLink to="/Collectivités">
                                <button>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </NavLink>

                        </div>
                    </div>

                    <div className="Container-14">
                        <div className="Texte-Orientation">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <h1>Education</h1>
                            <p>Avec votre Conseiller Numérique, nous vous accompagnons dans l'organisation numérique et
                                informatique de
                                vos
                                classNamees.</p>
                        </div>

                        <div className="Texte-Orientation-1">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <h1>Education</h1>
                            <p>Avec votre Conseiller Numérique, nous vous accompagnons dans l'organisation numérique et
                                informatique de
                                vos
                                classNamees.</p>

                            <NavLink to="/Education">
                                <button>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="Container-15">
                    <div className="Texte-Activités">
                        <h1>Nos activités</h1>
                        <h2>Conseil, assistance, maintenance, location, réparation, rénovation, vente, installation</h2>
                        <p>Informatique PC/portables Mac Linux Windows,
                            Grands écrans tactiles, Tablettes, Solutions logicielles, évolutions, pièces détachées,
                            audio-visioconférence, téléphonie VoIP, Coffres-forts numériques</p>
                    </div>

                    <div className="Container-16">
                        <div className="Container-17">
                            <div className="Titre-Logo-Activités">
                                <h1>Serveurs</h1>
                                <FontAwesomeIcon icon={faServer} />
                            </div>

                            <div className="Texte-Photo-Activités">
                                <p>Nous proposons des serveurs neufs adaptés à vos besoins et à leur évolution mais aussi des
                                    pièces
                                    détachées
                                    pour réparer vos serveurs existants !
                                </p>

                                <img src={Serveur} width="550px" />
                            </div>
                        </div>

                        <div className="Container-17">
                            <div className="Titre-Logo-Activités">
                                <h1>Assistance Maintenance</h1>
                                <FontAwesomeIcon icon={faRocket} />
                            </div>

                            <div className="Texte-Photo-Assistance">
                                <p>Nos contrats d'assistance s'adaptent à vos besoins : contrats annuels, prestations
                                    ponctuelles
                                    sur
                                    devis,
                                    pré-commandes d'heures d'assistance sans date butoir...
                                </p>

                                <img src={Assistance} width="550px" />
                            </div>
                        </div>

                        <div className="Container-17">
                            <div className="Titre-Logo-Activités">
                                <h1>Reprise de parc</h1>
                                <FontAwesomeIcon icon={faRecycle} />
                            </div>

                            <div className="Texte-Reprise">
                                <p>Micronov donne une seconde vie au matériel informatique et vous propose après audit une
                                    revente
                                    possible à
                                    votre personnel. Nous nous inscrivons dans une démarche d'économie circulaire, ce depuis
                                    plus de
                                    25
                                    ans !</p>

                                <img src={RepriseParc} width="550px" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;

