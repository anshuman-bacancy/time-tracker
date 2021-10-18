import React, { useEffect, useState } from "react";

function MiscInfo() {
  const [user, setUser] = useState("")

  useEffect(() => {
    setUser(localStorage.getItem("userName"))
  });

  return (
    <>
    Hi, {user}
    </>
  )
}

export default MiscInfo;