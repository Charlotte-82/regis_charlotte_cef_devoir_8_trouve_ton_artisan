import Architecte from "../assets/images/architecte.png";
import Logo from "../assets/images/Logo.png";
import Arrow from "../assets/images/down-arrow.png";
import BarreRecherche from "./BarreRechercheHeader";

function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-start px-3 py-2"
      style={{ boxShadow: "1px 2px 10px 2px lightgrey" }}
    >
      <div className="d-flex align-items-center">
        <a href="/">
          <img src={Architecte} className="architecte" alt="icône d'artisan" />
          <img src={Logo} className="logo" alt="Trouve ton artisan!" />
        </a>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-end">
        {/* barre de recherche */}
        <BarreRecherche />
        {/* barre de navigation */}
        <div className="menu">
          <a href="/par-categorie/alimentation" className="menuItem">
            Alimentation
          </a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/par-categorie/batiment" className="menuItem">
            Bâtiment
          </a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/par-categorie/fabrication" className="menuItem">
            Fabrication
          </a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/par-categorie/services" className="menuItem">
            Services
          </a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
