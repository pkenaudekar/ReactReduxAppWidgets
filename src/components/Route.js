import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [curruntPath, setCurruntPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurruntPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return curruntPath === path ? children : null;
};

export default Route;
