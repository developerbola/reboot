import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ProductPageProps {
  title: string;
  subtitle: string;
}

const ProductPage = ({ title, subtitle }: ProductPageProps) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">{title}</h1>
          <p className="text-xl text-[#ffffff50] max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why our {title}?</h2>
              <div className="grid gap-6">
                {[
                  "Enterprise NVMe Storage",
                  "99.99% Uptime Guarantee",
                  "24/7 Expert Support",
                  "Instant Activation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-[#ffffff80]"
                  >
                    <div className="size-6 rounded-full bg-white/5 flex items-center justify-center">
                      <Check className="size-4 text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-neutral-200 px-10 h-14 text-lg"
            >
              Get Started
            </Button>
          </div>

          <div className="aspect-video bg-white/5 rounded-3xl border border-[#ffffff05] overflow-hidden relative group">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#ffffff20] font-mono text-sm group-hover:text-[#ffffff40] transition-colors">
                // Console Output: Booting...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
