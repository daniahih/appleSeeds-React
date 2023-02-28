import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);

  function getItem() {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }
  useEffect(() => {
    getItem();
    return () => {
      console.log("test");
    };
  }, []);
  return { data, isloaded, error };
}
