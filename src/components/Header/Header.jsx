"use client";
import { useState, useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavOnClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    // AOS Scroll Animation
    Aos.init({
      offset: 1,
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  const menuItems = [
    { name: "Главная", id: "heroBanner" },
    { name: "О Себе", id: "about" },
    { name: "Услуги", id: "services" },
    { name: "Отзывы", id: "testimonial" },
    { name: "Вопросы", id: "popular-questions" },
    { name: "Контакты", id: "contact-us" },
  ];

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navigation fixed-top bg-light"
        id="navbar"
      >
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#heroBanner"
          >
            <p className="logo-title mb-0 p-0">А. А. Асатрян.</p>
            <p> Бариатрический хирург</p>
          </a>

          <button
            className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="icofont icofont-navigation-menu"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarmain"
          >
            <ul className="navbar-nav ml-auto">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className="nav-link"
                    href={`#${item.id}`}
                    onClick={(event) => closeNavOnClick(event, item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
