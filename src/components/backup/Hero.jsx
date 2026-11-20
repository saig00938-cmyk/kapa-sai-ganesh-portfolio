// backup of original Hero.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Link, GitBranch } from "lucide-react";

const Hero = () => {
  const { greeting, intro, buttons, social } = portfolio.hero;
  const { fullName, title, avatar } = portfolio.personal;

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 space-y-8">
      {/* Greeting */}
      <motion.h2
        className="text-secondaryText text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {greeting}
      </motion.h2>
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-primaryAccent"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {fullName}
      </motion.h1>
      {/* Title */}
      <motion.h3
        className="text-2xl md:text-3xl font-medium text-mainText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      {/* Intro paragraph */}
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
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            {...(btn.download ? { download: true } : {})}
            className="px-6 py-3 bg-primaryAccent text-background rounded-md shadow-md hover:bg-secondaryAccent transition-colors"
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
      {/* Profile Image */}
      <motion.img
        src={avatar}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover border-4 border-primaryAccent shadow-lg mt-8"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </section>
  );
};

export default Hero;
