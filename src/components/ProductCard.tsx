import React, { useState } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import Modal from "react-modal";

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

  const openZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  return (
    <>
      {/* Zoom Modal */}
      <Modal
        isOpen={isZoomed}
        onRequestClose={closeZoom}
        contentLabel="Zoom Image"
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90 p-4"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-white text-xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded"
            onClick={closeZoom}
          >
            ✕
          </button>
          <img
            src={`${image}?width=1000&quality=100`}
            alt={name}
            loading="lazy"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </Modal>

      <motion.div
        className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
        whileHover={{ y: -2 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Product image with zoom button */}
        <div className="relative w-full h-50 overflow-hidden group">
          <LazyImage
            src={`${image}?width=700&quality=90&format=webp`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={openZoom}
            className="absolute bottom-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            🔍 Zoom
          </button>
        </div>

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
    </>
  );
};

export default ProductCard;
