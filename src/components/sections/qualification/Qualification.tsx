import { useState } from "react";
import "./style.css"; // Import custom CSS
import Header from "../../common/heading/Header";

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="qualification" className="section">
      <div className="container">
        <Header text="My journey" className={"title"} />
        <div className="tab-container">
          <button
            onClick={() => setActiveTab("work")}
            className={`tab-button ${activeTab === "work" ? "active" : ""}`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
          >
            Education
          </button>
        </div>
        <div className="mt-8">
          {activeTab === "work" ? (
            // workExperience.map((experience) => (

            // ))
            <div>
              {/* Work Experience */}
              <div className="experience-item">
                <h3 className="experience-title">Software Developer</h3>
                <p className="experience-company">
                  Mplify - Gandhinagar, Gujarat
                </p>
                <span className="experience-date">
                  <i className="uil uil-calendar-alt mr-1"></i> Jan 2023 -
                  Present
                </span>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">Full Stack Web Developer</h3>
                <p className="experience-company">
                  Masai School - Bengaluru, Karnataka
                </p>
                <span className="experience-date">
                  <i className="uil uil-calendar-alt mr-1"></i> Apr 2022 - Dec
                  2022
                </span>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">Web Developer</h3>
                <p className="experience-company">
                  Uaguria Software - Contai, WB
                </p>
                <span className="experience-date">
                  <i className="uil uil-calendar-alt mr-1"></i> Sep 2020 - Feb
                  2022
                </span>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">Repub Member</h3>
                <p className="experience-company">
                  Patel G Tech LLP - Kolkata, WB
                </p>
                <span className="experience-date">
                  <i className="uil uil-calendar-alt mr-1"></i> Aug 2019 - Sep
                  2020
                </span>
              </div>
            </div>
          ) : (
            <div>
              {/* Education */}
              <div className="experience-item">
                <h3 className="experience-title">BCA</h3>
                <p className="experience-company">CCLMS, West Bengal</p>
                <span className="experience-date">
                  <i className="uil uil-calendar-alt mr-1"></i> July 2017 - July
                  2020
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
