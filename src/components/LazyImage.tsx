// components/LazyImage.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Clean up the URL by removing double slashes
    const cleanUrl = src.replace(/([^:]\/)\/+/g, "$1");
    
    // Create a new image object to preload
    const img = new Image();
    img.src = cleanUrl;
    
    img.onload = () => {
      setImageSrc(cleanUrl);
      setLoaded(true);
      setError(false);
    };
    
    img.onerror = () => {
      if (retryCount < 2) {
        // Retry loading the image after a short delay
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
        }, 1000);
      } else {
        setError(true);
        setLoaded(true);
      }
    };

    return () => {
      // Cleanup
      img.onload = null;
      img.onerror = null;
    };
  }, [src, retryCount]);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-gray-500 text-sm">Loading image...</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
      <motion.img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onError={() => {
          if (retryCount < 2) {
            setRetryCount(prev => prev + 1);
          } else {
            setError(true);
          }
        }}
      />
    </div>
  );
};

export default LazyImage;