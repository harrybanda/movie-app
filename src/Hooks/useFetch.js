import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, func) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        let finalData = func(response);
        setData(finalData);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
