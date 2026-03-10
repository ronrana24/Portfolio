import { motion } from "framer-motion";
import { useState } from "react";
import { workExperience, education } from "../../../assets/data";
import "./style.css";
import Header from "../../common/heading/Header";
import { Education, WorkExperienceInterface } from "../../common/interfaces";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Active tab data
  const dataToShow: WorkExperienceInterface[] | Education[] =
    activeTab === "work" ? workExperience : education;

  const handleTabChange = (tab: "work" | "education") => {
    setActiveTab(tab);
    setExpandedIndex(0);
  };

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <Header text="My Journey" className="title" />

        {/* Tab Navigation */}
        <div className="tab-container">
          {["work", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab as "work" | "education")}
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
              whileHover={{ x: 4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              {/* Timeline bullet */}
              <div
                className={`timeline-bullet ${
                  expandedIndex === index ? "active" : ""
                }`}
              >
                <div className="bullet-inner"></div>
              </div>

              {/* Job or Education Card */}
              <div
                className={`job-card ${expandedIndex === index ? "expanded" : ""}`}
                onClick={() =>
                  setExpandedIndex((current) => (current === index ? null : index))
                }
                role="button"
                tabIndex={0}
                aria-expanded={expandedIndex === index}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setExpandedIndex((current) =>
                      current === index ? null : index,
                    );
                  }
                }}
              >
                <div className="job-card-header">
                  <h3 className="job-title">
                    {activeTab === "work"
                      ? (item as WorkExperienceInterface).position
                      : (item as Education).grade}
                  </h3>
                  <span
                    className={`accordion-arrow ${
                      expandedIndex === index ? "expanded" : ""
                    }`}
                    aria-hidden="true"
                  >
                    &#9662;
                  </span>
                </div>
                <p className="company-name">
                  {activeTab === "work"
                    ? (item as WorkExperienceInterface).company
                    : (item as Education).school}
                </p>
                <div className="job-meta">
                  <p className="job-location">{item.location}</p>
                  <p className="job-dates">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                    marginTop: expandedIndex === index ? 12 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="job-card-details"
                >
                  {activeTab === "work" && (
                    <>
                      {(item as WorkExperienceInterface).tasks?.length ? (
                        <>
                          <p className="job-section-title">Key Contributions</p>
                          <ul className="job-tasks">
                          {(item as WorkExperienceInterface).tasks?.map((task, index) => (
                              <li key={`${task}-${index}`}>{task}</li>
                          ))}
                          </ul>
                        </>
                      ) : null}

                      {(item as WorkExperienceInterface).technologies?.length ? (
                        <>
                          <p className="job-section-title">Technologies</p>
                          <div className="tech-chips">
                            {(item as WorkExperienceInterface).technologies?.map(
                              (tech) => (
                                <span key={tech} className="tech-chip">
                                  {tech}
                                </span>
                              ),
                            )}
                          </div>
                        </>
                      ) : null}
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
