import React, { useContext } from "react";
import { SortContext } from "../../context/sort-context";

function ProductSort(props) {
  const { setSortProducts, sort } = useContext(SortContext);

  const sortHandler = () => {
    setSortProducts();
  };

  return (
    <button id="sortBtn" onClick={sortHandler}>
      Sort Products
    </button>
  );
}

export default ProductSort;
