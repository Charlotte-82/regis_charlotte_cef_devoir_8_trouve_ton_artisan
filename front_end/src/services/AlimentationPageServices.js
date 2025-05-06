import axios from "axios";

const API_URL = "http://localhost/api/xxxx";

export const getArtisansAlimentation = () => {
  return axios.get(API_URL);
};
