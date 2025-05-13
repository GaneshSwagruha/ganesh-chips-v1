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
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/chips.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Rings",
    description: "Crispy and savory",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/rings.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Kara",
    description: "Crunchy, spicy snack mix",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/kara.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Appalu",
    description: "Flattened rice flour snack",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/appalu.jpg",
  },
];

const sweetsPreview = [
  {
    name: "Boondi Laddu",
    description: "Extra large, extra tasty",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/boondiLaddu.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Sununda (Pure Ghee)",
    description: "Minumulu and ghee goodness",
    price: "₹150 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sununda.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Bakshalu",
    description: "Jaggery and dal magic",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/bakshalu.jpg?width=600&quality=85&format=webp",
  },
  {
    name: "Laddu",
    description: "Soft, sweet golden balls",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/laddu.jpg",
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
