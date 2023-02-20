import { useState, useEffect } from "react";

export const UseIntersectionLoop = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    const Element = element.current;
    Element && observer.observe(Element);

    return () => observer.unobserve(Element);
  }, []);

  return isVisible;
};
