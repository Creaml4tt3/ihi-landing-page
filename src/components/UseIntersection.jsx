import { useState, useEffect } from "react";

export const UseIntersection = (element, options) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(element.current);
        }
      },
      [options]
    );

    const newElement = element.current;

    element.current && observer.observe(element.current);

    return () => observer.unobserve(newElement);
  }, []);

  return isVisible;
};
