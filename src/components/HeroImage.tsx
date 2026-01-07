import { useState } from "react";

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute top-0 left-0 md:relative h-full w-full md:w-2/3 self-end overflow-hidden rounded-xl opacity-20 md:opacity-100">
      <img
        src="/hero-low.jpg"
        alt="hero placeholder"
        className="absolute inset-0 h-full w-full object-cover blur-3xl scale-105"
      />

      <img
        src="/hero.jpg"
        alt="hero"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 blur-md md:blur-none ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
