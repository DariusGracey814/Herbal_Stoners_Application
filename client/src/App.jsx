import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/cart-context";
import SortCartProvider from "./context/sort-context";

import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
// Pages
import Header from "./Components/Header/Header";
import "./App.css";
import Success from "./Components/CartComponent/Checkout/Success";

// Lazy Load Page Components
const Home = lazy(() => import("./Pages/Home"));
const Subscribe = lazy(() => import("./Pages/Subscribe"));
const Error404 = lazy(() => import("./Pages/Error"));
const HerbalFooter = lazy(() => import("./Components/Footer/Footer"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Menu = lazy(() => import("./Pages/Menu"));
const Flower = lazy(() => import("./Pages/Flower"));
const Extracts = lazy(() => import("./Pages/Extracts"));
const Edibles = lazy(() => import("./Pages/Edibles"));
const Checkout = lazy(() =>
  import("./Components/CartComponent/Checkout/Checkout")
);

function App() {
  const [navActive, setNavActive] = useState(true);
  const [heroVisible, setHeroVisible] = useState(true);
  const [introElementVisible, setIntroElementVisible] = useState("");
  const [load, setLoad] = useState(false);
  const hero = useRef();

  function pageLoad() {
    setLoad(true);
  }

  // Loading spinner before loading page
  useEffect(() => {
    // Run spinner for 1.5sec before loading page
    setTimeout(pageLoad, 1000);

    // Check if CartCounter and userCart session exists
    const getCounter = sessionStorage.getItem("CartCounter");
    const getCart = sessionStorage.getItem("userCart");

    if (getCart === null && getCounter === null) {
      // Set New session
      sessionStorage.setItem("CartCounter", 0);
      sessionStorage.setItem("userCart", JSON.stringify({ cart: [] }));
    } else {
      // use previous session
      return;
    }
  }, []);

  return (
    <div>
      {!load ? (
        <LoadingSpinner />
      ) : (
        <div className="App">
          {/* Header displays on all components */}
          <Router>
            <Header
              onSetNavActive={setNavActive}
              heroVisible={heroVisible}
            ></Header>

            {/* Pages */}
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route
                  exact
                  path="/home"
                  element={
                    <Home
                      navState={navActive}
                      setHeroVisible={setHeroVisible}
                      heroVisible={heroVisible}
                      introElementVisible={introElementVisible}
                      onSetIntroElementVisible={setIntroElementVisible}
                      hero={hero}
                    />
                  }
                />
                <Route exact path="/subscribe" element={<Subscribe />} />
                <Route exact path="/contact-us" element={<ContactUs />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route
                  exact
                  path="/menu"
                  element={
                    <CartProvider>
                      <Menu />
                    </CartProvider>
                  }
                />

                <Route
                  exact
                  path="/menu/flower"
                  element={
                    <CartProvider>
                      <SortCartProvider>
                        <Flower />
                      </SortCartProvider>
                    </CartProvider>
                  }
                />
                <Route
                  exact
                  path="/menu/extracts"
                  element={
                    <CartProvider>
                      <SortCartProvider>
                        <Extracts />
                      </SortCartProvider>
                    </CartProvider>
                  }
                />
                <Route
                  exact
                  path="/menu/edibles"
                  element={
                    <CartProvider>
                      <SortCartProvider>
                        <Edibles />
                      </SortCartProvider>
                    </CartProvider>
                  }
                />

                <Route
                  exact
                  path="/herbal-stoners/checkout"
                  element={
                    <CartProvider>
                      <Checkout />
                    </CartProvider>
                  }
                />

                <Route
                  exact
                  path="/herbal-stoners/purchase-successful"
                  element={<Success />}
                />
                {/* Any other route return an error */}
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Suspense>

            {/* Footer displays on all components */}
            <HerbalFooter />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
