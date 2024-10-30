import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "failed to send request");
  }

  return data;
};

export default function useHttp(url, config) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const sendRequest = useCallback(() => {
    const sendRequest = async () => {
      setLoading(true);

      try {
        const resData = await sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message || "failed to send request!");
      }

      setLoading(false);
    };
  }, [url, config]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return {
    data,
    error,
    loading,
  };
}
