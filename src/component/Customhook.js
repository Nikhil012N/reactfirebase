import axios from 'axios';
import React, { useState, useMemo, useEffect } from 'react';

const Customhook = (url) => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      axios.get(url).then(response => setApiData(response?.data))
    }
    catch (err) {
      setIsError(err);
    }
    finally {
      setLoading(false);
    }
  }, [url]);
  console.log(apiData);
  return useMemo(()=>({apiData:apiData,isLoading:isLoading,isError:isError}),[apiData,isLoading,isError]);
}

export default Customhook;
