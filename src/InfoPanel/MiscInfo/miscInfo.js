import React, {useEffect, useState} from "react";

function MiscInfo() {
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");
  const [currDate, setCurrDate] = useState();
  const [currTime, setCurrTime] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("userName"))
    setUserImg(localStorage.getItem("userImg"))

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var finalDate = dd + '/' + mm + '/' + yyyy;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setCurrDate(finalDate);
    setCurrTime(time);
  }, []);

  return (
    <>
    <div className="card" style={{width: "20rem"}}>
      {/* <img className="card-img-top" style={{height: "50px", width: "50px"}} src={userImg} alt=""></img> */}
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p className="card-text">{user}</p>
            <p>{currDate}</p>
            <span>Logged in @ {currTime}</span>
          </div>
          <img className="card-img-top" style={{height: "100px", width: "100px"}} src={userImg} alt=""></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default MiscInfo;