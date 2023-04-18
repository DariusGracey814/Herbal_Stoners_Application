import React, { useState, useEffect, Suspense, lazy } from "react";

import Container from "../Components/UI/Container/Container";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import { ScrollTopMain } from "../Components/UI/ScrollToTop/ScrollToTop";
import Directory from "../Components/UI/Directory/Directory";
import Categories from "../Components/MenuComponents/Categories";

import classes from "./Menu.module.css";

// Lazy Component
const MenuNavigation = lazy(() =>
  import("../Components/MenuNavigation/MenuNavigation")
);
const MenuBanner = lazy(() => import("../Components/MenuBanner/MenuBanner"));

function Menu() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <section className={classes.menu}>
          <Directory current="menu" />

          <Suspense fallback={<LoadingSpinner />}>
            <MenuNavigation />
          </Suspense>

          <Container>
            <Suspense fallback={<LoadingSpinner />}>
              <MenuBanner />
            </Suspense>

            {/* Sections */}
            <Categories />
          </Container>

          <ScrollTopMain />
        </section>
      )}
    </>
  );
}

export default Menu;
