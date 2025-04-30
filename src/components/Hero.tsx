import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chipsImage from "../pics/chips.jpg";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-cream min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent-200 opacity-30 blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-secondary-200 opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-primary-300 opacity-20 blur-xl"></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e67e22' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-4 leading-tight">
              Welcome to{" "}
              <span className="whitespace-nowrap" style={{ color: "#D0021B" }}>
                Ganesh Swagruha Foods
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 mb-6 leading-relaxed">
            Tradition in every touch, quality in every bite — handmade for generations to cherish.
            </p>
            <div className="bg-primary-100 border-l-4 border-primary-500 p-4 mb-8 rounded-r-lg">
              <p className="text-lg font-medium text-primary-800 italic">
                "Years may pass, seasons may change, but some tastes stay forever — carrying the comfort of home in every bite."
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Explore Our Products
              </Link>
              <Link
                to="/visit"
                className="bg-white hover:bg-neutral-100 text-primary-700 font-medium py-3 px-6 rounded-full border-2 border-primary-600 transition-colors shadow-md hover:shadow-lg"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <img
                src={chipsImage}
                alt="Traditional Indian sweets and snacks"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg border-8 border-white bg-secondary-100 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-lg border-8 border-white bg-accent-100 -z-10"></div>

              {/* Floating badges */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-primary-800 font-medium">
                  ✨ Traditional Flavors ✨
                </p>
              </div>
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-primary-800 font-medium">
                  ❤️ Made with Love ❤️
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
