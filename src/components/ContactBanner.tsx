import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-700 text-white" >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Want to Know More?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            We specialize in offline purchases only. Visit our store or get in touch with us via WhatsApp for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919133222271"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent-700 hover:bg-neutral-100 font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Contact via WhatsApp
            </a>
            <Link
              to="/visit"
              className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-full border-2 border-white transition-colors shadow-md hover:shadow-lg"
            >
              Visit Our Store
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;