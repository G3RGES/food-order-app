const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  if (!response.ok) {
  }

  const data = await response.json();
};

export default function useHttp() {}
