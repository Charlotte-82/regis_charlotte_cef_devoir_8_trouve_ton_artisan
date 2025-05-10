import axios from "axios";

const API_URL = "http://localhost:5000/api/artisans";

export const getTousLesArtisans = () => {
  return axios.get(API_URL);
};

export const getArtisansParCategorie = (categorie) => {
  return axios.get(`${API_URL}?categorie=${categorie}`);
};

export const getArtisanParId = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const getArtisansParSpecialite = (specialite) => {
  return axios.get(`${API_URL}?specialite=${specialite}`);
};

export const getArtisansTop = async () => {
  const response = await fetch("http://localhost:5000/api/artisans/top");
  if (!response.ok) {
    throw new Error("Erreur réseau lors de la récupération des top artisans");
  }
  const result = await response.json();

  return result;
};
