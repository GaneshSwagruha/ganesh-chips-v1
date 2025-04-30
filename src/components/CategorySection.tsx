import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string; // Add image field to product
}

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  bgColor?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  description,
  products,
  bgColor = "bg-white",
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-700">{description}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
