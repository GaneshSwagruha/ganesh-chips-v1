import React from "react";
import VisitSection from "../components/VisitSection";

const VisitPage: React.FC = () => {
  return (
    <div>
      <div className="bg-[#880000] from-primary-600 to-primary-700 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Visit Us
            </h1>
            <p className="max-w-3xl mx-auto text-lg">
              We make each order customised with care. To match your taste and
              preference. Just the way you like it.{" "}
            </p>
          </div>
        </div>
      </div>

      <VisitSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Festival Season Special
            </h2>
            <p className="max-w-3xl mx-auto text-neutral-700">
              During festival seasons, we offer special packages and extended
              hours. Contact us for more details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <h3 className="font-heading text-xl font-bold text-primary-800 mb-3">
                Diwali Special
              </h3>
              <p className="text-neutral-700 mb-4">
                Festive assortments perfect for gifting and celebrations during
                Diwali.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <h3 className="font-heading text-xl font-bold text-primary-800 mb-3">
                Sankranti Collection
              </h3>
              <p className="text-neutral-700 mb-4">
                Traditional sweets and snacks essential for Sankranti
                festivities.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <h3 className="font-heading text-xl font-bold text-primary-800 mb-3">
                Wedding Season
              </h3>
              <p className="text-neutral-700 mb-4">
                Bulk orders for weddings and special occasions with customized
                packaging.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/919133222271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Inquire About Special Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitPage;
