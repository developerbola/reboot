import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";

const extensions = [
  { tld: ".com", price: "$12.99", popular: true },
  { tld: ".net", price: "$14.99" },
  { tld: ".io", price: "$39.99", popular: true },
  { tld: ".org", price: "$13.99" },
  { tld: ".app", price: "$15.99" },
  { tld: ".cloud", price: "$9.99" },
  { tld: ".dev", price: "$15.99" },
  { tld: ".ai", price: "$65.00" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "WHOIS Privacy",
    desc: "Keep your personal information private and hidden from public databases.",
  },
  {
    icon: Zap,
    title: "Instant DNS",
    desc: "Our global anycast network ensures your DNS changes propagate in seconds.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    desc: "Manage your domains from anywhere with our secure management portal.",
  },
];

const Domains = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <Badge
            variant="outline"
            className="mb-6 border-white/20 text-[#ffffff60] px-4 py-1.5 rounded-full font-light"
          >
            Registration & Transfer
          </Badge>
          <h1 className="text-7xl font-bold tracking-tight mb-8">
            The perfect name <br />
            <span className="text-[#ffffff30]">for your project.</span>
          </h1>

          <div className="relative max-w-2xl mx-auto mt-12 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 size-6 transition-colors group-focus-within:text-white" />
            <Input
              placeholder="findyourperfectdomain.com"
              className="h-20 bg-white/5 border-white/10 rounded-full pl-16 pr-40 text-xl font-light focus:ring-1 focus:ring-white/20 transition-all placeholder:text-white/10"
            />
            <Button className="absolute right-2 top-2 bottom-2 px-10 rounded-full bg-white text-black hover:bg-neutral-200 text-lg font-medium">
              Search
            </Button>
          </div>
        </div>

        {/* Extensions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {extensions.map((ext) => (
            <div
              key={ext.tld}
              className="p-8 rounded-3xl bg-white/1 border border-white/5 hover:border-white/10 transition-all group flex flex-col items-center"
            >
              <div className="text-3xl font-bold mb-2 group-hover:text-white transition-colors tracking-tight">
                {ext.tld}
              </div>
              <div className="text-[#ffffff40] text-sm mb-6 uppercase tracking-widest font-bold">
                {ext.price} <span className="text-[10px]">/yr</span>
              </div>
              {ext.popular && (
                <Badge className="bg-white/5 text-white/40 border-none mb-4 h-5 text-[9px] uppercase">
                  Popular
                </Badge>
              )}
              <div className="mt-auto flex items-center gap-1 text-white/0 group-hover:text-white/60 transition-all text-sm font-medium">
                <span>Register</span> <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Features Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Everything you need to manage your domains.
            </h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <f.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-[#ffffff50] font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 rounded-[48px] bg-white text-black flex flex-col gap-10 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
            <h3 className="text-3xl font-bold tracking-tight leading-tight">
              Professional Email included for 3 months.
            </h3>
            <div className="space-y-4">
              {[
                "10GB Storage",
                "Spam Protection",
                "Calendar Sync",
                "Mobile Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-medium">
                  <div className="size-6 rounded-full bg-black flex items-center justify-center text-white">
                    <Check size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <Button className="w-full h-16 rounded-2xl bg-black text-white hover:bg-black/90 text-lg font-bold mt-4">
              Explore Enterprise Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
