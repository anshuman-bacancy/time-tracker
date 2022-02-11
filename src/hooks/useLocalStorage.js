import { useState } from "react";

function getSavedValue(key) {
  return localStorage.getItem(key)
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState();
  setValue(initialValue)

  function setLocalStorage(value) {
    setValue(value)
    localStorage.setItem(key, value)
  }
  savedValue = getSavedValue();

  return [savedValue, setLocalStorage];
}


export default useLocalStorage;