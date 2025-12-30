import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Zap, Signal } from "lucide-react";

const regions = [
  {
    name: "North America",
    locations: [
      "New York (US-1)",
      "Chicago (US-2)",
      "Dallas (US-3)",
      "Los Angeles (US-4)",
    ],
  },
  {
    name: "Europe",
    locations: [
      "London (UK-1)",
      "Frankfurt (DE-1)",
      "Amsterdam (NL-1)",
      "Paris (FR-1)",
    ],
  },
  {
    name: "Asia Pacific",
    locations: ["Singapore (SG-1)", "Tokyo (JP-1)", "Sydney (AU-1)"],
  },
];

const stats = [
  { icon: Signal, label: "Backbone capacity", value: "80+ Tbps" },
  { icon: Zap, label: "Port speeds", value: "up to 100 Gbps" },
  { icon: Shield, label: "DDoS mitigation", value: "L3/L4/L7 Always-on" },
];

const Network = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-white/20 text-[#ffffff60] px-4 py-1.5 rounded-full font-light"
          >
            Global Infrastructure
          </Badge>
          <h1 className="text-7xl font-bold tracking-tight mb-8">
            Build on a Global scale.
          </h1>
          <p className="text-xl text-[#ffffff50] max-w-3xl font-light leading-relaxed">
            Our high-performance network is engineered for low latency, high
            throughput, and massive scalability. With points of presence across
            every major continent, your applications are always close to your
            users.
          </p>
        </div>

        {/* Hero Map/Visual */}
        <div className="aspect-21/9 bg-white/1 rounded-[40px] border border-white/5 relative overflow-hidden mb-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />
          <Globe size={400} className="text-white/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="size-2 bg-white rounded-full shadow-[0_0_10px_white]" />
              </div>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-white/2 border border-white/5 flex flex-col items-center text-center"
            >
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white/40">
                <s.icon size={32} />
              </div>
              <div className="text-3xl font-bold mb-2">{s.value}</div>
              <div className="text-sm font-medium uppercase tracking-widest text-[#ffffff30]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="text-xl font-bold mb-10 border-b border-white/10 pb-4">
                {region.name}
              </h3>
              <div className="space-y-6">
                {region.locations.map((loc) => (
                  <div key={loc} className="flex items-center gap-4 group">
                    <div className="size-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                    <span className="text-[#ffffff50] group-hover:text-white transition-colors font-light">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
