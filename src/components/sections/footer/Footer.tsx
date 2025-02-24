import "./style.css";
import useVisit from "../../common/hooks/useVisit";
import React from "react";

export default function Footer() {
  const [count] = useVisit();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          &#169; Rahul Rana. All rights reserved.
        </span>
        <div className="visitor-container">
          <span className="visitor-count">
            Number of total Visitors:{" "}
            <strong>{count as React.ReactNode}</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
