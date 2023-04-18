import React, { useContext } from "react";
import { SortContext } from "../../context/sort-context";
import { Form } from "react-bootstrap";

function ProductSort(props) {
  const { setSortProducts, sort } = useContext(SortContext);

  const sortHandler = (evt) => {
    const sortPreference = evt.target.value;

    if (sortPreference.toLowerCase() === "no sort") {
      setSortProducts(false);
    } else if (sortPreference.toLowerCase() === "product name") {
      setSortProducts(true);
    } else {
      return "Invalid sort option";
    }
  };

  return (
    <Form.Select
      className={props.class}
      aria-label="Default select example"
      onClick={sortHandler}
    >
      <option value="No sort">No Sort</option>
      <option value="Product Name">Product Name</option>
    </Form.Select>
  );
}

export default ProductSort;
