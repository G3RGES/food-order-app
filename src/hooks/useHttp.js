import { useState } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "failed to send request");
  }

  return data;
};

export default function useHttp() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const sendRequest = async () => {
    setLoading(true);

    try {
      const resData = await sendHttpRequest();
      setData(resData);
    } catch (error) {
      setError(error.message || "failed to send request!");
    }

    setLoading(false);
  };

  return {
    data,
    error,
    loading,
  };
}
