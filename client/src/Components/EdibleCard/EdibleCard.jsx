import React, { useState, useEffect, Suspense, useContext } from "react";
import { SortContext } from "../../context/sort-context";
import ReactPaginate from "react-paginate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { getEdibles } from "../../api/api";
import { LoadingSpinner3 } from "../LoadingSpinner/LoadingSpinner";
import { SinglePrices } from "../WeedPrices/WeedPrices";
import classes from "./EdibleCard.module.css";

import edibleImg from "../../Assets/Edibles/edible-img.jpg";

function EdibleCard() {
  const [edibleInfo, setEdibleInfo] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const { sort, setSortProducts } = useContext(SortContext);

  // on page change
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await getEdibles();
        setEdibleInfo(results);
        setDefaultProducts(results);
        setLoad(false);
      } catch (err) {
        return err.message;
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (sort) {
      setEdibleInfo(
        edibleInfo.slice().sort((a, b) => {
          return a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] - 1;
        })
      );
    } else {
      setEdibleInfo(defaultProducts);
    }
  }, [sort, setSortProducts]);

  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(edibleInfo.length / postPerPage);

  const displayEdibles = edibleInfo
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((edible) => {
      const data = {
        prices: [8.0, 12.0, 8.0, 10.0, 8.0, 9.0],
        breeders: [
          "Chewii",
          "Ubaked",
          "MKX",
          "Motor City Cannabites",
          "Rise",
          "Covert Cups",
        ],
      };

      const randNum6 = Math.trunc(Math.random() * 5);

      return (
        <div className={classes["card-wrapper"]} key={edible.id}>
          <div id={edible.id} className={classes.col1}>
            {/* Image */}
            <Suspense fallback={<LoadingSpinner3 />}>
              <LazyLoadImage
                className={classes["edible-img"]}
                src={edibleImg}
                alt={`${edible.name}`}
                width="100px"
                height="85px"
                effect="blur"
              ></LazyLoadImage>
            </Suspense>

            {/* information */}
            <div className={classes.info}>
              <p className={classes.breeder}>{data.breeders[randNum6]}</p>
              <p className={classes.strain}>{edible.name}</p>

              <p className={classes["strain-info"]}>
                {/* type */}
                <span className={classes.type}>Hybrid &nbsp;</span>
                {/* thc level */}
                <div className={classes.levels}>
                  <span className={classes.thc}>{edible.thc}</span>
                  {/* cbd level */}
                  <span className={classes.cdb}>{edible.cdb}</span>
                </div>
              </p>
            </div>
          </div>

          {/* Prices per weight and add to cart */}
          <SinglePrices price={data.prices[randNum6]} />
        </div>
      );
    });

  return (
    <div className={classes.edible}>
      {load ? <LoadingSpinner3 /> : displayEdibles}

      <ReactPaginate
        previousLabel="Previous"
        previousAriaLabel="Go Back"
        nextLabel="Next"
        nextAriaLabel="Go Forward"
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName="paginationButtons"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}

export default EdibleCard;
