import React from "react";
import { motion } from "framer-motion";
import CategorySection from "../components/CategorySection";

// Snacks data
const snacks = [
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
    name: "Rings",
    description: "Crispy and savory",
    price: "₹360 per kg",
    image: "/pics/rings.jpg",
  },
  {
    name: "Boondi",
    description: "Light, airy, and crisp",
    price: "₹360 per kg",
    image: "/pics/boondi.jpg",
  },
  {
    name: "Masala Palli",
    description: "Spicy crunchy peanuts",
    price: "₹360 per kg",
    image: "/pics/masalaPalli.jpg",
  },
  {
    name: "Green Peas",
    description: "Crunchy peas with a spicy kick",
    price: "₹360 per kg",
    image: "/pics/greenPeas.jpg",
  },
  {
    name: "Atkula Chudwa",
    description: "Flattened rice mix with spice",
    price: "₹360 per kg",
    image: "/pics/atkulaChudwa.jpg",
  },
  {
    name: "Plain Sev",
    description: "Golden gram, crispy strands",
    price: "₹360 per kg",
    image: "/pics/plainSev.jpg",
  },
  {
    name: "Makka Chudwa",
    description: "Crunchy, spicy corn flakes",
    price: "₹360 per kg",
    image: "/pics/makkaChudwa.jpg",
  },
  {
    name: "Chana Dal",
    description: "Roasted gram with a bite",
    price: "₹360 per kg",
    image: "/pics/chanaDal.jpg",
  },
  {
    name: "Thin Gati",
    description: "Salty and crunchy delight",
    price: "₹360 per kg",
    image: "/pics/thinGati.jpg",
  },
];

// Traditional Snacks data
const traditionalSnacks = [
  {
    name: "Sakinalu",
    description: "Spiral-shaped crispy snack",
    price: "₹500 per kg",
    image: "/pics/sakinalu.jpg",
  },
  {
    name: "Chegodi",
    description: "Crunchy rice rings",
    price: "₹500 per kg",
    image: "/pics/chegodi.jpg",
  },
  {
    name: "Appalu",
    description: "Flattened rice flour snack",
    price: "₹400 per kg",
    image: "/pics/appalu.jpg",
  },
  {
    name: "Karam Gavvalu",
    description: "Crispy, bold, and spicy bites",
    price: "₹400 per kg",
    image: "/pics/karamGavvalu.jpg",
  },
  {
    name: "Muruku",
    description: "Crispy round snack",
    price: "₹400 per kg",
    image: "/pics/muruku.jpg",
  },
  {
    name: "Podugu Muruku",
    description: "Thick, bold, crunchy strands",
    price: "₹400 per kg",
    image: "/pics/poduguMuruku.jpg",
  },
  {
    name: "Sannam Pusa",
    description: "Golden gram crispy strands",
    price: "₹400 per kg",
    image: "/pics/sannamPusa.jpg",
  },
  {
    name: "Round Muruku",
    description: "Golden round coil",
    price: "₹400 per kg",
    image: "/pics/roundMuruku.jpg",
  },
  {
    name: "Small Appalu",
    description: "Mini rice flour snacks",
    price: "₹600 per kg",
    image: "/pics/smallAppalu.jpg",
  },
  {
    name: "Small Sakinalu",
    description: "Mini spiral crispy snack",
    price: "₹600 per kg",
    image: "/pics/smallsakinalu.jpg",
  },
  {
    name: "Namak Pari",
    description: "Savory diamond snack",
    price: "₹400 per kg",
    image: "/pics/namakPari.jpg",
  },
  {
    name: "Mirchi Appalu",
    description: "Fresh chili rice crisps",
    price: "₹400 per kg",
    image: "/pics/mirchiAppalu.jpg",
  },
  {
    name: "Nuvvulu Sugar",
    description: "Sesame-sugar pocket delight",
    price: "₹500 per kg",
    image: "/pics/nuvvuluSugar.jpg",
  },
  {
    name: "Madugulu",
    description: "Crispy layered bites",
    price: "₹500 per kg",
    image: "/pics/madugulu.jpg",
  },
  {
    name: "Doddu Pusa",
    description: "Crispy rice spirals",
    price: "₹400 per kg",
    image: "/pics/dodduPusa.jpg",
  },
  {
    name: "Karam Sakinalu",
    description: "Spicy spiral-shaped snack",
    price: "₹500 per kg",
    image: "/pics/karamSakinalu.jpg",
  },
  {
    name: "Special Kara",
    description: "Navaratnan mixture",
    price: "₹800 per kg",
    image: "/pics/specialKara.jpg",
  },
];

// Sweets data
const sweets = [
  {
    name: "Garijalu (Ravva)",
    description: "Stuffed with coconut and jaggery",
    price: "₹500 per kg",
    image: "/pics/garijaluRava.jpg",
  },
  {
    name: "Garijalu (Coconut)",
    description: "Coconut joy in every bite",
    price: "₹500 per kg",
    image: "/pics/garijaluCocunut.jpg",
  },
  {
    name: "Bakshalu",
    description: "Jaggery and dal magic",
    price: "₹500 per kg",
    image: "/pics/bakshalu.jpg",
  },
  {
    name: "Murmura Laddu",
    description: "Jaggery-kissed rice pops",
    price: "₹300 per kg",
    image: "/pics/murmuraLaddu.jpg",
  },
  {
    name: "Nuvvulu Bellam",
    description: "Sesame-jaggery pockets",
    price: "₹550 per kg",
    image: "/pics/nuvvuluBellam.jpg",
  },
  {
    name: "Laddu",
    description: "Soft, sweet golden balls",
    price: "₹400 per kg",
    image: "/pics/laddu.jpg",
  },
  {
    name: "Arishelu (Poppy)",
    description: "Golden, soft, poppy seed touch",
    price: "₹500 per kg",
    image: "/pics/arshelu.jpg",
  },
  {
    name: "Bellam Gavvalu",
    description: "Shell-shaped jaggery bites",
    price: "₹500 per kg",
    image: "/pics/bellamGavvalu.jpg",
  },
  {
    name: "Boondi Laddu",
    description: "Extra large, extra tasty",
    price: "₹400 per kg",
    image: "/pics/boondiLaddu.jpg",
  },
  {
    name: "Arishelu (Sesame)",
    description: "Ariselu topped with sesame",
    price: "₹400 per kg",
    image: "/pics/arisheluSesame.jpg",
  },
  {
    name: "Arishelu",
    description: "Jaggery meets rice perfection",
    price: "₹500 per kg",
    image: "/pics/arishelu.jpg",
  },
  {
    name: "Sugar Gavvalu",
    description: "Shell-shaped sugar bites",
    price: "₹400 per kg",
    image: "/pics/sugarGavvalu.jpg",
  },
  {
    name: "Till Laddu",
    description: "Crunchy sesame goodness",
    price: "₹400 per kg",
    image: "/pics/tillLaddu.jpg",
  },
  {
    name: "Ravva Laddu",
    description: "Ghee-roasted semolina bliss",
    price: "₹400 per kg",
    image: "/pics/ravvaLaddu.jpg",
  },
  {
    name: "Palli Bellam",
    description: "Peanut-jaggery ghee laddu",
    price: "₹400 per kg",
    image: "/pics/palliBellam.jpg",
  },
  {
    name: "Palli Laddu",
    description: "Roasted peanut and jaggery",
    price: "₹400 per kg",
    image: "/pics/palliLaddu.jpg",
  },
  {
    name: "Palli Till Mix",
    description: "Peanut & sesame crunch",
    price: "₹400 per kg",
    image: "/pics/palliTillMix.jpg",
  },
  {
    name: "Bellam Coconut",
    description: "Coconut-jaggery ghee laddu",
    price: "₹400 per kg",
    image: "/pics/bellamCoconut.jpg",
  },
  {
    name: "Sununda (Pure Ghee)",
    description: "Minumulu and ghee goodness",
    price: "₹600 per kg",
    image: "/pics/sununda.jpg",
  },
  {
    name: "Allam Murabba",
    description: "Ginger preserved in sweetness",
    price: "₹400 per kg",
    image: "/pics/allamMurabba.jpg",
  },
  {
    name: "Dry Fruit Laddu",
    description: "Power-packed protein bites",
    price: "₹1200 per kg",
    image: "/pics/dryFruitLaddu.jpg",
  },
  {
    name: "Peni (Pure Ghee)",
    description: "Layers of legacy and flavor",
    price: "₹600 per kg",
    image: "/pics/peniGhee.jpg",
  },
];

// Papads data
const papads = [
  {
    name: "Carrot Papad",
    description: "Crackle with carrot love",
    price: "150 / 200grms",
    image: "/pics/carrotPapad.jpg",
  },
  {
    name: "Tomato Papad",
    description: "Bold flavor with crispy finish",
    price: "₹150 / 200grms",
    image: "/pics/tomatoPapad.jpg",
  },
  {
    name: "Sabudana Papad",
    description: "Crispy, melt-in-mouth",
    price: "₹150 / 200grms",
    image: "/pics/sabudanaPapad.jpg",
  }
];

const ProductsPage: React.FC = () => {
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
      </section>
    </div>
  );
};

export default ProductsPage;