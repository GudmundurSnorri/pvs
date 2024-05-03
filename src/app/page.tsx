import HeroSection from "@/components/header";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <HeroSection />
    </main>
  );
}
