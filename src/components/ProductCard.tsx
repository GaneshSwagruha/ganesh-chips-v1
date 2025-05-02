import React, {useState} from "react";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
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
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-5">
        <Zoom zoomMargin={40} overlayBgColorEnd="rgba(0,0,0,0.85)">
          <LazyImage src={image} alt={name} className="w-full h-full" />
        </Zoom>
        <h3 className="text-lg font-semibold mb-1 mt-3">
          {" "}
          {/* Added mt-2 for top margin */}
          {name}
        </h3>{" "}
        <p className="text-neutral-600 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-accent-700 font-bold">{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
