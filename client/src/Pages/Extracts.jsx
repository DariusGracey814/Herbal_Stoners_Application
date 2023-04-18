import React, { useState, useEffect, Suspense, lazy } from "react";
import { Form } from "react-bootstrap";

import ProductSort from "../Components/ProductSort/ProductSort";
import { LoadingSpinner3 } from "../Components/LoadingSpinner/LoadingSpinner";
import { Directory3 } from "../Components/UI/Directory/Directory";
import Container from "../Components/UI/Container/Container";
import classes from "./Extracts.module.css";

const MenuNavigation = lazy(() =>
  import("../Components/MenuNavigation/MenuNavigation")
);
const ExtractCard = lazy(() => import("../Components/ExtractCard/ExtractCard"));

function Extracts() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <section className={classes.extracts}>
      <Directory3 main="menu" location="/menu" current="extract" />

      <Suspense fallback={<LoadingSpinner3 />}>
        <MenuNavigation />
      </Suspense>

      <Container>
        <div className={classes.sort}>
          <h1>All Extracts</h1>
          <ProductSort class={classes.select} />
        </div>

        <ExtractCard />
      </Container>
    </section>
  );
}

export default Extracts;
