import React, { useRef, useState, useEffect } from "react";

type FadeInProps = {
  children: React.ReactNode;
};

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
