import React, { useState } from "react";
import { motion } from "framer-motion";
// import Zoom from "react-medium-image-zoom";
import LazyImage from "./LazyImage";

import "react-medium-image-zoom/dist/styles.css"; // Important: import the styles!

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden lex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-5">
      <LazyImage 
          src={`${image}?width=600&quality=90&format=webp`} 
          // srcSet={`${image}?width=800&quality=90&format=webp 1x, ${image}?width=1600&quality=90&format=webp 2x`}
          alt={name} 
          className="w-full h-full"
          
        />
        
        <h3 className="text-lg font-semibold mb-1 mt-3">
          {" "}
          {/* Added mt-2 for top margin */}
          {name}
        </h3>{" "}
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-accent-700 font-bold">{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
