import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ScrollToTopLink from "./ScrollIntoTopLink";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/products") {
      // If we're already on products page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on products page, navigate there first
      window.location.href = `/products#${sectionId}`;
    }
  };
  return (
    <footer className="bg-[#002147] text-[#FFFFFF] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Ganesh Swagruha Foods
            </h3>
            <p className="text-primary-100 mb-4">
              Tradition in every touch, quality in every bite — handmade for
              generations to cherish.
            </p>
            <p className="text-primary-200 italic">"From Plate to Heart ❤️"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/visit"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  Visit Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("snacks")}
                  className="text-primary-100 hover:text-white transition-colors text-left w-full"
                >
                  Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("traditional-snacks")}
                  className="text-primary-100 hover:text-white transition-colors text-left w-full"
                >
                  Traditional Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sweets")}
                  className="text-primary-100 hover:text-white transition-colors text-left w-full"
                >
                  Sweets
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("papads")}
                  className="text-primary-100 hover:text-white transition-colors text-left w-full"
                >
                  Papads
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary-300 mt-0.5" />
                <a
                  href="https://wa.me/919133222271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  +91 91332 22271
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary-300 mt-0.5" />
                <a
                  href="mailto:ganeshswagruhafoods@gmail.com"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  ganeshswagruhafoods@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 mr-3 text-primary-300 mt-0.5" />
                <a
                  href="https://www.instagram.com/ganeshswagruha.foods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  @ganeshswagruha.foods
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-300 mt-0.5" />
                <span className="text-primary-100">
                  Visit our store for offline purchases
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-primary-300 text-sm">
          <p>
            &copy; {currentYear} Ganesh Swagruha Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
