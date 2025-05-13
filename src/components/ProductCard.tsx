import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleImageClick = () => {
    setIsLightboxOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    setZoomLevel(zoomLevel === 1 ? 2 : 1);
    setPosition({ x: 0, y: 0 }); // Reset position when zooming
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

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
      <div 
        className="w-full h-50 overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <LazyImage
          src={`${image}?width=700&quality=85&format=webp`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsLightboxOpen(false)}
          onMouseUp={handleMouseUp}
        >
          <button
            className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-white rounded-full p-2 cursor-pointer shadow-lg transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
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
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${image}?width=1200&quality=90&format=webp`}
              alt={name}
              className="max-w-full max-h-full object-contain cursor-move"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease',
              }}
            />
            {zoomLevel > 1 && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                Double click to zoom out | Click and drag to pan
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold mb-1 line-clamp-2 min-h-[45px]">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[35px]">
          {description}
        </p>
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