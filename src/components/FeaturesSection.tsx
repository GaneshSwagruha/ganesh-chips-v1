import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Sparkles, Utensils } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-primary-600" />,
      title: 'Made with Love',
      description: 'Every snack is carefully handcrafted with traditional methods and recipes passed down through generations.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: 'Authentic Flavors',
      description: 'Experience the true taste of Indian village festivals with our authentic recipes and premium ingredients.'
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary-600" />,
      title: 'Rich Quality',
      description: 'Our snacks and sweets are prepared to the highest standards, perfect for celebrations and special occasions.'
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary-600" />,
      title: 'Traditional Methods',
      description: 'We maintain traditional preparation techniques to preserve the authentic taste and texture of each item.'
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What Makes Us Special
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-700">
            Our commitment to tradition, quality, and authentic flavors sets us apart.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;