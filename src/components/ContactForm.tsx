import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submission:', formData);
    setSubmitted(true);
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="font-heading text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h3>
      
      {submitted ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="Enter your phone number (optional)"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;