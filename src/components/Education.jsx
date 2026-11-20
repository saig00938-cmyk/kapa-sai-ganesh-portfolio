 // src/components/Education.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Education = () => {
  const { heading } = { heading: "My Education" };
  const educationList = portfolio.education; // now an array

  return (
    <section id="education" className="max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-bold text-primaryAccent mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-mainText mb-2">
              {edu.degree}
            </h3>
            <p className="text-secondaryText mb-1">{edu.institution}</p>
            <p className="text-secondaryText mb-1">
              {edu.graduation && `Graduation: ${edu.graduation}`}
            </p>
            {edu.cgpa && <p className="text-secondaryText mb-1">CGPA: {edu.cgpa}</p>}
            {edu.percentage && <p className="text-secondaryText mb-1">Percentage: {edu.percentage}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
