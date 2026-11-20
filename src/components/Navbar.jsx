// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { portfolio } from "../data/portfolio";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = portfolio.navItems;
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="text-primaryAccent text-2xl font-bold">
          {portfolio.personal.fullName}
        </a>
        {/* Desktop menu */}
        <ul className="nav-links hidden md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-primaryAccent"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primaryAccent scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="menu-button md:hidden text-mainText"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <motion.ul
          className="nav-links-mobile md:hidden bg-secondaryBg px-4 pb-4 pt-2 space-y-3 text-sm text-mainText"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className="block hover:text-primaryAccent"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
