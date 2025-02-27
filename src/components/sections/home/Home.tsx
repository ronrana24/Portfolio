import React from "react";
import "./style.css";
import ScrollDown from "./ScrollDown";
import { SOCIAL_LINKS } from "../../../assets/constant";
import Data from "./Data";

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="home__social-icon"
                target="_blank"
              >
                <item.icon className="uil uil-instagram"></item.icon>
              </a>
            ))}
          </div>
          <div className="home__img">
            {/* <img src="https://drive.usercontent.google.com/download?id=1ONHTn3kFh6bfiMlAd0sc34_It57Lh4x9&export=view&authuser=0" /> */}
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
