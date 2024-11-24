import BoutonNavigation from "../Composants/BoutonNavigation";
import PhotoNavigation from "../Composants/PhotoNavigation";
import TitreNavigation from "../Composants/TitreNavigation";
import Localisation from "../assets/Photo/Localisation.png";

const InfosPratiques = () => {
  return (
    <><section>
      <PhotoNavigation />

      <TitreNavigation
        TitreNavigation="Infos pratiques" />

      <BoutonNavigation
        TitreBoutonVavigation="Infos pratiques" />
    </section>

      <section>
        <div className="Localisation">
          <div className="Texte-Localisation">
            <p>Nos locaux sont ouverts du lundi au vendredi de 9h00 à 12h00, et de 14h00 à 18h30, ainsi que le samedi de 9h00 à 12h00.</p>
            <p>13 avenue d’Arsonval </p>
            <p>01000 BOURG EN BRESSE</p>
          </div>

          <div className="Photo-Localisation">
            <img src={Localisation} width="1000px" />
          </div>

          <div className="Lien-Localisation">
<button>
<a href="https://www.google.com/maps/place/Micronov/@46.216516,5.21979,17z/data=!4m6!3m5!1s0x47f35225b763e20b:0x94901fe9d63b821c!8m2!3d46.2165159!4d5.2197904!16s%2Fg%2F1tfqq90b?hl=fr&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D" target="_blank"><h1>Agrandir le plan</h1></a>
</button>
          
          <button>
          <a href="https://www.google.com/maps/dir//Micronov+13+av+Ars%C3%A8ne+d'Arsonval+CENORD+01000+Bourg-en-Bresse/@46.2165159,5.2197904,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47f35225b763e20b:0x94901fe9d63b821c!2m2!1d5.2197904!2d46.2165159?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D" target="_blank"><h1>Itinéraire</h1></a>
          </button>
          </div>
        </div>
      </section></>
  )
}
export default InfosPratiques;