import Hero from "@/sections/Hero";
import ServiceCounter from "@/sections/ServiceCounter";
import WeHave from "@/sections/WeHave";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceCounter />
      <WeHave />
      <div className="h-screen" />
    </div>
  );
};

export default Home;
