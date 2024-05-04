import AboutUs from "@/components/about-us/AboutUs";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/header";
import Modal from "@/components/modal/Modal";
import Navigation from "@/components/navigation/Navigation";
import { ProductList } from "@/components/products/productList";
import TopNavigation from "@/components/top-navigation/TopNavigation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Modal />
      <TopNavigation />
      <Navigation />
      <HeroSection />
      <ProductList />
      <AboutUs />
      <Footer />
    </main>
  );
}
