import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";
import Container from "../../UI/Container/Container";
import classes from "./Success.module.css";

function Success() {
  const [redirect, setRedirect] = useState(false);
  const { getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  console.log(getCartTotal());

  useEffect(() => {
    // Clear session cart and count
    sessionStorage.setItem("CartCounter", 0);
    sessionStorage.setItem("userCart", JSON.stringify({ cart: [] }));
    setRedirect(true);
  }, []);

  useEffect(() => {
    if (redirect) {
      //Create timer which redirects user to menu after 3 seconds
      setTimeout(() => {
        navigate("/menu");
      }, 3000);
    }
  }, [setRedirect, redirect]);

  return (
    <Container>
      <section className={classes.section}>
        <h1>Herbal Stoners</h1>
        <h2>Thank you for Your Purchase</h2>
        <p>You will be redirected to the main menu in 3 seconds</p>
      </section>
    </Container>
  );
}

export default Success;
