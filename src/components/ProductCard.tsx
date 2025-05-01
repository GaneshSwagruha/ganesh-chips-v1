import React from 'react';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css'; // Important: import the styles!

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
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
        <img
          src={image}
          alt={name}
          className="w-full h-58 object-cover rounded-t-lg mb-5" // Set the image to be a fixed height
        />
        </Zoom>
        <h3 className="font-heading text-lg font-bold text-primary-800 mb-2">{name}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-accent-700 font-bold">{price}</span>
          {/* <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs font-medium">
            In-store Only
          </span> */}
        </div>
      </div>
    </motion.div>
  );
};


export default ProductCard;