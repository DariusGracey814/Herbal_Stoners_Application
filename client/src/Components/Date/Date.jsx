import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { useHerbalContext } from "../../context/date-context";
import HoursModal from "../Modals/HoursModal";
import classes from "./Date.module.css";

function GetDate({ introElementVisible }) {
  const [show, setShow] = useState(false);
  const { getWeekday, openCloseStatus, setOpen, weekday, currentTime, open } =
    useHerbalContext();

  useEffect(() => {
    getWeekday();
    openCloseStatus(currentTime);
  }, []);

  // Open Hours Modal
  const handlerOpen = (evt) => {
    setShow(true);
  };

  return (
    <React.Fragment>
      <div className={classes["time-wrapper"]}>
        <div
          className={`safari-gap--fix1_5 ${classes.date} ${
            !introElementVisible ? null : classes.visible
          } ${open ? classes.open : classes.closed}`}
        >{`Its ${weekday} at ${currentTime} - ${
          open ? "we're open" : "we're closed"
        }`}</div>

        <Button
          className={`${classes.hours} ${
            !introElementVisible ? null : classes["visible-hours"]
          }`}
          onClick={handlerOpen}
        >
          View Hours <i class="fa-solid fa-clock"></i>
        </Button>
      </div>
      <HoursModal
        show={show}
        setShow={setShow}
        handlerClose={() => setShow(false)}
      />
    </React.Fragment>
  );
}

export default GetDate;
