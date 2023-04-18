import React, { useState, useEffect, useContext } from "react";
import { SortContext } from "../../context/sort-context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactPaginate from "react-paginate";

import { getExtracts } from "../../api/api";
import { LoadingSpinner3 } from "../LoadingSpinner/LoadingSpinner";
import { SinglePrices } from "../WeedPrices/WeedPrices";
import classes from "./ExtractCard.module.css";

// Images
import extract1 from "../../Assets/Extracts/extract1.jpg";
import extract2 from "../../Assets/Extracts/extract2.jpg";
import extract3 from "../../Assets/Extracts/extract3.jpg";
import extract4 from "../../Assets/Extracts/extract4.jpg";
import extract5 from "../../Assets/Extracts/extract5.jpg";
import extract6 from "../../Assets/Extracts/extract6.jpg";

import wax1 from "../../Assets/Extracts/wax1.jpg";
import wax2 from "../../Assets/Extracts/wax2.jpg";
import wax3 from "../../Assets/Extracts/wax3.jpg";
import wax4 from "../../Assets/Extracts/wax4.jpg";

function ExtractCard() {
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [extractInfo, setExtractInfo] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const { setSortProducts, sort } = useContext(SortContext);

  useEffect(() => {
    async function extracts() {
      const results = await getExtracts();

      setExtractInfo(results);
      setDefaultProducts(results);
      setLoad(false);
    }
    extracts();
  }, []);

  useEffect(() => {
    if (sort) {
      setExtractInfo(
        extractInfo.slice().sort((a, b) => {
          return a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] - 1;
        })
      );
    } else {
      setExtractInfo(defaultProducts);
    }
  }, [sort, setSortProducts]);

  // Pagination
  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(extractInfo.length / postPerPage);

  // On page Change
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayExtracts = extractInfo
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((extract) => {
      const img = [
        extract1,
        extract2,
        extract3,
        extract4,
        extract5,
        extract6,
        wax1,
        wax2,
        wax3,
        wax4,
      ];

      return (
        <div className={classes["card-wrapper"]} key={extract.id}>
          <div id={extract.id} className={classes.col1}>
            {/* Image */}
            <LazyLoadImage
              className={classes["extract-img"]}
              src={img[extract.imgNum - 1]}
              alt={`${extract.name}`}
              width="110px"
              height="90px"
              effect="blur"
            ></LazyLoadImage>

            {/* information */}
            <div className={classes.info}>
              <p className={classes.breeder}>{extract.breeder}</p>
              <p className={classes.strain}>{extract.name}</p>

              <p className={classes["strain-info"]}>
                {/* type */}
                <span className={classes.type}>{extract.type}</span>
                {/* thc level */}
                <div className={classes.levels}>
                  <span className={classes.thc}>{extract.thc}</span>
                  {/* cbd level */}
                  <span className={classes.cdb}>{extract.cdb}</span>
                </div>
              </p>
            </div>
          </div>

          {/* Prices per weight and add to cart */}
          <SinglePrices price={extract.price} />
        </div>
      );
    });

  return (
    <div className={classes.extract}>
      {load ? <LoadingSpinner3 /> : displayExtracts}
      <ReactPaginate
        previousLabel="Previous"
        previousAriaLabel="Go back"
        nextLabel="Next"
        nextAriaLabel="Go Forward"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationButtons"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}

export default ExtractCard;
