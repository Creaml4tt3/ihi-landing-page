import { useState, useEffect } from "react";

export const UseIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    const newElement = element.current;

    if (element) {
      element.current && observer.observe(element.current);

      return () => observer.unobserve(newElement);
    }
  }, []);

  return isVisible;
};
