import { useEffect, useState } from "react";
const useFetch = (initial) => {
  // const [val, setValue] = useState();
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   setValue(initial);
  // }, [initial]);
  const setResult = async (url = "", payload = {}, method = "GET") => {
    let url1 = url;
    Object.keys(payload).map(
      (item, i) => (url1 += `${i !== 0 ? "&" : ""}${item}=${payload[item]}`)
    );
    // console.log(url1)
    const ftch = await fetch(url1, { method });
    console.log(ftch)
    const dt = await ftch.json();
    // console.log(dt)
    setData(dt);
  };
  return { result: data, setResult: setResult };
};

export default useFetch;
