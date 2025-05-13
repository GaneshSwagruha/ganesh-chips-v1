import React, { useState } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

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
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = (shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Product image */}
      <div className="w-full h-50 overflow-hidden">
        <Zoom
          zoomMargin={40}
          ZoomContent={({ img, onUnzoom }) => (
            <div className="relative">
              <div 
                className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 cursor-pointer shadow-lg"
                onClick={onUnzoom}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {img}
            </div>
          )}
          onZoomChange={handleZoomChange}
          shouldHandleZoom={(e) => {
            // Only zoom on double click
            return e.detail === 2 || e.type === 'keydown';
          }}
        >
          <LazyImage
            src={`${image}?width=700&quality=85&format=webp`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </Zoom>
      </div>

      {/* Product content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Product name */}
        <h3 className="text-base font-semibold mb-1 line-clamp-2 min-h-[45px]">
          {name}
        </h3>

        {/* Product description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[35px]">
          {description}
        </p>

        {/* Product price */}
        <div className="mt-auto pt-2 border-t border-gray-200">
          <span className="text-accent-700 font-semibold text-base">
            {price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;