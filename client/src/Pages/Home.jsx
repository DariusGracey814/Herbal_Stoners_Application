import React, { useState, useEffect, Suspense, lazy } from "react";

import { HerbalContextProvider } from "../context/date-context";
import classes from "./Home.module.css";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Hero from "./Hero";

const ScrollTop = lazy(() =>
  import("../Components/UI/ScrollToTop/ScrollToTop")
);
const HomeContent = lazy(() => import("../Components/HomeContent/HomeContent"));

function Home({
  navState,
  heroVisible,
  setHeroVisible,
  introElementVisible,
  onSetIntroElementVisible,
  hero,
}) {
  // Loading State
  const [load, setLoad] = useState(false);

  function pageLoad() {
    setLoad(true);
  }

  useEffect(() => {
    setTimeout(pageLoad, 1000);
  }, []);

  return (
    <>
      {!load ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.body}>
          <Hero navState={navState} heroElement={hero} />

          <Suspense fallback={<LoadingSpinner />}>
            <HerbalContextProvider>
              <HomeContent
                heroVisible={heroVisible}
                setHeroVisible={setHeroVisible}
                introElementVisible={introElementVisible}
                onSetIntroElementVisible={onSetIntroElementVisible}
              />
            </HerbalContextProvider>
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <ScrollTop hero={hero} onSetHeroVisible={setHeroVisible} />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default React.memo(Home);
