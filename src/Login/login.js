import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import "./login.css";

function Login() {
  const history = useHistory();

  function googleResponse(response) {
    console.log("response from google: ", response)
    console.log("User name: ", response.profileObj.name)
    if (response.profileObj) {
      localStorage.setItem("userName", response.profileObj.name)
      localStorage.setItem("userImg", response.profileObj.imageUrl)
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