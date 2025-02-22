import React, { useState, useEffect } from "react";
import "./Header.css";
import ThemeToggle from "../../common/toggle-button/ThemeToggle";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("#home");

  // Handle scroll event to add/remove class based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header") as HTMLElement;
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navId: string) => {
    setActiveNav(navId);
    setToggle(false); // Close menu on nav item click
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          &lt;Rahul Rana/&gt;
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              "#home",
              "#projects",
              "#skills",
              "#experience",
              "#about",
              "#contact",
            ].map((item) => (
              <li className="nav__item" key={item}>
                <a
                  href={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav__link ${
                    activeNav === item ? "active-link" : ""
                  }`}
                >
                  <i className={`uil uil-${item.slice(1)} nav__icon`}></i>{" "}
                  {item.slice(1).charAt(0).toUpperCase() + item.slice(2)}
                </a>
              </li>
            ))}
            <li className="nav__item theme-toggle-desktop">
              <ThemeToggle />
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        {!toggle && (
          <div className="theme-toggle-mobile">
            <ThemeToggle />
          </div>
        )}

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
