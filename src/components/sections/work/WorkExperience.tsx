import { motion } from "framer-motion";
import { useState } from "react";
import { workExperience, education } from "../../../assets/data";
import "./style.css";
import Header from "../../common/heading/Header";
import { Education, WorkExperienceInterface } from "../../common/interfaces";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  // Active tab data
  const dataToShow: WorkExperienceInterface[] | Education[] =
    activeTab === "work" ? workExperience : education;

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <Header text="My Journey" className="title" />

        {/* Tab Navigation */}
        <div className="tab-container">
          {["work", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "work" | "education")}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              aria-pressed={activeTab === tab}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <div className={`tab-indicator ${activeTab}`} />
        </div>

        <div className="timeline">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Timeline Items */}
          {dataToShow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              {/* Timeline bullet */}
              <div className="timeline-bullet">
                <div className="bullet-inner"></div>
              </div>

              {/* Job or Education Card */}
              <div className="job-card">
                <h3 className="job-title">
                  {activeTab === "work"
                    ? (item as WorkExperienceInterface).position
                    : (item as Education).grade}
                </h3>
                <p className="company-name">
                  {activeTab === "work"
                    ? (item as WorkExperienceInterface).company
                    : (item as Education).school}
                </p>
                <p className="job-location">{item.location}</p>
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
