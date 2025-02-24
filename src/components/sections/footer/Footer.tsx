import "./style.css";
import useVisit from "../../common/hooks/useVisit";
import { SOCIAL_LINKS } from "../../../assets/constant";

export default function Footer() {
  const [count, _] = useVisit();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          &#169; Rahul Rana. All rights reserved.
        </span>
        <div className="visitor-container">
          <span className="visitor-count">
            Number of total Visitors: <strong>{count}</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
