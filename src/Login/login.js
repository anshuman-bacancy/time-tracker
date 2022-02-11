import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import "./login.css";

function Login() {
  const history = useHistory();

  function getLoginDateTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var finalDate = dd + '/' + mm + '/' + yyyy;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return [finalDate, time];
  }

  function googleResponse(response) {
    console.log("response from google: ", response)
    console.log("User name: ", response.profileObj.name)
    if (response.profileObj) {
      localStorage.setItem("userName", response.profileObj.name)
      localStorage.setItem("userImg", response.profileObj.imageUrl)

      var [currDate, loginTime] = getLoginDateTime();
      localStorage.setItem("currDate", currDate)
      localStorage.setItem("loginTime", loginTime)
      history.push("/dash");
    } else {
      history.push("/")
    }
  }

  return (
    <>
    <div className="login">
      <GoogleLogin
      buttonText="Login"
      clientId="48110673138-5am27u7kp6nvl94c3bd3iph2pi2ib9js.apps.googleusercontent.com"
      onSuccess={googleResponse}
      onFailure={googleResponse}
      cookiePolicy={'single_host_origin'}
      />
    </div>
    </>
  )
}

export default Login;