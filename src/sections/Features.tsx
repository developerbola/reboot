import { Zap, Shield, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Instant Deployment",
    description:
      "Get your server up and running in less than 60 seconds with our automated provisioning system.",
    icon: Zap,
  },
  {
    title: "Enterprise Grade",
    description:
      "Built on high-performance NVMe storage and the latest Intel/AMD processors for maximum throughput.",
    icon: Cpu,
  },
  {
    title: "DDoS Protection",
    description:
      "Our multi-layered security shields your infrastructure from the most complex network attacks.",
    icon: Shield,
  },
  {
    title: "Global Footprint",
    description:
      "Low-latency connections through our premium network with points of presence across 4 continents.",
    icon: Globe,
  },
];

const Features = () => {
  return (
    <section className="py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="size-12 rounded-2xl bg-white/5 border border-[#ffffff05] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-white">{f.title}</h3>
              <p className="text-[#ffffff50] leading-relaxed font-light">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
