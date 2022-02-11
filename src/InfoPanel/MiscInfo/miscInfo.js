import React, {useEffect, useState} from "react";

function MiscInfo() {
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");
  const [currDate, setCurrDate] = useState();
  const [currTime, setCurrTime] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("userName"))
    setUserImg(localStorage.getItem("userImg"))
    setCurrDate(localStorage.getItem("currDate"));
    setCurrTime(localStorage.getItem("loginTime"));
  }, []);

  return (
    <>
    <div className="card" style={{width: "20rem"}}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p className="card-text">{user}</p>
            <p>{currDate}</p>
            <span>Logged in @ {currTime}</span>
            <div><span>Timer started @ {localStorage.getItem("timerStart")}</span></div>
          </div>
          <img className="card-img-top" style={{height: "100px", width: "100px"}} src={userImg} alt=""></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default MiscInfo;