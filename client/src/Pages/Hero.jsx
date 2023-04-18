import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { ContainerXL } from "../Components/UI/Container/Container";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import classes from "./Hero.module.css";

import large from "../Assets/heroImages/weedBGMedium.jpg";

// Hero Responsive Images
function Hero({ navState, heroElement }) {
  const [heroBG, setHeroBG] = useState(null);

  useEffect(() => {
    setHeroBG(large);
  }, []);

  return (
    <ContainerXL>
      <section
        className={classes.hero}
        ref={heroElement}
        style={{ backgroundImage: `url(${heroBG})` }}
        aria-label="Marijuana leaves"
      >
        <div className={classes["gradient"]}></div>

        {/* Overlay when mobile menu is active */}
        <div
          className={`${!navState ? classes["menuActive"] : classes["d-none"]}`}
        ></div>

        <div className={classes["hero-wrapper"]}>
          <h1 className={classes["herbal-text"]}>Herbal</h1>
          <h2 className={classes["stoner-text"]}>Stoners</h2>
          <p className={classes["date-text"]}>Est. 2018</p>
          <div className={classes["hero-btn--wrapper"]}>
            <Button
              className={`hero-btn--green safari-gap--fix1_5 ${classes["hero-btn"]}`}
            >
              <Link to="/menu">
                Order Now <span>&rarr;</span>
              </Link>
            </Button>

            <Button className={`hero-btn--blue ${classes["hero-btn"]}`}>
              <Link to="/contact-us">
                Contact us <span>&rarr;</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ContainerXL>
  );
}

export default Hero;
