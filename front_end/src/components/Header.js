import React from "react";
import "../assets/css/Header.css";
import Architecte from "../assets/images/architecte.png";
import Logo from "../assets/images/Logo.png";

function Header() {
  return (
    <div>
      <img src={Architecte} className="architecte" alt="icône d'artisan" />
      <img src={Logo} className="logo" alt="Trouve ton artisan!" />
    </div>
  );
}

export default Header;
