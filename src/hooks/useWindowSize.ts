import { useEffect, useState } from "react";

const useWindowResize = (): [number, number, (e: UIEvent) => void] => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  
  const handleResize = (e: UIEvent) => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
  };
  
  useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => {
  window.removeEventListener('resize', handleResize);
  };
  }, []);
  
  return [width, height, handleResize];
  };

export default useWindowResize;