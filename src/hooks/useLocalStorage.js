import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(function() {
    let savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) {
      return savedValue;
    }
    return initialValue;
  });

  useEffect(function() {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue];
}

export default useLocalStorage;