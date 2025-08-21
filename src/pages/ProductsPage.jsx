import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "../components/MyTable";

export const ProductsPage = () => {
  const {
    getPaginate,
    products: responseObject,
    loading,
    error,
  } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getPaginate();
  };

  useEffect(() => {
    console.log(responseObject);
  }, [responseObject]);

  return (
    <>
      <h1>Mes produits (avec pagination)</h1>
      <MyTable data={responseObject.data} />
    </>
  );
};
