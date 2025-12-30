import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

const systems = [
  {
    group: "Cloud Infrastructure",
    services: [
      { name: "Compute (VPS)", status: "Operational", uptime: "100%" },
      { name: "Bare Metal", status: "Operational", uptime: "99.99%" },
      { name: "Block Storage", status: "Operational", uptime: "100%" },
      { name: "Object Storage", status: "Operational", uptime: "100%" },
    ],
  },
  {
    group: "Network",
    services: [
      {
        name: "North America (US-East)",
        status: "Operational",
        uptime: "100%",
      },
      { name: "Europe (EU-Central)", status: "Operational", uptime: "100%" },
      { name: "Asia Pacific (SG-1)", status: "Operational", uptime: "99.98%" },
      { name: "Global CDN", status: "Operational", uptime: "100%" },
    ],
  },
  {
    group: "Platform Services",
    services: [
      { name: "API & Dashboard", status: "Operational", uptime: "100%" },
      { name: "Billing System", status: "Operational", uptime: "100%" },
      { name: "Support Portal", status: "Operational", uptime: "100%" },
    ],
  },
];

const Status = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-2">Systems Status</h1>
            <p className="text-[#ffffff50]">
              Live updates from our global monitoring network.
            </p>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[#4ade80]">
            <CheckCircle2 size={20} />
            <span className="font-medium">All Systems Operational</span>
          </div>
        </div>

        <div className="space-y-12">
          {systems.map((group) => (
            <div key={group.group}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#ffffff30] mb-6">
                {group.group}
              </h2>
              <div className="rounded-2xl border border-white/5 bg-white/1 divide-y divide-white/5 overflow-hidden">
                {group.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between p-6 hover:bg-white/2 transition-colors"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-lg">
                        {service.name}
                      </span>
                      <span className="text-xs text-[#ffffff30]">
                        {service.uptime} uptime (30d)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                      <span className="text-sm font-medium text-[#4ade80]">
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[32px] bg-white/2 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center">
              <Clock className="text-white/40" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Incident History</h3>
              <p className="text-[#ffffff40]">
                View detailed logs of past maintenance and resolutions.
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="border-white/10 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-white/5 transition-colors"
          >
            View Archives
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Status;
