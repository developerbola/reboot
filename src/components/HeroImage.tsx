import { useState } from "react";

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-2/3 self-end overflow-hidden rounded-xl">
      {/* Low quality placeholder */}
      <img
        src="/hero-low.jpg"
        alt="hero placeholder"
        className="absolute inset-0 h-full w-full object-cover blur-3xl scale-105"
      />

      {/* High quality image */}
      <img
        src="/hero.jpg"
        alt="hero"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
