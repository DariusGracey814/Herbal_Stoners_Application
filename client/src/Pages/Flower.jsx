import React, { useState, useEffect, Suspense, lazy } from "react";
import { SortContext } from "../context/sort-context";
import Container from "../Components/UI/Container/Container";
import LoadingSpinner, {
  LoadingSpinner3,
} from "../Components/LoadingSpinner/LoadingSpinner";
import { Directory3 } from "../Components/UI/Directory/Directory";
import ProductSort from "../Components/ProductSort/ProductSort";
import classes from "./Flower.module.css";

const MenuNavigation = lazy(() =>
  import("../Components/MenuNavigation/MenuNavigation")
);
const FlowerCard = lazy(() => import("../Components/FlowerCard/FlowerCard"));

function Flower() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <section className={classes.flower}>
      <Directory3 main="menu" current="flower" location="/menu" />

      <Suspense fallback={<LoadingSpinner />}>
        <MenuNavigation />
      </Suspense>

      <Container>
        <div className={classes.sort}>
          <h1>All Flower</h1>
          <ProductSort class={classes.select} />
        </div>

        <Suspense fallback={<LoadingSpinner3 />}>
          {/* Flower Information */}
          {load ? <LoadingSpinner /> : <FlowerCard />}
        </Suspense>
      </Container>
    </section>
  );
}

export default Flower;
