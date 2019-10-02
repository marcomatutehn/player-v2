import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  const [ test ] = useState(true);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
