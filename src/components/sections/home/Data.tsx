import React, { useState, useEffect } from "react";
import { MdOutlineWavingHand } from "react-icons/md";

const Data: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const originalText: string = "Rahul Rana";
  const [displayText, setDisplayText] = useState<string>(originalText);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let iteration: number = 0;

    if (isAnimating) {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          return prev
            .split("")
            .map((letter, index) => {
              if (index < Math.floor(iteration)) {
                return originalText[index];
              }

              if (letter === " ") return " ";
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
        });

        iteration += 1 / 3;

        if (iteration >= originalText.length) {
          clearInterval(interval!);
          setIsAnimating(false);
          setDisplayText(originalText);
        }
      }, 30);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimating, originalText]);

  const handleHover = (): void => {
    setIsAnimating(true);
  };

  return (
    <div className="home__data">
      <h1
        className="home__title font-bold"
        onMouseEnter={handleHover}
        style={{
          fontFamily: "monospace",
          cursor: "pointer",
          transition: "all 0.25s",
          textShadow: isAnimating ? "0 0 8px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {displayText}
      </h1>

      <h3 className="home__subtitle">Software Developer</h3>
      <p className="home__description">
        I am a software developer with three years of startup experience. I
        specialize in building scalable and efficient applications. With
        expertise in backend development
      </p>

      <a href="https://cal.com/rahul-rana" className="button button--flex">
        Say Hello
        <MdOutlineWavingHand className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
