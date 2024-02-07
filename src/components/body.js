import "./body.css";



const body = () => {
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

export default body;
