import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CategorySection from "../components/CategorySection";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FF7300]"></div>
  </div>
);
// Snacks data
const snacks = [
  {
    name: "Chips",
    description: "Thin, crispy potato slices",
    price: "₹110 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/chips.jpg",
  },
  {
    name: "Kara",
    description: "Crunchy, spicy snack mix",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/kara.jpg",
  },
  {
    name: "Rings",
    description: "Crispy and savory",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/rings.jpg",
  },
  {
    name: "Boondi",
    description: "Light, airy, and crisp",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/boondi.jpg",
  },
  {
    name: "Masala Palli",
    description: "Spicy crunchy peanuts",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/masalaPalli.jpg",
  },
  {
    name: "Green Peas",
    description: "Crunchy peas with a spicy kick",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/greenPeas.jpg",
  },
  {
    name: "Atkula Chudwa",
    description: "Flattened rice mix with spice",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/atkulaChudwa.jpg",
  },
  {
    name: "Plain Sev",
    description: "Golden gram, crispy strands",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/plainSev.jpg",
  },
  {
    name: "Makka Chudwa",
    description: "Crunchy, spicy corn flakes",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/makkaChudwa.jpg",
  },
  {
    name: "Chana Dal",
    description: "Roasted gram with a bite",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/chanaDal.jpg",
  },
  {
    name: "Thin Gati",
    description: "Salty and crunchy delight",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/thinGati.jpg",
  },
  {
    name: "Paper Atkulu",
    description: "Festival feels in every layer",
    price: "₹90 / 250 grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/paperAtkulu.jpg",
  },
];

// Traditional Snacks data
const traditionalSnacks = [
  {
    name: "Sakinalu",
    description: "Spiral-shaped crispy snack",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sakinalu.jpg",
  },
  {
    name: "Chegodi",
    description: "Crunchy rice rings",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/chegodi.jpg",
  },
  {
    name: "Appalu",
    description: "Flattened rice flour snack",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/appalu.jpg",
  },
  {
    name: "Small Appalu",
    description: "Mini rice flour snacks",
    price: "₹150 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/smallAppalu.jpg",
  },
  {
    name: "Small Sakinalu",
    description: "Mini spiral crispy snack",
    price: "₹150 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/smallsakinalu.jpg",
  },
  {
    name: "Podugu Muruku",
    description: "Thick, bold, crunchy strands",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/poduguMuruku.jpg",
  },
  {
    name: "Karam Gavvalu",
    description: "Crispy, bold, and spicy bites",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/karamGavvalu.jpg",
  },
  {
    name: "Muruku",
    description: "Crispy round snack",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/muruku.jpg",
  },

  {
    name: "Sannam Pusa",
    description: "Golden gram crispy strands",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sannamPusa.jpg",
  },
  {
    name: "Round Muruku",
    description: "Golden round coil",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/roundMuruku.jpg",
  },

  {
    name: "Namak Pari",
    description: "Savory diamond snack",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/namakPari.jpg",
  },
  {
    name: "Pachi Mirchi Appalu",
    description: "Fresh chili rice crisps",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/pachiMirchiAppalu.jpg",
  },
  {
    name: "Nuvvulu Sugar",
    description: "Sesame-sugar pocket delight",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/nuvvuluSugar.jpg",
  },
  {
    name: "Nuvvulu Bellam",
    description: "Sesame-jaggery pockets",
    price: "₹138 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/nuvvuluBellam.jpg",
  },
  {
    name: "Garijalu (Ravva)",
    description: "Stuffed with coconut and jaggery",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/garijaluRava.jpg",
  },
  {
    name: "Garijalu (Coconut)",
    description: "Coconut joy in every bite",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/garijaluCocunut.jpg",
  },
  {
    name: "Madugulu",
    description: "Crispy layered bites",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/madugulu.jpg",
  },
  {
    name: "Doddu Pusa",
    description: "Crispy rice spirals",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/dodduPusa.jpg",
  },
  {
    name: "Karam Sakinalu",
    description: "Spicy spiral-shaped snack",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/karamSakinalu.jpg",
  },
  {
    name: "Special Kara",
    description: "Navaratnan mixture",
    price: "₹200 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/specialKara.jpg",
  },
];

// Sweets data
const sweets = [
  {
    name: "Bakshalu",
    description: "Jaggery and dal magic",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/bakshalu.jpg",
  },
  {
    name: "Murmura Laddu",
    description: "Jaggery-kissed rice pops",
    price: "₹75 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/murmuraLaddu.jpg",
  },
  {
    name: "Laddu",
    description: "Soft, sweet golden balls",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/laddu.jpg",
  },
  {
    name: "Arishelu (Poppy)",
    description: "Golden, soft, poppy seed touch",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/arshelu.jpg",
  },
  {
    name: "Bellam Gavvalu",
    description: "Shell-shaped jaggery bites",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/bellamGavvalu.jpg",
  },
  {
    name: "Boondi Laddu",
    description: "Extra large, extra tasty",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/boondiLaddu.jpg",
  },
  {
    name: "Arishelu (Sesame)",
    description: "Ariselu topped with sesame",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/arisheluSesame.jpg",
  },
  {
    name: "Arishelu",
    description: "Jaggery meets rice perfection",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/arishelu.jpg",
  },
  {
    name: "Sugar Gavvalu",
    description: "Shell-shaped sugar bites",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sugarGavvalu.jpg",
  },
  {
    name: "Till Laddu",
    description: "Crunchy sesame goodness",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/tillLaddu.jpg",
  },
  {
    name: "Ravva Laddu",
    description: "Ghee-roasted semolina bliss",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/ravvaLaddu.jpg",
  },
  {
    name: "Palli Bellam",
    description: "Peanut-jaggery ghee laddu",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/palliBellam.jpg",
  },
  {
    name: "Palli Laddu",
    description: "Roasted peanut and jaggery",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/palliLaddu.jpg",
  },
  {
    name: "Palli Till Mix",
    description: "Peanut & sesame crunch",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/palliTillMix.jpg",
  },
  {
    name: "Bellam Coconut",
    description: "Coconut-jaggery ghee laddu",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/bellamCoconut.jpg",
  },
  {
    name: "Sununda (Pure Ghee)",
    description: "Minumulu and ghee goodness",
    price: "₹150 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sununda.jpg",
  },
  {
    name: "Allam Murabba",
    description: "Ginger preserved in sweetness",
    price: "₹100 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/allamMurabba.jpg",
  },
  {
    name: "Dry Fruit Laddu",
    description: "Power-packed protein bites",
    price: "₹300 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/dryFruitLaddu.jpg",
  },
  {
    name: "Peni (Pure Ghee)",
    description: "Layers of legacy and flavor",
    price: "₹150 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/peniGhee.jpg",
  },
];

// Papads data
const papads = [
  {
    name: "Carrot Papad",
    description: "Crackle with carrot love",
    price: "₹150 / 200grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/carrotPapad.jpg",
  },
  {
    name: "Tomato Papad",
    description: "Bold flavor with crispy finish",
    price: "₹150 / 200grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/tomatoPapad.jpg",
  },
  {
    name: "Sabudana Papad",
    description: "Crispy, melt-in-mouth",
    price: "₹150 / 200grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/sabudanaPapad.jpg",
  },
  {
    name: "koradalu Papad",
    description: "Taste of village crunch",
    price: "₹150 / 200grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/koradalu.jpg",
  },
];

const pickles = [
  {
    name: "Mango Pickle",
    description: "Classic mango, village-style spice.",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/mangoPickle.jpg",
  },
  {
    name: "Tamarind Pickle",
    description: "Tangy taste from village kitchens.",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/tamarindPickle.jpg",
  },
  {
    name: "Tomato Pickle",
    description: "Ripe tomatoes with village-style flavor.",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/tomatoPickle.jpg",
  },
  {
    name: "Lemon Pickle",
    description: "Sour and spicy, just like home.",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/lemonPickle.jpg",
  },
  {
    name: "Yellow Lemon Pickle",
    description: "Bright taste with a touch of tradition.",
    price: "₹125 / 250grms",

    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/yellowLemon.jpg",
  },
  {
    name: "Uppu Sogi Pickle",
    description: "Salted delight with a native touch.",
    price: "₹125 / 250grms",
    image:
      "https://zuedkxcivmpqpiplbyrj.supabase.co/storage/v1/object/public/fooditems/uppuSogi.jpg",
  },
];

const ProductsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#880000] from-primary-600 to-primary-700 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Product Range
            </h1>
            <p className="max-w-3xl mx-auto text-lg">
              Discover our wide selection of traditional handmade snacks and
              sweets, crafted with authentic ingredients and time-honored
              recipes.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#snacks"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Snacks
            </a>
            <a
              href="#traditional-snacks"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Traditional Snacks
            </a>
            <a
              href="#sweets"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Sweets
            </a>
            <a
              href="#papads"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Papads
            </a>
            <a
              href="#pickles"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Pickles
            </a>
          </div>
        </div>
      </div>

      <CategorySection
        id="snacks"
        title="Snacks"
        description="Everyday savory treats that bring joy with every crunchy bite."
        products={snacks}
        bgColor="bg-cream"
      />

      <CategorySection
        id="traditional-snacks"
        title="Traditional Snacks"
        description="Authentic village-style snacks made using age-old recipes and techniques."
        products={traditionalSnacks}
        bgColor="bg-white"
      />

      <CategorySection
        id="sweets"
        title="Sweets"
        description="Indulge in our delightful sweets, perfect for festivals and celebrations."
        products={sweets}
        bgColor="bg-cream"
      />

      <CategorySection
        id="papads"
        title="Papads"
        description="Crispy, flavorful accompaniments to complete your meal."
        products={papads}
        bgColor="bg-white"
      />

      <CategorySection
        id="pickles"
        title="Pickles"
        description="Spice of Tradition in Every Jar."
        products={pickles}
        bgColor="bg-cream"
      />

      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              Ready to Experience Our Products?
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              We specialize in offline purchases only. Visit our store or
              contact us via WhatsApp for more information.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919133222271"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
        <ScrollToTopButton />
      </section>
    </div>
  );
};

export default ProductsPage;
