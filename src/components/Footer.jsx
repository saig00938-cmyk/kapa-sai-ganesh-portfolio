// src/components/Footer.jsx
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondaryBg text-secondaryText py-6">
      <motion.div
        className="max-w-5xl mx-auto px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={scrollToTop}
          className="mb-4 p-2 bg-primaryAccent rounded-full hover:bg-secondaryAccent transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="text-background" />
        </button>
        <p className="text-sm">© {new Date().getFullYear()} Kapa Sai Ganesh. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
