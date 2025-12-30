import { useState } from "react";

const IconItem = ({ iconObj, index, hexToRgba }: any) => {
  const IconComponent = iconObj.icon;
  const isEven = (index + 1) % 2 === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="size-20 grid place-items-center rounded-md transition-all duration-300 transform hover:scale-110"
      style={{
        background: hovered
          ? hexToRgba(iconObj.color, 0.1)
          : isEven
          ? "#ffffff18"
          : "#ffffff08",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <IconComponent stroke={hovered ? iconObj.color : "#ffffff"} />
    </div>
  );
};

const WeHave = () => {
  const icons = [
    { icon: Code, color: "#FF4D4D" },
    { icon: Server, color: "#FFB84D" },
    { icon: Database, color: "#FFD24D" },
    { icon: Cloud, color: "#4DFF88" },
    { icon: Network, color: "#4DD2FF" },
    { icon: Router, color: "#4D4DFF" },
    { icon: Shield, color: "#B84DFF" },
    { icon: Container, color: "#FF4DD2" },
    { icon: Globus, color: "#FF704D" },
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-16 justify-center mt-40 px-10">
      <div className="w-full md:w-1/3 flex flex-col gap-6 text-white">
        <h1 className="text-6xl font-bold tracking-tight">We have all</h1>
        <div className="flex gap-2 flex-wrap">
          {["Cloud VPS", "Cloud VDS", "Storage VPS", "Windows VPS"].map(
            (i, index) => (
              <span
                key={i}
                className={`pr-2 ${
                  index !== 3 ? "border-r border-[#ffffff20]" : ""
                } text-[#ffffff60] font-light text-sm`}
              >
                {i}
              </span>
            )
          )}
        </div>
        <p className="text-[#ffffff80] font-light leading-relaxed">
          High-performance virtual servers built for speed, reliability, and
          scale. Deploy in seconds, choose your resources, and run workloads
          with full root access, enterprise-grade hardware, and 24/7 expert
          support.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {icons.map((iconObj, index) => (
          <IconItem
            key={index}
            iconObj={iconObj}
            index={index}
            hexToRgba={hexToRgba}
          />
        ))}
      </div>
    </div>
  );
};

export default WeHave;

const Code = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </svg>
);

const Server = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
    />
  </svg>
);

const Database = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    />
  </svg>
);

const Cloud = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
    />
  </svg>
);

const Network = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const Globus = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke || "currentColor"}
    className="size-8"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 1 1 8.965 3.525"
    />
  </svg>
);

const Router = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke || "currentColor"}
    stroke-linecap="round"
    stroke-linejoin="round"
    className="size-8"
  >
    <rect width="20" height="8" x="2" y="14" rx="2" />
    <path d="M6.01 18H6" />
    <path d="M10.01 18H10" />
    <path d="M15 10v4" />
    <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
    <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
  </svg>
);

const Shield = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke || "currentColor"}
    stroke-linecap="round"
    stroke-linejoin="round"
    className="size-8"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
    <circle cx="12" cy="11" r="4" />
  </svg>
);

const Container = ({ stroke }: { stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke || "currentColor"}
    stroke-linecap="round"
    stroke-linejoin="round"
    className="size-8"
  >
    <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
    <path d="M10 21.9V14L2.1 9.1" />
    <path d="m10 14 11.9-6.9" />
    <path d="M14 19.8v-8.1" />
    <path d="M18 17.5V9.4" />
  </svg>
);
