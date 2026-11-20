// src/components/Certificates.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { FileText } from "lucide-react";

const Certificates = () => {
  const { heading } = { heading: "Certificates & Achievements" };
  const certificates = portfolio.certificates;

  return (
        <section id="certificates" className="section fade-up">
      <motion.h2
        className="text-4xl font-bold text-primaryAccent mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>
            <div className="grid-section">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className="card bg-primary p-4 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex items-center mb-3">
              <FileText size={24} className="text-primaryAccent mr-2" />
              <h3 className="text-2xl font-semibold text-mainText">
                {cert.title}
              </h3>
            </div>
            <p className="text-secondaryText mb-2">
              {cert.category}
            </p>
            {cert.issuer && <p className="text-secondaryText">Issuer: {cert.issuer}</p>}
            {cert.date && <p className="text-secondaryText">Date: {cert.date}</p>}
            <div className="button-group">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Certificate
              </a>
              <a
                href={cert.image}
                download
                className="btn-primary"
              >
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
