import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import mainLogo from "../../public/pics/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium px-3 py-2 relative transition-colors ${
      isActive
        ? `text-[#FF7300] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 ${
            scrolled ? "after:bg-[#FF7300]" : "after:bg-white"
          }`
        : scrolled
        ? "text-black hover:text-[#FF7300]"
        : "text-white hover:text-white/90"
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-[#880000] py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={mainLogo}
              className="w-[45px] h-[50px] object-cover"
              alt="logo"
            />
            <h1
              className="font-heading text-lg sm:text-xl font-bold transition-colors"
              style={{ color: scrolled ? "#880000" : "#FFFFFF" }}
            >
              Ganesh Swagruha Foods
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/visit" className={navLinkClass}>
              Visit Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <a
              href="https://wa.me/919133222271"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-[#FF7300] hover:bg-[#E56700] text-white font-semibold py-2 px-4 rounded-full transition-colors whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 rounded-lg shadow-md"
            style={{
              backgroundColor: scrolled ? "#FFFFFF" : "#880000",
              color: scrolled ? "#000000" : "#FFFFFF",
            }}
          >
            <div className="flex flex-col py-2 w-full">
              {["/", "/products", "/visit", "/contact"].map((path, idx) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-[#FF7300]/20 text-[#FF7300]"
                        : scrolled
                        ? "hover:bg-gray-100"
                        : "hover:bg-[#880000]/20"
                    }`
                  }
                >
                  {["Home", "Products", "Visit Us", "Contact"][idx]}
                </NavLink>
              ))}
              <a
                href="https://wa.me/919133222271"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="mx-4 my-3 text-center bg-[#FF7300] hover:bg-[#E56700] text-white font-semibold py-2 px-4 rounded-full transition"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
