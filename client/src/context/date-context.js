import React, { createContext, useState, useContext } from "react";

const HerbalContext = createContext({});

export function useHerbalContext() {
  return useContext(HerbalContext);
}

export function HerbalContextProvider({ children }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekday, setWeekDay] = useState("");
  const [currentTime, setCurrentTime] = useState(
    new Intl.DateTimeFormat("en-us", {
      hour: "numeric",
      minute: "numeric",
    }).format(currentDate)
  );
  const [open, setOpen] = useState(false);

  function getWeekday() {
    // Date
    const weekdaysData = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Date Data
    const currentWeekday = currentDate.getDay();
    setWeekDay(currentWeekday);

    // Get weekday and update state
    weekdaysData.forEach((day, index) => {
      if (currentWeekday === index) {
        setWeekDay(day);
      }
    });
  }

  function openCloseStatus(status) {
    // If no dispatch state enter return error (Unit)
    if (!status) {
      console.log(
        "Error: Open Close Status Function\n\nPass a Dispatch function as an Argument or bugs may be impact proper code functionality"
      );

      return "Error: Open Close Status Function\n\nPass a Dispatch function as an Argument or bugs may be impact proper code functionality";
    }

    const timeArray = currentTime.split(" ");
    const time = timeArray[0].replace(":", "");

    // 10:00am - 11:59am = Open
    if (
      (time >= 1000 && timeArray[1] === "AM") ||
      (time <= 1159 && timeArray[1] === "AM")
    ) {
      setOpen(true);
    }
    // 12:00pm - 12:59pm = Open
    if (time >= 1200 && timeArray[1] === "PM") {
      setOpen(true);
    }
    // 8:55pm and below = Open
    if (time <= 855 && timeArray[1] === "PM") {
      setOpen(true);
    } else {
      setOpen(false);
    }

    setOpen(true);
  }

  return (
    <HerbalContext.Provider
      value={{
        getWeekday,
        openCloseStatus,
        setOpen,
        weekday,
        currentTime,
        open,
      }}
    >
      {children}
    </HerbalContext.Provider>
  );
}
