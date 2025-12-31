import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="px-10 py-20">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[48px] bg-[#111] border border-white/5 p-12 md:p-24 flex flex-col items-center text-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] size-125 bg-white/2 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[10%] size-125 bg-white/1 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 text-[#ffffff70]">
            <Sparkles size={16} className="text-white" />
            <span>Ready to experience the speed?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
            Build your future on <br />
            <span className="text-[#ffffff40]">
              world-class infrastructure.
            </span>
          </h2>

          <p className="text-xl text-[#ffffff50] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Join 10,000+ developers and companies who trust Reboot for their
            mission-critical applications. Deploy your first instance in under a
            minute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button
                size="lg"
                variant={"secondary"}
                className="rounded-full h-16 px-12! text-lg font-medium transition-all active:scale-95"
              >
                Get Started Now <ArrowRight className="ml-2 size-6" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-white hover:bg-white/5 h-16 px-10 text-lg font-light"
              >
                View Price List
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
