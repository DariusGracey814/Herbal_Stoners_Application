import React, { useContext, useEffect, useState } from "react";
import CartUtils from "../../Utils/cartUtils";
import { CartContext } from "../../context/cart-context";

import classes from "./WeedPrices.module.css";

const cartUtils = new CartUtils();

export function SinglePrices({ price }) {
  const { addToCart } = useContext(CartContext);

  const cartItemHandler = (evt) => {
    evt.preventDefault();

    const selectedItem = cartUtils.getSingleItems(evt);

    // Match item with product in stripe
    const stripeFormattedProduct =
      cartUtils.matchItemWithStipeDataExtract(selectedItem);
    // Add updated item to the cart
    addToCart(stripeFormattedProduct);
  };

  return (
    <button className={`${classes["extract-btn"]}`} onClick={cartItemHandler}>
      <p className={classes.weight2}>1g - </p>
      <p className={classes.price2}>${price}</p>
      <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
    </button>
  );
}

function WeedPrices() {
  const [flowerClick, setFlowerClick] = useState(0);

  const { addToCart, items, saveCartToSessionStorage } =
    useContext(CartContext);

  useEffect(() => {
    // Send Cart to session storage function
    saveCartToSessionStorage(items);
  }, [flowerClick, setFlowerClick]);

  const cartItemsHandler = (evt) => {
    evt.preventDefault();
    const selectedFlower = cartUtils.getFlowerInfo(evt);

    addToCart(selectedFlower);
    setFlowerClick((prev) => prev + 1);
  };

  return (
    <div className={classes.prices}>
      <div className={classes["prices-wrapper"]} onClick={cartItemsHandler}>
        <button
          className={`safari-gap--fix1r ${classes["prices-btn"]}`}
          id="i1"
        >
          <p className={classes.weight}>1g</p>
          <p className={classes.price}>$10.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>

        <button
          className={`safari-gap--fix1r ${classes["prices-btn"]}`}
          id="i2"
        >
          <p className={classes.weight}>2g</p>
          <p className={classes.price}>$20.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>

        <button className={`${classes["prices-btn"]}`} id="i3">
          <p className={classes.weight}>3.5g</p>
          <p className={classes.price}>$30.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>

        <button className={`${classes["prices-btn"]}`} id="i4">
          <p className={classes.weight}>7g</p>
          <p className={classes.price}>$65.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>

        <button className={`${classes["prices-btn"]}`} id="i5">
          <p className={classes.weight}>14g</p>
          <p className={classes.price}>$140.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>

        <button className={`${classes["prices-btn"]}`} id="i6">
          <p className={classes.weight}>28g</p>
          <p className={classes.price}>$280.00</p>
          <i className={`fa-solid fa-circle-plus ${classes["price-icon"]}`}></i>
        </button>
      </div>
    </div>
  );
}

export default WeedPrices;
