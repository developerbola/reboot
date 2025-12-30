import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Shield, Zap, Terminal, Activity } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    title: "Compute Power",
    description:
      "Enterprise AMD EPYC™ processors with high clock speeds and performance-optimized virtualization.",
  },
  {
    icon: HardDrive,
    title: "All-NVMe Storage",
    description:
      "Pure NVMe Gen 4 SSD arrays with RAID-10 protection for incredible I/O performance.",
  },
  {
    icon: Zap,
    title: "Premium Network",
    description:
      "Burstable 1 Gbps or 10 Gbps ports with tier-1 global peering and multi-homed connectivity.",
  },
  {
    icon: Shield,
    title: "DDoS Shield",
    description:
      "Advanced L3/L4/L7 mitigation included with every instance to keep your service online.",
  },
];

const technicalDetails = [
  { label: "Virtualization", value: "KVM (Kernel-based Virtual Machine)" },
  { label: "Hardware", value: "DELL / HP Enterprise Racks" },
  {
    label: "Storage Technology",
    value: "Ceph Distributed Storage / Local NVMe",
  },
  { label: "Management", value: "Proprietary Orchestration Layer" },
  { label: "API Support", value: "RESTful JSON API / Terraform Provider" },
  { label: "SLA", value: "99.9% Monthly Uptime Guarantee" },
];

const VPS = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <Badge
            variant="outline"
            className="mb-6 border-white/20 text-[#ffffff60] px-4 py-1.5 rounded-full font-light"
          >
            Infrastructure Details
          </Badge>
          <h1 className="text-7xl font-bold tracking-tight mb-8">
            Cloud VPS <br />
            <span className="text-[#ffffff30]">Detailed Specifications.</span>
          </h1>
          <p className="text-xl text-[#ffffff50] max-w-2xl font-light leading-relaxed">
            Go beyond the plans. Understand the engineering and hardware that
            powers every virtual instance on the Reboot platform.
          </p>
        </div>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {specs.map((s, i) => (
            <div key={i} className="group">
              <div className="size-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <s.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-[#ffffff50] font-light leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">
              Technical Overview
            </h2>
            <div className="space-y-4">
              {technicalDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/1"
                >
                  <span className="text-[#ffffff30] font-medium uppercase tracking-widest text-[10px]">
                    {detail.label}
                  </span>
                  <span className="font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square rounded-[40px] border border-white/5 bg-white/1 p-12 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <Terminal size={48} className="text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Complete Control</h3>
              <p className="text-[#ffffff50] font-light leading-relaxed">
                Every VPS comes with full root access, VNC console availability,
                and the ability to mount custom ISO images.
              </p>
            </div>
            <div className="relative z-10 flex gap-4">
              {["Ubuntu", "Debian", "CentOS", "Windows"].map((os) => (
                <Badge
                  key={os}
                  className="bg-white/5 text-white/40 hover:bg-white/10 border-white/5 px-3 py-1"
                >
                  {os}
                </Badge>
              ))}
            </div>
            <Activity
              size={400}
              className="absolute -bottom-20 -right-20 text-white/2"
            />
          </div>
        </div>

        {/* Hardware Visual */}
        <div className="p-16 rounded-[48px] bg-linear-to-b from-white/10 to-transparent border border-white/10 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Global Connectivity
          </h2>
          <p className="text-[#ffffff50] text-lg max-w-2xl mx-auto mb-10 font-light">
            Our VPS nodes are connected via redundant 40Gbps uplinks to our core
            network, ensuring your data is delivered with minimal latency and
            zero packet loss.
          </p>
          <div className="flex flex-wrap justify-center gap-20">
            <div>
              <div className="text-5xl font-bold mb-2">0.5ms</div>
              <div className="text-[#ffffff20] text-xs font-bold uppercase tracking-[0.2em]">
                Local Peering
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40Gbps</div>
              <div className="text-[#ffffff20] text-xs font-bold uppercase tracking-[0.2em]">
                Node Uplink
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Gen 4</div>
              <div className="text-[#ffffff20] text-xs font-bold uppercase tracking-[0.2em]">
                PCIe Infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPS;
