import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BarreRecherche() {
  const [recherche, setRecherche] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recherche.trim()) {
      navigate(`/construction`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="barreDeRecherche">
      <input
        type="text"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
        }}
      />
      <button
        type="submit"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <i
          className="fas fa-search"
          style={{ color: "#0074c7", fontSize: "1rem" }}
        ></i>
      </button>
    </form>
  );
}

export default BarreRecherche;
