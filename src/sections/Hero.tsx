import { Button } from "@/components/ui/button";
import { ArrowUpRight, Server } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import HeroImage from "@/components/HeroImage";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !buttonsRef.current)
      return;

    const headingSplit = new SplitText(headingRef.current, {
      type: "lines, words",
    });

    const paragraphSplit = new SplitText(paragraphRef.current, {
      type: "lines, words",
    });

    headingSplit.lines.forEach((line: any) =>
      gsap.set(line, { overflow: "hidden" })
    );
    paragraphSplit.lines.forEach((line: any) =>
      gsap.set(line, { overflow: "hidden" })
    );

    const buttons = buttonsRef.current.children;

    gsap.set(buttons, {
      opacity: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    tl.from(headingSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
    })
      .from(
        paragraphSplit.words,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.03,
        },
        "-=0.3"
      )
      .to(
        buttons,
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      );

    return () => {
      headingSplit.revert();
      paragraphSplit.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="h-[calc(100vh-60px)] px-5 pb-5">
      <div className="relative h-full w-full flex">
        <div className="w-full md:w-1/3 p-4 md:p-0 flex items-end md:justify-center md:mr-5 z-2">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-4xl" ref={headingRef}>
              VPS and Bare Metal Hosting
            </h1>
            <p className="text-muted-foreground" ref={paragraphRef}>
              High-Performance Cloud & Dedicated Hosting with Round-the-Clock
              Human Support
            </p>
            <div className="flex gap-2 mt-2" ref={buttonsRef}>
              <Link to="/pricing">
                <Button variant="outline" className="rounded-full">
                  Order <Server className="size-3.5 ml-1" />
                </Button>
              </Link>

              <Link to="/pricing">
                <Button variant="link">
                  View all cloud servers
                  <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
