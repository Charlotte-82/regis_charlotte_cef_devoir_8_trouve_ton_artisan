export const getVillesBySpecialite = async (specialite) => {
  const response = await fetch(
    `http://localhost:5000/api/villes/par-specialite/${specialite}`
  );
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des villes");
  }
  return await response.json();
};
