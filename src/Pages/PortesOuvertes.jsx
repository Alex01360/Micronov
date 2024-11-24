import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";
import PorteOuverte from "../assets/Photo/Porte ouverte-1.png"
const PortesOuvertes = () => {
  return (

    <><section>
      <PhotoNavigation />

      <TitreNavigation
        TitreNavigation="Portes Ouvertes le 18 Juin 2024" />

      <BoutonNavigation
        TitreBoutonVavigation="MICRONOV remet les Trophées Ordi 3.0" />
    </section>

      <section>
        <div className="Porte-Ouvertes">
          <img src={PorteOuverte} width="800px" />

          <button>
            <a href="https://rsp.fr/" target="_blank"><h1>Inscription et programme</h1></a>
          </button>
        </div>
      </section>
    </>
  );
};

export default PortesOuvertes;