import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const BoutonNavigation = ({TitreBoutonVavigation}) => {
  return (
      <button className="Bouton-Navigation">
        <NavLink to="/home">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>

        <p>{TitreBoutonVavigation}</p>
      </button>
  );
};

export default BoutonNavigation;
