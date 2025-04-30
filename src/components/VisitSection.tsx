import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';

const VisitSection: React.FC = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Visit Our Store
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-700">
            We specialize in offline purchases only. Visit our store and experience the flavors of tradition!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-2">Our Location</h3>
                  <p className="text-neutral-700">
                  H.no 6-1-313 Ashok nagar, Ganesh Chips,<br />
                  Karimnagar, Telangana 505001, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-2">Business Hours</h3>
                  <p className="text-neutral-700">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-2">Special Hours</h3>
                  <p className="text-neutral-700">
                    Extended hours during festival seasons.<br />
                    Please call ahead for holiday schedules.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://wa.me/919133222271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Contact Us via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.0013578023163!2d79.13734117518966!3d18.438247482639426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd91a4d3326c5%3A0x88aec9dd1d86fc0d!2sGanesh%20chips!5e0!3m2!1sen!2sin!4v1745861902935!5m2!1sen!2sin"
  width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full"
    ></iframe>

    {/* Floating info box */}
    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10">
      <h4 className="font-heading font-bold text-primary-800 mb-2">Ganesh Swagruha Foods</h4>
      <p className="text-neutral-700 text-sm">
        Experience authentic Indian village flavors at our store location.
      </p>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisitSection;