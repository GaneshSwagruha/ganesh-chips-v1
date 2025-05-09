// components/LazyImage.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const currentSrc = useRef<string>("");

  const cleanUrl = src.replace(/([^:]\/)\/+/g, "$1");

  useEffect(() => {
    if (!cleanUrl || error || retryCount > 2) return;

    const handleLoad = () => {
      setLoaded(true);
      setError(false);
    };

    const handleError = () => {
      if (retryCount < 2) {
        setTimeout(() => setRetryCount(c => c + 1), 1000);
      } else {
        setError(true);
        setLoaded(true);
      }
    };

    // Intersection Observer setup
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imgRef.current && !currentSrc.current) {
          const img = new Image();
          img.src = cleanUrl;
          img.onload = handleLoad;
          img.onerror = handleError;
          currentSrc.current = cleanUrl;
        }
      });
    }, {
      rootMargin: '200px', // Start loading 200px before entering viewport
      threshold: 0.01
    });

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [cleanUrl, retryCount, error]);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      <motion.img
        ref={imgRef}
        src={currentSrc.current}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover rounded-lg ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onError={() => setRetryCount(c => c + 1)}
      />
    </div>
  );
};

export default LazyImage;