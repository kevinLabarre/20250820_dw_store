import axios from "axios";
import { useState } from "react";

export const useFirstProducts = () => {
  const endpoint = "http://localhost:3001/products";

  // Création d'une instance d'axios
  const api = axios.create({
    baseURL: endpoint,
  });

  // Rajouter une délai sur les réponses des requêtes
  api.interceptors.request.use(
    (config) =>
      new Promise((resolve) => setTimeout(() => resolve(config), 1500))
  );

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    setError(null);

    return api
      .get()
      .then((resp) => {
        setProducts(resp.data);
        return resp;
      })
      .catch((err) => {
        setError(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const getById = (id) => {
    setLoading(true);

    return api
      .get(`/${id}`)
      .then((resp) => resp)
      .catch((err) => {
        setError(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const getPaginate = (pageIdx = 1, perPage = 10) => {
    const url = `/?_page=${pageIdx}&_per_page=${perPage}`;
    setLoading(true);
    setError(null);

    return api
      .get(url)
      .then((resp) => {
        setProducts(resp.data);
        return resp;
      })
      .catch((err) => {
        setError(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const updateProduct = (product) => {
    return api
      .put(`/${product.id}`, product)
      .then((resp) => resp)
      .catch((err) => {
        throw err;
      });
  };

  return {
    getProducts,
    products,
    error,
    loading,
    getById,
    getPaginate,
    updateProduct,
  };
};
