import React, { Suspense, lazy } from "react";
import { Form } from "react-bootstrap";
import ProductSort from "../Components/ProductSort/ProductSort";

import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import { Directory3 } from "../Components/UI/Directory/Directory";
import Container from "../Components/UI/Container/Container";
import classes from "./Edibles.module.css";

// Lazy Loading Components
const MenuNavigation = lazy(() =>
  import("../Components/MenuNavigation/MenuNavigation")
);
const EdibleCard = lazy(() => import("../Components/EdibleCard/EdibleCard"));

function Edibles() {
  return (
    <section className={classes.edibles}>
      <Directory3 main="menu" location="/menu" current="edibles" />
      <Suspense fallback={<LoadingSpinner />}>
        <MenuNavigation />
      </Suspense>

      <Container>
        <div className={classes.sort}>
          <h1>All Edibles</h1>
          <ProductSort class={classes.select} />
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <EdibleCard />
        </Suspense>
      </Container>
    </section>
  );
}

export default Edibles;
