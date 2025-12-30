import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$5",
    description: "Perfect for personal projects and small sites.",
    features: [
      "1 vCPU Core",
      "2GB RAM",
      "40GB NVMe SSD",
      "1TB Bandwidth",
      "1Gbps Port",
    ],
    cta: "Deploy Now",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$29",
    description: "High-performance nodes for scaling businesses.",
    features: [
      "4 vCPU Cores",
      "8GB RAM",
      "160GB NVMe SSD",
      "5TB Bandwidth",
      "10Gbps Port",
      "Daily Backups",
      "Dedicated Support",
    ],
    cta: "Deploy Now",
    popular: true,
  },
  {
    name: "Bare Metal",
    price: "$149",
    description: "Dedicated hardware for maximum performance.",
    features: [
      "Intel Xeon E-2288G",
      "32GB RAM",
      "2x 1TB NVMe",
      "Unmetered BW",
      "IPMI Access",
      "DDoS Protection",
    ],
    cta: "Provision Now",
    popular: false,
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Our Hosting Plans
          </h1>
          <p className="text-[#ffffff60] text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your workload. No hidden fees,
            pay-as-you-go flexibility, and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`bg-[#111111]/50 border-[#ffffff10] backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-[#ffffff20] hover:translate-y-[-4px] ${
                plan.popular ? "border-[#ffffff30] ring-1 ring-[#ffffff20]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-[#ffffff60]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[#ffffff40]">/mo</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#ffffff80]"
                    >
                      <Check className="size-4 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full rounded-lg h-11 text-sm font-medium transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-transparent border border-[#ffffff20] text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-[#111111]/30 border border-[#ffffff05] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center">
              <Info className="size-6 text-[#ffffff60]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Need a custom solution?
              </h3>
              <p className="text-[#ffffff50]">
                Contact our sales team for tailored infrastructure and volume
                discounts.
              </p>
            </div>
          </div>
          <Link to="/help">
            <Button
              variant="outline"
              className="rounded-full border-[#ffffff20] hover:bg-white/5"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
