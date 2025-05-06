import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import CategorySection from "../components/CategorySection";
import ContactBanner from "../components/ContactBanner";
import ScrollToTopButton from "../components/ScrollToTopButton"; // adjust path if needed

const snackPreview = [
  {
    name: "Chips",
    description: "Thin, crispy potato slices",
    price: "₹110 / 250 grms",
    image: "/pics/chips.jpg",
  },
  {
    name: "Kara",
    description: "Crunchy, spicy snack mix",
    price: "₹90 / 250 grms",
    image: "/pics/kara.jpg",
  },
  {
    name: "Rings",
    description: "Crispy and savory",
    price: "₹90 / 250 grms",
    image: "/pics/rings.jpg",
  },
];

const sweetsPreview = [
  {
    name: "Boondi Laddu",
    description: "Extra large, extra tasty",
    price: "₹100 / 250grms",
    image: "/pics/boondiLaddu.jpg",
  },
  {
    name: "Bakshalu",
    description: "Jaggery and dal magic",
    price: "₹125 / 250grms",
    image: "/pics/bakshalu.jpg",
  },
  {
    name: "Sununda (Pure Ghee)",
    description: "Minumulu and ghee goodness",
    price: "₹150 / 250grms",
    image: "/pics/sununda.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />

      <CategorySection
        id="home"
        title="Popular Picks"
        description="Check out our best-selling items."
        products={snackPreview}
        showButton={true}

      />

      <CategorySection
        id="sweets-preview"
        title="Festive Sweets"
        description="Celebrate life's sweet moments with our traditional handcrafted sweets."
        products={sweetsPreview}
        bgColor="bg-white"
        showButton={true}

      />

      <ContactBanner />
      <ScrollToTopButton />
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
