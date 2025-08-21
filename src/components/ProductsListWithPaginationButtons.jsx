import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "./MyTable";
import { Pagination } from "./Pagination";

export const ProductsListWithPaginationButtons = () => {
  const { getPaginate, loading, error } = useProducts();

  const [page, setPage] = useState(1);

  const [responseApi, setResponseApi] = useState({
    first: 1,
    prev: null,
    next: null,
    last: null, // dernière page
    pages: null, // Nbr de pages total
    items: null, //Nbr total d'éléments en BDD
  });

  useEffect(() => {
    getPaginate(page).then((resp) => setResponseApi(resp.data));
  }, [page]);

  const handleClickOnPagination = (pageNbr) => {
    setPage(pageNbr);
  };

  return (
    <>
      <MyTable data={responseApi.data} />

      {responseApi.pages && (
        <Pagination
          nbrButtons={responseApi.pages}
          handleClick={handleClickOnPagination}
        />
      )}
    </>
  );
};
