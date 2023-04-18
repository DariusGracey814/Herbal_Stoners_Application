import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";
import Container from "../../UI/Container/Container";
import CartItems from "../CartItems";
import classes from "./Checkout.module.css";

function Checkout() {
  const { getCartTotal, itemCounter, items } = useContext(CartContext);
  let tax = getCartTotal() * 0.06;
  let orderTotal = tax + getCartTotal();

  const navigate = useNavigate();

  useEffect(() => {
    // When cart is empty redirect to menu
    if (itemCounter === 0) {
      navigate("/menu");
    }
  }, [itemCounter]);

  // Purchase items handler
  const checkoutHandler = async () => {
    try {
      console.log(items);
      const res = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerCart: items }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.assign(data.url);
      }
    } catch (error) {
      return error.message;
    }
  };

  return (
    <section className={classes["checkout-section"]}>
      <Container>
        <div className={classes["checkout-wrapper"]}>
          <div className={classes["cartItems-wrapper"]}>
            <CartItems />
          </div>
          <div className={classes["checkout-order"]}>
            {/* Row 1 */}
            <div className={classes["info-row1"]}>
              <h1>Herbal Stoners</h1>
              <p>Est. pickup | Next service opportunity unknown</p>
            </div>

            <div className={classes["info-divider"]}></div>

            {/* Row 2 */}
            <div className={classes["info-row2"]}>
              <p>
                Subtotal: <span>${getCartTotal()}</span>
              </p>
              <p>
                Taxes: <span>${tax.toFixed(2)}</span>
              </p>
              <a href="#" title="add promo code">
                Add a promo code
              </a>
            </div>

            <div className={classes["info-divider"]}></div>

            {/* Row 3 */}
            <div className={classes["info-row3"]}>
              <p>
                Order Total: <span>${orderTotal.toFixed(2)}</span>
              </p>

              <button
                type="submit"
                className={classes["orderSubmit-btn"]}
                onClick={checkoutHandler}
              >
                Place Order
              </button>

              <p className={classes["info-terms"]}>
                By placing an order you agree to our Terms and to receive
                automated text messages for order updates.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Checkout;
