// src/components/Hero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Link, GitBranch } from "lucide-react";
import CharacterAnimation from "./CharacterAnimation.jsx";
import { useRef } from "react";

const Hero = () => {
  const { greeting, intro, buttons, social } = portfolio.hero;
  const { fullName, title } = portfolio.personal;

  // Wrapper ref for scroll progress covering the three animation stages
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: wrapperRef });

// Opacity for left column text – visible only during stage 1 (0‑0.2)
  const leftOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);

  // Opacity for stage 2 and 3 text
  const stage2TextOpacity = useTransform(scrollYProgress, [0.25, 0.36, 0.45], [0, 1, 0]);
  const stage3TextOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

  return (
    <div className="hero-scroll-wrapper" ref={wrapperRef}>
      {/* Sticky hero that stays full‑screen while scrolling */}
      <div className="hero-sticky">
        <section id="home" className="hero-grid fade-up">
          {/* Left column – intro text */}
          <motion.div className="hero-left" style={{ opacity: leftOpacity }}>
            <motion.h2
              className="text-secondaryText text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {greeting}
            </motion.h2>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-primaryAccent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {fullName}
            </motion.h1>
            <motion.h3
              className="text-2xl md:text-3xl font-medium text-mainText"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="max-w-2xl text-secondaryText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {intro}
            </motion.p>
            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  {...(btn.download ? { download: true } : {})}
                  className="btn-primary"
                >
                  {btn.label}
                </a>
              ))}
            </motion.div>
            {/* Social Icons */}
            <motion.div
              className="flex space-x-6 mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {social.map((s) => {
                const Icon = s.name === "LinkedIn" ? Link : GitBranch;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondaryBg rounded-full hover:bg-primaryAccent transition-colors"
                  >
                    <Icon size={24} className="text-mainText" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
          {/* Center stage texts for stage 2 and 3 */}
          <motion.div
            className="stage2-text"
            style={{ opacity: stage2TextOpacity, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", maxWidth: "80%" }}
          >
            <motion.h2
              className="text-4xl font-bold text-primaryAccent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Turning Ideas Into Reality
            </motion.h2>
            <motion.h3
              className="text-2xl font-medium text-mainText mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Learning. Building. Improving.
            </motion.h3>
            <motion.p
              className="text-secondaryText mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exploring Java, React, JavaScript, and SQL to create practical software solutions.
            </motion.p>
          </motion.div>
          <motion.div
            className="stage3-text"
            style={{ opacity: stage3TextOpacity, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", maxWidth: "80%" }}
          >
            <motion.h2
              className="text-4xl font-bold text-primaryAccent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to My Portfolio!
            </motion.h2>
            <motion.p
              className="text-secondaryText mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore my projects, technical skills, and development journey.
            </motion.p>
          </motion.div>
          {/* Right column – character animation */}
          <div className="hero-right">
            <CharacterAnimation containerRef={wrapperRef} />
          </div>
        </section>
      </div>
    </div>
  );
};


export default Hero;
