import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";

const ScrollUp: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup") as HTMLElement;
      if (scrollUp) {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup" aria-label="Scroll to top">
      <FaArrowUp className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
