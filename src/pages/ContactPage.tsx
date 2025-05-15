import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Instagram, Mail, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className="bg-[#880000] from-primary-600 to-primary-700 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="max-w-3xl mx-auto text-lg">
              Get in touch with us for more information about our products and
              services.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 justify-center">
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full">
                <h3 className="font-heading text-2xl font-bold text-primary-800 mb-6">
                  Connect With Us
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Phone className="h-10 w-10 text-primary-600 mr-4" />
                    <div>
                      <h4 className="font-heading text-lg font-bold text-primary-800 mb-2">
                        WhatsApp
                      </h4>
                      <p className="text-neutral-700 mb-2">
                        For quick responses and inquiries
                      </p>
                      <a
                        href="https://wa.me/919133222271"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 font-medium"
                      >
                        +91 91332 22271
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-10 w-10 text-primary-600 mr-4" />
                    <div>
                      <h4 className="font-heading text-lg font-bold text-primary-800 mb-2">
                        Email
                      </h4>
                      <p className="text-neutral-700 mb-2">
                        For detailed inquiries and business proposals
                      </p>
                      <a
                        href="mailto:ganeshswagruhafoods@gmail.com"
                        className="text-primary-600 hover:text-primary-800 font-medium"
                      >
                        ganeshswagruhafoods@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Instagram className="h-10 w-10 text-primary-600 mr-4" />
                    <div>
                      <h4 className="font-heading text-lg font-bold text-primary-800 mb-2">
                        Instagram
                      </h4>
                      <p className="text-neutral-700 mb-2">
                        Follow us for updates, new products, and offers
                      </p>
                      <a
                        href="https://www.instagram.com/ganeshswagruha.foods/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 font-medium"
                      >
                        @ganeshswagruha.foods
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <p className="text-primary-800 text-center font-medium">
                    We make each order customised with care.
                    <br />
                    To match your taste and preference. Just the
                    way you like it.{" "}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-900 mb-8">
              From Plate to Heart ❤️
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-700 mb-8">
              Bringing the village flavors to your celebrations and festivals!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
