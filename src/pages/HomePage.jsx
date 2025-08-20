import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data);
      })
      .catch((err) => console.error("Une erreur est survenue", err));
  };

  return (
    <>
      <h1>Accueil</h1>
      <h2>Nos produits</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </>
  );
};
