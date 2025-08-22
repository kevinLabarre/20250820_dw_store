import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { MyModal } from "../components/MyModal";
import { MyTable } from "../components/MyTable";

export const CartPage = () => {
  const products = useSelector((state) => state.cart.value);

  return (
    <>
      <h1>Mon panier de produits (exemple Redux)</h1>

      {products.length > 0 && products.map((p) => <ProductCard product={p} />)}

      <MyModal />
      <MyTable />
    </>
  );
};
