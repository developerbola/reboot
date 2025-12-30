import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-white/10 text-white/40 uppercase tracking-widest px-4 py-1 rounded-full text-[10px] font-bold"
          >
            Our Story
          </Badge>
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            Rebooting the internet's <br />
            foundation.
          </h1>
          <div className="flex items-center gap-4 text-[#ffffff30] font-medium uppercase tracking-widest text-xs">
            <span>By Reboot Team</span>
            <span className="size-1 bg-white/10 rounded-full" />
            <span>10 Min Read</span>
          </div>
        </header>

        <article className="prose prose-invert prose-white max-w-none">
          <p className="text-2xl text-[#ffffff70] font-light leading-relaxed mb-12">
            Ten years ago, we noticed a problem. The cloud was becoming a gated
            community. Vast, complex, and prohibitively expensive for those who
            just wanted to build.
          </p>

          <div className="aspect-21/9 bg-white/5 rounded-3xl overflow-hidden mb-12 border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
              alt="Infrastructure"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">
            The Infrastructure Gap
          </h2>
          <p className="text-[#ffffff60] text-lg leading-relaxed mb-8 font-light">
            Infrastructure should be invisible. It shouldn't be the thing that
            keeps you up at night. Yet, most developers spend more time fighting
            their configuration or decoding their cloud bill than they do
            actually writing code. We built Reboot to be the antidote to that
            friction.
          </p>

          <p className="text-[#ffffff60] text-lg leading-relaxed mb-12 font-light">
            We started with a simple premise: what if we owned the whole stack?
            No middlemen, no white-labeled services. Real hardware, in real
            racks, connected to real fiber. By building our own orchestration
            software from the ground up, we stripped away the layers of bloat
            that haunt legacy providers.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop"
                alt="Detail 1"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                alt="Detail 2"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Built for the next decade</h2>
          <p className="text-[#ffffff60] text-lg leading-relaxed mb-8 font-light">
            Today, Reboot powers thousands of applications, from personal blogs
            to enterprise-scale databases. But our mission hasn't changed. We're
            still the people who care about the silicon, the latency, and the
            humans on the other side of the terminal.
          </p>

          <blockquote className="border-l-2 border-white pl-8 py-4 my-12 italic text-2xl text-white font-light">
            "We aren't just selling instances; we're selling the freedom to
            build without the complexity tax."
          </blockquote>

          <p className="text-[#ffffff60] text-lg leading-relaxed font-light">
            As we move forward, we're doubling down on our commitment to open,
            performant, and transparent infrastructure. The internet is far from
            finished, and we're here to provide the foundation it deserves.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
