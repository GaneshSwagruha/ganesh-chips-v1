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
    <div className="font-body bg-cream min-h-screen flex flex-col">
      <ScrollToTop />
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#008888",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "9px 0",
          width: "100%",
          zIndex: 60, // higher than navbar z-50
        }}
      >
        <div
          style={{
            display: "inline-block",
            color: "#ffebf0",
            fontWeight: "bold",
            fontSize: "16px",
            paddingLeft: "100%", // start from right for animation
            animation: "scroll-left 15s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          ✨ Online Ordering Coming Soon! Until then, place your orders on WhatsApp or Instagram 📱🛍️.
        </div>
      </div>
      <Navbar />
      

      <main className="flex-grow" style={{ minHeight: "100vh" }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
           <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
