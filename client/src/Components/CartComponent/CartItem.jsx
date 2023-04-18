import React, { useContext, useEffect } from "react";
import CartUtils from "../../Utils/cartUtils";
import { CartContext } from "../../context/cart-context";
import { Card } from "react-bootstrap";

import classes from "./cartItem.module.css";
import img from "../../Assets/Extracts/extract6.jpg";

function CartItem({
  title,
  imageSrc,
  breeder,
  weight,
  quantity,
  info,
  id,
  price,
}) {
  const {
    deleteFromCart,
    items,
    setCart,
    addOneExistingItem,
    deleteAllProducts,
  } = useContext(CartContext);

  const cartUtils = new CartUtils();

  const cartTitle = `${title} | ${breeder}`;

  useEffect(() => {
    setCart(items);
  }, [items, setCart]);

  const deleteHandler = (evt) => {
    const selectedItem = cartUtils.deleteItemInfo(evt);
    deleteFromCart(selectedItem);
  };

  const increaseCartHandler = (evt) => {
    const selectedItem = cartUtils.deleteItemInfo(evt);
    addOneExistingItem(selectedItem);
  };

  const deleteAll = (evt) => {
    const id = evt.currentTarget.parentNode.parentNode.id;
    const weight =
      evt.currentTarget.parentNode.childNodes[0].childNodes[1].childNodes[3]
        .childNodes[0].innerText;

    const name =
      evt.currentTarget.parentNode.childNodes[0].childNodes[1].childNodes[0].innerText.split(
        " | "
      )[0];
    deleteAllProducts({ id: +id, weight: weight, name: name });
  };

  return (
    <Card id={id} className={classes.card}>
      <Card.Body>
        <div className={classes["wrapper-img"]}>
          <img
            src={`${imageSrc ? imageSrc : img}`}
            width="75px"
            height="75px"
            alt="herbal stoners product item"
          />
          <div>
            <Card.Title className={classes["card-title"]}>
              {cartTitle}
            </Card.Title>
            <Card.Text className={classes["cart-breeder"]}>{breeder}</Card.Text>
            <Card.Text className={classes["cart-thcInfo"]}>{info}</Card.Text>
            <div className={classes["cart-text--wrapper"]}>
              <Card.Text className={classes["cart-breeder"]}>
                {weight}
              </Card.Text>
              <div className={classes["btn-wrapper"]}>
                <button
                  className={classes["cart-update-btn"]}
                  type="button"
                  aria-label="remove 1 item"
                  onClick={deleteHandler}
                >
                  -
                </button>
                <span className={classes["quantity-price"]}>
                  &nbsp; {quantity} &nbsp;
                </span>
                <button
                  className={classes["cart-update-btn"]}
                  type="button"
                  aria-label="add 1 item"
                  onClick={increaseCartHandler}
                >
                  +
                </button>
              </div>
            </div>

            <div className={classes["price-wrapper"]}>
              {" "}
              <span>${price}</span>
            </div>
          </div>
        </div>
        <button className={classes.cartBtn} type="button" onClick={deleteAll}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
