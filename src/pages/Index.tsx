import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ZenSuite from "@/components/ZenSuite";
import GrowthStack from "@/components/GrowthStack";
import ProductShowcase from "@/components/ProductShowcase";
import Engines from "@/components/Engines";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <ZenSuite />
        <GrowthStack />
        <ProductShowcase />
        <Engines />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;