import { motion } from "framer-motion";
import { workExperience, education } from "../../../assets/data";
import "./style.css";
import { useState } from "react";
import Header from "../../common/heading/Header";
import { Education, WorkExperienceInterface } from "../../common/interfaces";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState<string>("work");

  // Determine which data to display based on the active tab
  const dataToShow: WorkExperienceInterface[] | Education[] =
    activeTab === "work" ? workExperience : education;

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <Header text="My Journey" className={"title"} />

        {/* Tab Navigation */}
        <div className="tab-container">
          {["work", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <div className={`tab-indicator ${activeTab}`}></div>
        </div>

        <div className="timeline">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Mapping over Work or Education based on active tab */}
          {dataToShow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              {/* Timeline bullet */}
              <div className="timeline-bullet">
                <div className="bullet-inner"></div>
              </div>

              {/* Content Card (Work or Education) */}
              <div className="job-card">
                <h3 className="job-title">
                  {activeTab === "work" ? item.position : item.grade}
                </h3>
                <div className="job-details">
                  <p className="company-name">
                    {activeTab === "work" ? item.company : item.school}
                  </p>
                  <p className="job-location">{item.location}</p>
                </div>
                <p className="job-dates">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
