import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";

export const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  const { getById, error } = useProducts();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getById(params.id).then((resp) => setProduct(resp.data));
  }, []);

  return (
    <>
      <h1>Détail des produits</h1>

      <p>{params.id}</p>

      {!error ? (
        <ProductCard product={product} />
      ) : (
        <p>Erreur de chargement des données</p>
      )}
    </>
  );
};
