import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "../components/MyTable";
import { ProductsListWithPaginationButtons } from "../components/ProductsListWithPaginationButtons";
import { useSelector } from "react-redux";

export const ProductsPage = () => {
  const count = useSelector((state) => state.counter.value);

  const { getPaginate, loading, error } = useProducts();

  const [responseApi, setResponseApi] = useState({
    first: 1,
    prev: null,
    next: null,
    last: null, // dernière page
    pages: null, // Nbr de pages total
    items: null, //Nbr total d'éléments en BDD
  });

  useEffect(() => {
    loadProducts(1);
  }, []);

  const loadProducts = (pageNbr) => {
    getPaginate(pageNbr, 10).then((resp) => {
      console.log("resp", resp);
      setResponseApi(resp.data);
    });
  };

  const handlePrev = () => {
    if (responseApi.prev) loadProducts(responseApi.prev);
  };
  const handleNext = () => {
    if (responseApi.next) loadProducts(responseApi.next);
  };

  return (
    <>
      <h1>Compteur redux : {count}</h1>
      <h1>Mes produits (avec pagination)</h1>
      <MyTable data={responseApi.data} />

      <div className="flex w-fit m-auto">
        <button
          disabled={!responseApi.prev}
          onClick={handlePrev}
          className="btn btn-primary mr-2"
        >
          précédent
        </button>

        {responseApi.data && (
          <>
            page n°
            {responseApi.prev ? responseApi.prev + 1 : responseApi.next - 1}
          </>
        )}

        <button
          disabled={!responseApi.next}
          onClick={handleNext}
          className="btn btn-primary ml-2"
        >
          suivant
        </button>
      </div>

      <section className="border-t mt-5">
        <h2>Exemple n°2</h2>
        <ProductsListWithPaginationButtons />
      </section>
    </>
  );
};
