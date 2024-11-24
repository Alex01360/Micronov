import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";

import React from 'react'

const Contact = () => {
    return (
        <><section>
            <PhotoNavigation />

            <TitreNavigation
                TitreNavigation="Contact" />

            <BoutonNavigation
                TitreBoutonVavigation="Contact" />
        </section>

            <section>
                <form>
                    <div className="Nom">
                        <label for="">Votre Nom</label>
                        <input type="text" />
                    </div>

                    <div className="Mail">
                        <label for="">Votre E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="Objet">
                        <label for="">Objet</label>
                        <input type="text" />
                    </div>

                    <div className="Message">
                        <label for="">Votre Message (Facultatif)</label>
                       <textarea name="Message"></textarea>
                    </div>

                    <button>
                <a href="mailto:roger.sage@micronov.com"><p>Envoyer</p></a>  
                </button>
                </form>
            </section></>
    )
}

export default Contact