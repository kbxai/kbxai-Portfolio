
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0 }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)",
        transitionDelay: `${delay}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
