import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  bgColor?: string;
  showButton?: boolean; // Added prop for showing button
}

const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  description,
  products,
  bgColor = "bg-white",
  showButton = false, // Default to false
}) => {
  const isHome = id === "home"; // Only show button if section is home
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-700">{description}</p>

          {/* Conditionally show oil info only in pickles section */}
          {id === "pickles" && (
            <p className="mt-4 text-lg font-semibold text-[#D64500] bg-[#FFF2E5] px-4 py-2 rounded-lg inline-block">
              Peanut/Sesame oil – ₹600/kg | Custom orders | Minimum. 1 kg
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, visibleItems).map((product, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col">
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </div>

              {/* Only insert this block after 3rd item and only on home page */}
              {showButton && index === 2 && (
                <div className="block lg:hidden">
                  <div className="flex justify-center items-center">
                    <Link
                      to="/products"
                      className="mt-40 w-full text-center bg-primary-700 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      View More Products
                    </Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Only show bottom button on large screens and only on home page */}
          {showButton && (
            <div className="hidden lg:flex justify-center items-center col-span-3 mt-6">
              <Link
                to="/products"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                View More Products
              </Link>
            </div>
          )}
          {visibleItems < products.length && (
            <div className="w-full flex justify-center mt-8 col-span-2 sm:col-span-2 lg:col-span-3">
              <button
                onClick={loadMore}
                className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
