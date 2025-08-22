import axios from "axios";
import { useState } from "react";
import { useInstanceAxios } from "./useInstanceAxios";

export const useProducts = () => {
  const api = useInstanceAxios();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await requestFunction(...args);
      setProducts(response.data);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const getProducts = () => handleRequest(api.get, "/products");
  const getById = (id) => handleRequest(api.get, `/products/${id}`);
  const getPaginate = (pageIdx = 1, perPage = 10) => {
    const url = `/products/?_page=${pageIdx}&_per_page=${perPage}`;
    return handleRequest(api.get, url);
  };
  const updateProduct = (product) =>
    handleRequest(api.put, `/products/${product.id}`, product);

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
