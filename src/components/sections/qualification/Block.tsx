import { motion } from "framer-motion";
import { WorkExperienceInterface } from "../../common/interfaces";

export default function Block({
  index,
  job,
}: {
  index: number;
  job: WorkExperienceInterface;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item"
    >
      {/* Timeline bullet */}
      <div className="timeline-bullet">
        <div className="bullet-inner"></div>
      </div>

      <div className="job-card">
        <h3 className="job-title">{job.position}</h3>
        <div className="job-details">
          <p className="company-name">{job.company}</p>
          <p className="job-location">{job.location}</p>
        </div>
        <p className="job-dates">
          {job.startDate} - {job.endDate}
        </p>
      </div>
    </motion.div>
  );
}
