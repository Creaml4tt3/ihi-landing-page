import { useState, useEffect } from "react";

export const UseIntersectionLoop = (element, options) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      [options]
    );
    const newElement = element.current;

    element.current && observer.observe(element.current);

    return () => observer.unobserve(newElement);
  }, []);

  return isVisible;
};
