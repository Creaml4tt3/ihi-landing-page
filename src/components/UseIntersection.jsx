import { useState, useEffect } from "react";

export const UseIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState(entry.isIntersecting);
        observer.unobserve(element.current);
      }
    });

    const newElement = element.current;

    if (element) {
      element.current && observer.observe(element.current);

      return () => observer.unobserve(newElement);
    }
  }, []);

  return isVisible;
};
