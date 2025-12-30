import { Button } from "@/components/ui/button";
import { ArrowUpRight, Server } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current) return;

    // Split heading into lines & words
    const headingSplit = new SplitText(headingRef.current, {
      type: "lines, words",
    });
    const paragraphSplit = new SplitText(paragraphRef.current, {
      type: "lines, words",
    });

    // Set overflow hidden for each line
    headingSplit.lines.forEach((line: any) =>
      gsap.set(line, { overflow: "hidden" })
    );
    paragraphSplit.lines.forEach((line: any) =>
      gsap.set(line, { overflow: "hidden" })
    );

    // Animate words line by line
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" },
    });

    tl.from(headingSplit.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
    }).from(
      paragraphSplit.words,
      { yPercent: 100, opacity: 0, stagger: 0.03 },
      "-=0.3"
    );

    return () => {
      headingSplit.revert();
      paragraphSplit.revert();
    };
  }, []);

  return (
    <div className="h-[calc(100vh-60px)] px-5 pb-5 relative">
      <div className="relative h-full w-full flex">
        <div className="w-1/3 flex items-end">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl" ref={headingRef}>
              VPS and Bare Metal Hosting
            </h1>
            <p className="text-muted-foreground" ref={paragraphRef}>
              High-Performance Cloud & Dedicated Hosting with Round-the-Clock
              Human Support
            </p>
            <div className="flex gap-2 mt-2">
              <Button variant={"outline"} className="rounded-full">
                Order <Server className="size-3.5" />
              </Button>
              <Link to={"/pricing"}>
                <Button variant={"link"}>
                  View all cloud servers <ArrowUpRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/hero.jpg"
          alt="hero"
          className="h-full object-cover w-2/3 self-end rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
