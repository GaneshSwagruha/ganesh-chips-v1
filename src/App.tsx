import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const VisitPage = lazy(() => import("./pages/VisitPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full mt-40">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#880000]"></div>
  </div>
);

function App() {
  return (

  );
}

export default App;
