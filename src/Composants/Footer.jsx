import Smart from "../assets/Photo/Smart-electrique.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="Footer">
                    <div className="Colonne-Contact-Informations">
                        <div className="Contact">
                            <div className="Texte-Contact">
                                <h1>Contact</h1>
                            </div>

                            <div className="Information-Contact">
                                <div className="Icone-Texte-Contact">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>04 74 22 72 72</p>
                                </div>

                                <div className="Icone-Texte-Contact">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>contact@micronov.com</p>
                                </div>

                                <div className="Icone-Texte-Contact">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p> 13 avenue d'Arsonval
                                        01000 Bourg en Bresse</p>
                                </div>
                            </div>
                        </div>

                        <div className="Information">
                            <div className="Texte-Informations">
                                <h1>Informations</h1>
                            </div>

                            <div className="Rubriques-Informations">
                                <div className="Icone-Texte-Informations">

                                    <NavLink to="./Presse">
                                        <p>Presse</p>
                                    </NavLink>

                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>

                                <div className="Icone-Texte-Informations">
                                    <NavLink to="./MentionLégales">
                                        <p>mention légales</p>
                                    </NavLink>

                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>

                                <div className="Icone-Texte-Informations">
                                    <NavLink to="./Cookies">
                                        <p>Charte des cookies</p>
                                    </NavLink>

                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Voiture">
                        <img src={Smart} width="300px" />
                        <p>Copyright © 2024 Micronov</p>
                    </div>
                </div>

            </section>
        </footer>
    )
}
export default Footer;

