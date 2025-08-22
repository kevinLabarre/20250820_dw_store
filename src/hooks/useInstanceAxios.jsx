import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useInstanceAxios = () => {
  const url = import.meta.env.VITE_API_URL;

  console.log("URL via .env -> ", url);

  const navigate = useNavigate();

  // Création d'une instance d'axios
  const api = axios.create({
    baseURL: url,
  });

  // Intercepteur de requête
  // -> Intercepte touts les requête qui sont ENVOYE depuis l'application
  api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Pour injecter un token dans l'en-tête de la requete
    }

    return new Promise((resolve) => setTimeout(() => resolve(config), 1500));
    // return config  // Pour ne pas utiliser le délai
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },

    (error) => {
      if (error.response) {
        const status = error.response.status;

        if (status === 401 || status === 403) {
          sessionStorage.removeItem("token");
          navigate();
        }
      }
    }
  );

  return api;
};
