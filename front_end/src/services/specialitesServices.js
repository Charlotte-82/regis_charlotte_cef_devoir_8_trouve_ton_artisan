export const getSpecialitesByCategorie = async (categorie) => {
  const response = await fetch(
    `http://localhost:5000/api/specialites/par-categorie/${categorie}`
  );
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des spécialités");
  }
  return await response.json();
};
