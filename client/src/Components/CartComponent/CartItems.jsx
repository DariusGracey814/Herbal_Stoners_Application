import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import CartItem from "./CartItem";

import classes from "./cartItem.module.css";

function CartItems() {
  const [userCart, setUserCart] = useState(
    JSON.parse(sessionStorage.getItem("userCart"))
  );
  const { addOneToCart, deleteFromCart } = useContext(CartContext);

  useEffect(() => {
    const sessionCart = JSON.parse(sessionStorage.getItem("userCart"));
    setUserCart(sessionCart);
  }, [addOneToCart, deleteFromCart]);

  return (
    <div className={classes.cartContainer}>
      {userCart.cart.map((cartItem) => {
        return (
          <CartItem
            id={cartItem.id}
            title={cartItem.name}
            breeder={cartItem.breeder}
            imageSrc={cartItem.img}
            weight={cartItem.weight}
            quantity={cartItem.quantity}
            info={cartItem.thcLevel}
            price={cartItem.price}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
