import { useState, useEffect, useRef } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      // console.log(entry);
      setIntersecting(entry.isIntersecting);
    });
    observer.current.observe(ref.current);
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
