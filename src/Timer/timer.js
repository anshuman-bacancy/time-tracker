import React, {useState} from "react";

function Timer() {
  var [hour, setHour] = useState(0);
  var [minute, setMinute] = useState(0);
  var [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(true);
  var [timerObj, setTimerObj] = useState(0);

  function handleStart() {
    setIsStart((state) => !state)
    if (isStart === true) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function handleReset() {
    stopTimer();
    if (isStart === false) {
      setIsStart(true);
    }
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  function timer() {
    second += 1;
    if (second === 60) {
      minute += 1;
      second = 0;
      if (minute === 60) {
        hour += 1;
        minute = 0;
        setHour(hour);
      } else {
        setMinute(minute)
      }
    } else{ 
      setSecond(second);
    }
  }

  function startTimer() {
    setTimerObj(setInterval(timer, 1000))
  }

  function stopTimer() {
    setTimerObj(clearInterval(timerObj));
  }

  return (
    <>
    <div className="container">
      <center>
        <div className="border border-dark border-2" style={{width: "20%", margin: "30px"}}>
          <div style={{fontSize: "75px"}}>{hour}:{minute}:{second}</div>
        </div>

        <div className="row" style={{width: "30%", paddingBottom: "20px"}}>
          <div className="col"><button className="btn btn-dark btn-lg" style={{}} onClick={handleStart}>{isStart ? "Start" : "Stop"}</button></div>
          <div className="col"><button className="btn btn-dark btn-lg" onClick={handleReset} disabled={hour===0 && minute===0 && second===0}>Reset</button></div>
        </div>
      </center>
    </div>
    </>
  )
}

export default Timer; 