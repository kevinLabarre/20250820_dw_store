import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

export const HomePage = () => {
  // const [products, setProducts] = useState([]);

  const { getProducts, products } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    // SANS LE HOOK PERSO
    // axios
    //   .get("http://localhost:3001/products")
    //   .then((resp) => {
    //     console.log(resp.data);
    //     setProducts(resp.data);
    //   })
    //   .catch((err) => console.error("Une erreur est survenue", err));

    // getProducts()
    //   .then((resp) => {
    //     console.log(resp.data);
    //     setProducts(resp.data);
    //   })
    //   .catch((err) => console.error("Une erreur est survenue", err));

    getProducts(); // SI on déplace le useState dans le hook
  };

  return (
    <>
      <h1>Accueil</h1>
      <h2>Nos produits</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((p) => <ProductCard product={p} key={p.id} />)
        ) : (
          <p>Chargement des produits ...</p>
        )}
      </div>
    </>
  );
};
