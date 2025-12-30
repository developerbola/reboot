import NumberFlow, { continuous } from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

const ServiceCounter = () => {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setValues([225000, 22, 190, 450000]);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="h-100 w-full grid place-items-center"
    >
      <div className="flex items-center justify-evenly w-full">
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-1">
            <NumberFlow
              plugins={[continuous]}
              value={values[0]}
              className="text-5xl"
              trend={1}
            />
            <p className="text-5xl">+</p>
          </div>
          <p className="text-[#ffffff60] font-light">
            Customers Worldwide
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex items-end gap-1">
            <NumberFlow
              plugins={[continuous]}
              value={values[1]}
              className="text-5xl"
              trend={1}
            />
            <p className="mb-2.75">Years</p>
          </div>
          <p className="text-[#ffffff60] font-light">In Business</p>
        </div>

        <div className="flex flex-col justify-start">
          <NumberFlow
            plugins={[continuous]}
            value={values[2]}
            className="text-5xl"
            trend={1}
          />
          <p className="text-[#ffffff60] font-light">
            Countries Served
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <NumberFlow
            plugins={[continuous]}
            value={values[3]}
            className="text-5xl"
            trend={1}
          />
          <p className="text-[#ffffff60] font-light">
            Servers Running
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCounter;
