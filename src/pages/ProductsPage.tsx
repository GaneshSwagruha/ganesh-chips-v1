import React from 'react';
import { motion } from 'framer-motion';
import CategorySection from '../components/CategorySection';
import chipsImage from '../../public/pics/chips.jpg';
import karaImage from '../../public/pics/kara.jpg';
import boondiImage from '../../public/pics/boondi.jpg';
import masalaPalliImage from '../../public/pics/masalapalli.jpg';
import atkulaChudwaImage from '../../public/pics/atkulachudwa.jpg';
import greenPeasImage from '../../public/pics/greenpeas.jpg';
import plainSevImage from '../../public/pics/plainSev.jpg';
import ringsImage from '../../public/pics/rings.jpg';
import chanaDalImage from '../../public/pics/chanadal.jpg';
import thinGatiImage from '../../public/pics/thingati.jpg';
import makkaChudwaImage from '../../public/pics/makkachudwa.jpg';

import sakinaluImage from '../../public/pics/sakinalu.jpg';
import chegodiImage from '../../public/pics/chegodi.jpg';
import appaluImage from '../../public/pics/appalu.jpg';
import karamGavvaluImage from '../../public/pics/karamgavvalu.jpg';
import murukuImage from '../../public/pics/muruku.jpg';
import poduguMurukuImage from '../../public/pics/podugumuruku.jpg';
import sannamPusaImage from '../../public/pics/sannampusa.jpg';
import roundMurukuImage from '../../public/pics/roundmuruku.jpg';
import smallAppaluImage from '../../public/pics/smallappalu.jpg';
import smallSakinaluImage from '../../public/pics/smallsakinalu.jpg';
import namakPariImage from '../../public/pics/namakpari.jpg';
import mirchiAppaluImage from '../../public/pics/mirchiappalu.jpg';
import nuvvuluSugarImage from '../../public/pics/nuvvulusugar.jpg';
import maduguluImage from '../../public/pics/madugulu.jpg';
import dodduPusaImage from '../../public/pics/doddupusa.jpg';
import karamSakinaluImage from '../../public/pics/karamsakinalu.jpg';

import boondiLadduImage from '../../public/pics/boondiladdu.jpg';
import bakshaluImage from '../../public/pics/bakshalu.jpg';
import sunundaImage from '../../public/pics/sununda.jpg';
import garijaluRavaImage from '../../public/pics/garijalurava.jpg';

import garijaluCocunutImage from '../../public/pics/garijalucocunut.jpg';
import murmuraLadduImage from '../../public/pics/murmuraladdu.jpg';
import specialKaraImage from '../../public/pics/specialkara.jpg';

import nuvvuluBellamImage from '../../public/pics/nuvvulubellam.jpg';
import ladduImage from '../../public/pics/laddu.jpg';
import arsheluImage from '../../public/pics/arshelu.jpg';
import bellamGavvaluImage from '../../public/pics/bellamgavvalu.jpg';
import arisheluSesameImage from '../../public/pics/arishelusesame.jpg';
import arisheluImage from '../../public/pics/arishelu.jpg';
import sugarGavvaluImage from '../../public/pics/sugargavvalu.jpg';
import tillLadduImage from '../../public/pics/tillladdu.jpg';
import ravvaLadduImage from '../../public/pics/ravvaladdu.jpg';
import palliBellamImage from '../../public/pics/pallibellam.jpg';
import bellamCoconutImage from '../../public/pics/bellamcoconut.jpg';
import palliLadduImage from '../../public/pics/palliladdu.jpg';
import palliTillMixImage from '../../public/pics/pallitillmix.jpg';
import allamMurabbaImage from '../../public/pics/allammurabba.jpg';
import dryFruitLadduImage from '../../public/pics/dryfruitladdu.jpg';
import peniGheeImage from '../../public/pics/penighee.jpg';

import carrotPapadImage from '../../public/pics/carrotpapad.jpg';
import tomatoPapadImage from '../../public/pics/tomatopapad.jpg';
import sabudanaPapadImage from '../../public/pics/sabudanapapad.jpg';


// Snacks data
const snacks = [
  { name: "Chips", description: "Thin, crispy potato slices", price: "₹440 per kg", image : chipsImage},
  { name: "Kara", description: "Crunchy, spicy snack mix", price: "₹360 per kg", image: karaImage},
  { name: "Rings", description: "Crispy and savory", price: "₹360 per kg", image: ringsImage},
  { name: "Boondi", description: "Light, airy, and crisp", price: "₹360 per kg", image: boondiImage},
  { name: "Masala Palli", description: "Spicy crunchy peanuts", price: "₹360 per kg", image: "public/pics/masalapalli.jpg"},
  { name: "Green Peas", description: "Crunchy peas with a spicy kick", price: "₹360 per kg",  image:greenPeasImage},
  { name: "Atkula Chudwa", description: "Flattened rice mix with spice", price: "₹360 per kg", image : atkulaChudwaImage},
  { name: "Plain Sev", description: "Golden gram, crispy strands", price: "₹360 per kg", image : plainSevImage},
  { name: "Makka Chudwa", description: "Crunchy, spicy corn flakes", price: "₹360 per kg", image:makkaChudwaImage},
  { name: "Chana Dal", description: "Roasted gram with a bite", price: "₹360 per kg", image : chanaDalImage},
  { name: "Thin Gati", description: "Salty and crunchy delight", price: "₹360 per kg", image : thinGatiImage }
];

// Traditional Snacks data
const traditionalSnacks = [
  { name: "Sakinalu", description: "Spiral-shaped crispy snack", price: "₹500 per kg", image : sakinaluImage},
  { name: "Chegodi", description: "Crunchy rice rings", price: "₹500 per kg", image : chegodiImage },
  { name: "Appalu", description: "Flattened rice flour snack", price: "₹400 per kg", image : appaluImage },
  { name: "Karam Gavvalu", description: "Crispy, bold, and spicy bites", price: "₹400 per kg", image : karamGavvaluImage},
  { name: "Muruku", description: "Crispy round snack", price: "₹400 per kg", image : murukuImage },
  { name: "Podugu Muruku", description: "Thick, bold, crunchy strands", price: "₹400 per kg", image : poduguMurukuImage},
  { name: "Sannam Pusa", description: "Golden gram crispy strands", price: "₹400 per kg", image : sannamPusaImage },
  { name: "Round Muruku", description: "Golden round coil", price: "₹400 per kg", image : roundMurukuImage},
  { name: "Small Appalu", description: "Mini rice flour snacks", price: "₹600 per kg", image : smallAppaluImage},
  { name: "Small Sakinalu", description: "Mini spiral crispy snack", price: "₹600 per kg", image : smallSakinaluImage},
  { name: "Namak Pari", description: "Savory diamond snack", price: "₹400 per kg", image : namakPariImage},
  { name: "Mirchi Appalu", description: "Fresh chili rice crisps", price: "₹400 per kg", image : mirchiAppaluImage},
  { name: "Nuvvulu Sugar", description: "Sesame-sugar pocket delight", price: "₹500 per kg", image : nuvvuluSugarImage },
  { name: "Madugulu", description: "Crispy layered bites", price: "₹500 per kg", image : maduguluImage},
  { name: "Doddu Pusa", description: "Crispy rice spirals", price: "₹400 per kg", image : dodduPusaImage },
  { name: "Karam Sakinalu", description: "Spicy spiral-shaped snack", price: "₹500 per kg", image : karamSakinaluImage},
  { name: "Special Kara", description: "Navaratnan mixture", price: "₹800 per kg", image : specialKaraImage}

];

// Sweets data
const sweets = [
  { name: "Garijalu (Ravva)", description: "Stuffed with coconut and jaggery", price: "₹500 per kg", image : garijaluRavaImage},
  { name: "Garijalu (Coconut)", description: "Coconut joy in every bite", price: "₹500 per kg", image : garijaluCocunutImage},
  { name: "Bakshalu", description: "Jaggery and dal magic", price: "₹500 per kg", image : bakshaluImage},
  { name: "Murmura Laddu", description: "Jaggery-kissed rice pops", price: "₹300 per kg", image : murmuraLadduImage},
  { name: "Nuvvulu Bellam", description: "Sesame-jaggery pockets", price: "₹550 per kg", image : nuvvuluBellamImage},
  { name: "Laddu", description: "Soft, sweet golden balls", price: "₹400 per kg", image : ladduImage},
  { name: "Arishelu (Poppy)", description: "Golden, soft, poppy seed touch", price: "₹500 per kg", image : arsheluImage },
  { name: "Bellam Gavvalu", description: "Shell-shaped jaggery bites", price: "₹500 per kg", image : bellamGavvaluImage },
  { name: "Boondi Laddu", description: "Extra large, extra tasty", price: "₹400 per kg", image : boondiLadduImage},
  { name: "Arishelu (Sesame)", description: "Ariselu topped with sesame", price: "₹400 per kg", image : arisheluSesameImage},
  { name: "Arishelu", description: "Jaggery meets rice perfection", price: "₹500 per kg", image : arisheluImage },
  { name: "Sugar Gavvalu", description: "Shell-shaped sugar bites", price: "₹400 per kg", image : sugarGavvaluImage },
  { name: "Till Laddu", description: "Crunchy sesame goodness", price: "₹400 per kg", image : tillLadduImage},
  { name: "Ravva Laddu", description: "Ghee-roasted semolina bliss", price: "₹400 per kg", image : ravvaLadduImage},
  { name: "Palli Bellam", description: "Peanut-jaggery ghee laddu", price: "₹400 per kg", image : palliBellamImage},
  { name: "Palli Laddu", description: "Roasted peanut and jaggery", price: "₹400 per kg", image : palliLadduImage},
  { name: "Palli Till Mix", description: "Peanut & sesame crunch", price: "₹400 per kg", image : palliTillMixImage},
  { name: "Bellam Coconut", description: "Coconut-jaggery ghee laddu", price: "₹400 per kg", image : bellamCoconutImage},
  { name: "Sununda (Pure Ghee)", description: "Minumulu and ghee goodness", price: "₹600 per kg", image : sunundaImage},
  { name: "Allam Murabba", description: "Ginger preserved in sweetness", price: "₹400 per kg", image : allamMurabbaImage },
  { name: "Dry Fruit Laddu", description: "Power-packed protein bites", price: "₹1200 per kg", image : dryFruitLadduImage},
  { name: "Peni (Pure Ghee)", description: "Layers of legacy and flavor", price: "₹600 per kg", image : peniGheeImage}
];

// Papads data
const papads = [
  { name: "Carrot Papad", description: "Crackle with carrot love", price: "150 / 200grms", image : carrotPapadImage },
  { name: "Tomato Papad", description: "Bold flavor with crispy finish", price: "₹150 / 200grms", image : tomatoPapadImage },
  { name: "Sabudana Papad", description: "Crispy, melt-in-mouth", price: "₹150 / 200grms", image : sabudanaPapadImage}
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Product Range</h1>
            <p className="max-w-3xl mx-auto text-lg">
              Discover our wide selection of traditional handmade snacks and sweets, crafted with authentic ingredients and time-honored recipes.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#snacks" className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors">
              Snacks
            </a>
            <a href="#traditional-snacks" className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors">
              Traditional Snacks
            </a>
            <a href="#sweets" className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors">
              Sweets
            </a>
            <a href="#papads" className="bg-[#FF7300] hover:bg-[#E56700] text-white font-medium py-2 px-4 rounded-full transition-colors">
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
              We specialize in offline purchases only. Visit our store or contact us via WhatsApp for more information.
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