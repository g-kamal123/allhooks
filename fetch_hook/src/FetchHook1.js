export const useFetch1 = (url) => {
  const _get = async (endpoint) => {
    let url1 = url;
    Object.keys(endpoint).map(
      (item, i) => (url1 += `${i !== 0 ? "&" : ""}${item}=${endpoint[item]}`)
    );
    const fetchData = await fetch(url1);
    const jsonData = fetchData.json();
    return jsonData;
  };

  async function _post(payload) {
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const jsonData = fetchData.json();
    return jsonData;
  }
  const _put = async (endpoint, payload) => {};
  const _delete = async (endpoint) => {};
  return { _get, _post, _put, _delete };
};
