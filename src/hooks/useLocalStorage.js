import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(function() {
    let savedValue = localStorage.getItem(key);
    savedValue = JSON.parse(savedValue)
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