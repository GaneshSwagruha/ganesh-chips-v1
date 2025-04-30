import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import CategorySection from "../components/CategorySection";
import ContactBanner from "../components/ContactBanner";

const snackPreview = [
  {
    name: "Chips",
    description: "Thin, crispy potato slices",
    price: "₹440 per kg",
    image: "/pics/chips.jpg",
  },
  {
    name: "Kara",
    description: "Crunchy, spicy snack mix",
    price: "₹360 per kg",
    image: "/pics/kara.jpg",
  },
  {
    name: "rings",
    description: "Light, airy, and crisp",
    price: "₹360 per kg",
    image: "/pics/rings.jpg",
  },
];

const sweetsPreview = [
  {
    name: "Boondi Laddu",
    description: "Extra large, extra tasty",
    price: "₹400 per kg",
    image: "/pics/boondi.jpg",
  },
  {
    name: "Bakshalu",
    description: "Jaggery and dal magic",
    price: "₹350 per kg",
    image: "/pics/bakshalu.jpg",
  },
  {
    name: "Sununda (pure ghee)",
    description: "Minumulu & ghee Goodness",
    price: "600 per kg",
    image: "/pics/sununda.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />

      <CategorySection
        id="snacks-preview"
        title="Popular Snacks"
        description="Craving something savory? Our delicious snacks are perfect for any time of day."
        products={snackPreview}
        bgColor="bg-cream"
      />

      <CategorySection
        id="sweets-preview"
        title="Festive Sweets"
        description="Celebrate life's sweet moments with our traditional handcrafted sweets."
        products={sweetsPreview}
        bgColor="bg-white"
      />

      <ContactBanner />
      {/* {snackPreview.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}  // Pass the image as a prop
        />
      ))} */}
    </>
  );
};
export default HomePage;
