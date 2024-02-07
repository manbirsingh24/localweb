import { useState } from "react";
import "./body.css";



const Body = ({dates}) => {
  console.log("Dates: ", dates.toString())
  const days = dates.getDate()
  const minutes = dates.getMinutes()
  const hours = dates.getHours()
  const seconds = dates.getSeconds()

  const [hour, setHours] = useState("second")


  return (
    <>
      <div className="body">
        <div className="content">
          <div className="date">
            <span>06.28.018</span>
          </div>
          <p>
            <b>Hello World</b>
          </p>
        </div>
        <div className="time">
          <div className="days">
            <p>
              <b>{days}</b>
            </p>
            <span><b>Days</b></span>
          </div>
          <div className="hours">
            <p>
              <b>{hours}</b>
            </p>
            <span><b>Hours</b></span>
          </div>
          <div className="minutes">
            <p>
              <b>{minutes}</b>
            </p>
            <span><b>Minutes</b></span>
          </div>
          <div className="seconds">
            <p>
              <b>{seconds}</b>
            </p>
            <span><b>Seconds</b></span>
          </div>
        </div>
        <div className="buttons">
            <button>Buy Tickets</button>
            <button>See Lineup</button>
        </div>
      </div>
    </>
  );
};

export default Body;
