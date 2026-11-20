// src/components/Contact.jsx
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { Mail, Phone, Link, GitBranch, ClipboardCopy } from "lucide-react";

const Contact = () => {
  const { heading } = { heading: "Let's Connect" };
  const { email, phone, linkedIn, github } = portfolio.personal;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      // simple alert - in production could use toast
      alert("Email copied to clipboard!");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-12 text-center">
      <motion.h2
        className="text-4xl font-bold text-primaryAccent mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Email Card */}
        <motion.div
          className="bg-secondaryBg bg-opacity-50 backdrop-blur-xs rounded-xl p-6 border border-primaryAccent/20 w-64"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-2 text-primaryAccent">
            <Mail size={24} />
          </div>
          <p className="text-mainText mb-2 break-all">{email}</p>
          <button
            onClick={copyEmail}
            className="mt-2 px-4 py-2 bg-primaryAccent text-background rounded hover:bg-secondaryAccent transition-colors"
          >
            Copy Email
          </button>
        </motion.div>
        {/* Phone Card */}
        <motion.div
          className="bg-secondaryBg bg-opacity-50 backdrop-blur-xs rounded-xl p-6 border border-primaryAccent/20 w-64"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-center mb-2 text-primaryAccent">
            <Phone size={24} />
          </div>
          <a href={`tel:${phone}`} className="text-mainText break-all block">
            {phone}
          </a>
        </motion.div>
        {/* LinkedIn Card */}
        <motion.div
          className="bg-secondaryBg bg-opacity-50 backdrop-blur-xs rounded-xl p-6 border border-primaryAccent/20 w-64"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-2 text-primaryAccent">
            <Link size={24} />
          </div>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryAccent underline"
          >
            LinkedIn
          </a>
        </motion.div>
        {/* GitHub Card */}
        <motion.div
          className="bg-secondaryBg bg-opacity-50 backdrop-blur-xs rounded-xl p-6 border border-primaryAccent/20 w-64"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-2 text-primaryAccent">
            <GitBranch size={24} />
          </div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryAccent underline"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
