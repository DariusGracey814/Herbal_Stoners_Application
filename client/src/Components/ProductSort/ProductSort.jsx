import React, { useContext } from "react";
import { SortContext } from "../../context/sort-context";
import { Form, Button } from "react-bootstrap";

function ProductSort(props) {
  const { setSortProducts, sort } = useContext(SortContext);

  const sortHandler = (evt) => {
    setSortProducts();
  };

  return (
    <button id="sortBtn" onClick={sortHandler}>
      Sort Products
    </button>
  );
}

export default ProductSort;
