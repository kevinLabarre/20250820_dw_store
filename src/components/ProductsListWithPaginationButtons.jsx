import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "./MyTable";
import { Pagination } from "./Pagination";
import { SelectPagination } from "./SelectPagination";

export const ProductsListWithPaginationButtons = () => {
  const { getPaginate, loading, error } = useProducts();

  const [paginationParams, setPaginationParams] = useState({
    pageIdx: 1,
    itemsPerPage: 5,
  });

  const [responseApi, setResponseApi] = useState({
    first: 1,
    prev: null,
    next: null,
    last: null, // dernière page
    pages: null, // Nbr de pages total
    items: null, //Nbr total d'éléments en BDD
  });

  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    getPaginate(paginationParams.pageIdx, paginationParams.itemsPerPage).then(
      (resp) => setResponseApi(resp.data)
    );
  }, [paginationParams]);

  const handleClickOnPagination = (pageNbr) => {
    setPaginationParams((prev) => {
      return { ...prev, pageIdx: pageNbr };
    });
  };

  // useEffect utilisé pour recalculer les 'options' afficher par le <select></select>
  // On relance le calcul à chaque nouvelle réponse le l'API (donc au chargement initial et a chaque changement de page)
  useEffect(() => {
    const array = Array.from({ length: responseApi.items }, (_, idx) => ({
      value: idx + 1,
      label: `Nombre d'éléments par page ${idx + 1}`,
    }));
    setSelectOptions(array);
  }, [responseApi]);

  const handleSelectChange = (nbrItems) => {
    setPaginationParams({
      pageIdx: 1,
      itemsPerPage: nbrItems,
    });
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
      <div className="w-fit m-auto">
        <SelectPagination
          options={selectOptions}
          onChangeFct={handleSelectChange}
          initialValue={paginationParams.itemsPerPage}
        />
      </div>
    </>
  );
};
