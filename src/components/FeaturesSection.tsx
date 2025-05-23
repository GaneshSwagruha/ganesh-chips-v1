import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Sparkles, Utensils } from 'lucide-react';

import bannerImage from "../../public/pics/allSweetsBanner_02.png"

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-rose-600" />,
      title: 'Made with Love',
      description: 'Every snack is carefully handcrafted with traditional methods and recipes passed down through generations.'
    },
    {
      icon: <Award className="h-10 w-10 text-amber-600" />,
      title: 'Authentic Flavors',
      description: 'Experience the true taste of Indian village festivals with our authentic recipes and premium ingredients.'
    },
    {
      icon: <Sparkles className="h-10 w-10 text-indigo-600" />,
      title: 'Rich Quality',
      description: 'Our snacks and sweets are prepared to the highest standards, perfect for celebrations and special occasions.'
    },
    {
      icon: <Utensils className="h-10 w-10 text-emerald-600" />,
      title: 'Traditional Methods',
      description: 'We maintain traditional preparation techniques to preserve the authentic taste and texture of each item.'
    }
  ];

  // Placeholder background pattern (using CSS instead of image)
  const patternStyle = {
    backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)',
    backgroundSize: '20px 20px'
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-amber-50 to-rose-50 overflow-hidden">
      {/* Decorative background elements - using CSS pattern instead of image */}
      <div className="absolute inset-0 opacity-10" style={patternStyle}></div>
      
      {/* Banner Section - with fallback gradient if image doesn't load */}
      <div className="relative bg-gradient-to-r from-amber-700 to-rose-800 py-12 mb-16 rounded-lg mx-4 shadow-xl overflow-hidden">
        {/* Image with fallback to gradient only */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-rose-800">
          <img 
            src= "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/bakshalu.jpg"
            alt="Traditional Indian sweets"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            What Makes Us Special
            </h2>
            <p className="max-w-3xl mx-auto text-amber-100 text-xl">
              Our commitment to tradition, quality, and authentic flavors sets us apart.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-amber-50">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block">
          <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-rose-200 opacity-20 blur-xl"></div>
          <div className="absolute -right-20 bottom-1/4 w-48 h-48 rounded-full bg-amber-200 opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;