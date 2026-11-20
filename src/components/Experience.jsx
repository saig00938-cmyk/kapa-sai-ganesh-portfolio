// src/components/Experience.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { heading } = { heading: "Professional Experience" };
  const experiences = portfolio.experience;

  return (
        <section id="experience" className="section fade-up">
      <motion.h2
        className="text-4xl font-bold text-primaryAccent mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>
      <div className="relative border-l-2 border-primaryAccent/30 pl-8 space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex-shrink-0 mt-1">
              <Briefcase size={24} className="text-primaryAccent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-mainText">
                {exp.role} – {exp.company}
              </h3>
              <ul className="list-disc list-inside text-secondaryText mt-2 space-y-1">
                {exp.responsibilities.map((r, ri) => (
                  <li key={ri}>{r}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
