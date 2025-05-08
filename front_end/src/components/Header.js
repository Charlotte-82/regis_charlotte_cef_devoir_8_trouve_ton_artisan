import React from "react";
import Architecte from "../assets/images/architecte.png";
import Logo from "../assets/images/Logo.png";
import Arrow from "../assets/images/down-arrow.png";

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
        <div
          style={{
            maxWidth: "300px",
            border: "none",
            borderBottom: "1px solid #0074c7",
            borderRight: "solid 1px #0074c7",
            outline: "none",
            padding: "5px 8px",
            width: "250px",
            marginBottom: "5px",
          }}
        >
          <input type="text" style={{ border: "none" }} />
          <span>
            <i
              className="fas fa-search"
              style={{
                color: "#0074c7",
                paddingBottom: "0.5em",
              }}
            ></i>
          </span>
        </div>
        {/* barre de navigation */}
        <div className="menu">
          <a href="/alimpage">Alimentation</a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/construction">Bâtiment</a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/construction">Fabrication</a>
          <span>
            <img
              src={Arrow}
              alt="icône de flêche vers le bas"
              className="iconeMenu"
            />
          </span>
          <a href="/construction">Services</a>
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
