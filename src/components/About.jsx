// src/components/About.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const About = () => {
  const { heading, description, cards } = portfolio.about;

  return (
    <section id="about" className="section fade-up">
      <motion.h2
        className="text-4xl font-bold text-primaryAccent mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="text-lg text-secondaryText mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <div className="grid-section">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-mainText mb-2">
              {card.title}
            </h3>
            {card.description && (
              <p className="text-secondaryText">{card.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
