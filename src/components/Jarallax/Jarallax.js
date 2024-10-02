"use client"
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";
import React, { useEffect, useRef } from "react";

// Optional video extension
jarallaxVideo();

// interface IProps extends JarallaxOptions {
//   className?: string;
//   children: React.ReactNode;
// }

const Jarallax = ({ className = "", children, ...props }) => {
  const element = useRef();

  // Init Jarallax.
  useEffect(() => {
    const { current } = element;
    if (current) {
      jarallax(current, props);
    }

    // Destroy Jarallax.
    return () => {
      if (current) {
        jarallax(current, "destroy");
      }
    };
  }, [props]);

  // Update options.
  useEffect(() => {
    const { current } = element;
    if (current) {
      jarallax(current, "destroy");
      jarallax(current, props);
    }
  }, [props]);

  return (
    <div ref={element} className={`${className} jarallax`}>
      {children}
    </div>
  );
};

export default Jarallax;
