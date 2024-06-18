import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      console.log("Scroll event fired, selector:", scrollUp); // Debugging log
      if (scrollUp) {
        if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      } else {
        console.error("scrollUp element not found"); // Error log if element is not found
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
