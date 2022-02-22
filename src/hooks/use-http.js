import { useState, useCallback } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: requestConfig.url,
        method: requestConfig.method ? requestConfig.method : "get",
        baseURL: requestConfig.baseURL,
        headers: requestConfig.headers ? requestConfig.headers : {},
        data: requestConfig.data ? JSON.stringify(requestConfig.body) : null,
      });
      if (response.status !== 200) {
        throw new Error("Request failed!");
      }
      applyData(response);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
