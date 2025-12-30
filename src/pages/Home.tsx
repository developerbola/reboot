import Hero from "@/sections/Hero";
import ServiceCounter from "@/sections/ServiceCounter";
import WeHave from "@/sections/WeHave";
import Features from "@/sections/Features";
import CTASection from "@/sections/CTASection";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <ServiceCounter />
      <WeHave />
      <Features />
      <CTASection />
    </div>
  );
};

export default Home;
