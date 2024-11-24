import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import LogoMicronov from "../assets/Photo/Logo-Micronov.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <div className="Header">
                <div className="Container-2">
                    <div className="Container-3">
                        <div className="Container-4">
                            <FontAwesomeIcon icon={faClock} />

                            <div className="Texte-Horaires">
                                <h1>Horaire</h1>
                                <p>Du lundi au vendredi de 9h-12h 14h-18h <br />
                                    Samedi 9h00-12h00</p>
                            </div>
                        </div>

                        <div className="Container-5">
                            <FontAwesomeIcon icon={faPhone} />

                            <div className="Texte-Assistance">
                                <h1>Assistance:</h1>
                                <p>04 74 22 72 72</p>
                            </div>
                        </div>
                    </div>

                    <div className="Container-6">
                        <a href="https://get.anydesk.com/BcsBBaoH/AnyDesk_Micronov.exe">
                            <button>
                                <h1>Logiciel de support à distance</h1>
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="Container-8">
                    <div className="Logo-Micronov">
                        <NavLink to="/home">
                            <img src={LogoMicronov} width="130px" />
                        </NavLink>
                    </div>

                    <div className="Container-9">
                        <div className="Container-10">
                            <div className="Titre-Vous-Etes">
                                <h1>Vous êtes</h1>
                            </div>

                            <div className="Texte-Vous-Etes">
                                <NavLink to="/Professionnels">
                                    <p>Professionnels et associations</p>
                                </NavLink>

                                <NavLink to="/Particuliers">
                                    <p>Particuliers</p>
                                </NavLink>

                                <NavLink to="/Education">
                                    <p>Education</p>
                                </NavLink>

                                <NavLink to={"/Collectivités"}>
                                    <p>Collectivités et mairies</p>
                                </NavLink>
                            </div>
                        </div>

                        <div className="Titre-Coffre-Fort">
                            <NavLink to="/CoffreFort">
                                <h1>Coffre-Fort numérique</h1>
                            </NavLink>
                        </div>

                        <div className="Container-11">
                            <div className="Titre-Eco-Système">
                                <h1>L'éco-système Micronov</h1>
                            </div>

                            <div className="Texte-Eco-Système">
                                <NavLink to="/AssociationMicromegas">
                                    <p>L'association MICROMEGAS</p>
                                </NavLink>

                                <NavLink to="/CollecteReconditionnement">
                                    <p>Collecte et reconditionnement</p>
                                </NavLink>

                                <NavLink to="/PortesOuvertes">
                                    <p>
                                        Portes Ouvertes le 18 juin 2024-MICRONOV fête ses 26 ans et remet
                                        les trophées Ordi 3.0
                                    </p>
                                </NavLink>

                                <NavLink to="/InfosPratiques">
                                <p>Info pratiques</p>
                                </NavLink>
                            </div>
                        </div>

                        <div className="Titre-Contact">
                        <NavLink to="/Contact">
                            <h1>Contact</h1>
                            </NavLink>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Header;
