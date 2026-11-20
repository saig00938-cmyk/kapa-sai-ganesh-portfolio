// src/components/Skills.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Laptop, Database, Code } from "lucide-react"; // generic icons

const iconMap = {
  "HTML5": Laptop,
  "CSS3": Laptop,
  "JavaScript": Laptop,
  "React.js": Laptop,
  "Java": Code,
  "Python": Code,
  "SQL": Database,
};

const Skills = () => {
  const { heading, categories } = portfolio.skills;

  return (
    <section id="skills" className="section fade-up">
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
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            className="bg-secondaryBg bg-opacity-50 backdrop-blur-xs rounded-xl p-6 border border-primaryAccent/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-mainText mb-4">
              {cat.name}
            </h3>
                        <ul className="skill-badges">
              {cat.items.map((skill, si) => {
                const Icon = iconMap[skill] || Laptop;
                return (
                  <li
                    key={si}
                    className="skill-badge"
                  >
                    <Icon size={16} className="text-primaryAccent" />
                    <span className="text-sm text-mainText">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
