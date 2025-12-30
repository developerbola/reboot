import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Headset } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-center gap-50 bg-[#0a0a0a] border-b border-[#ffffff05] h-15">
      <Link to={"/"} className="flex items-center gap-1 text-xl">
        <Logo />
        Reboot
      </Link>
      <ul className="flex items-center gap-5">
        {["VPS", "Dedicated Server", "More", "Pricing"].map((i, _) => (
          <li
            key={_}
            className="cursor-pointer flex items-center gap-1 font-light text-sm text-[#ffffff90] hover:text-white transition"
          >
            {i}
          </li>
        ))}
      </ul>
      <div className="flex gap-1">
        <Link to={"/login"}>
          <Button
            size={"sm"}
            variant={"outline"}
            className="rounded-full border-[#ffffff30] h-7 font-light"
          >
            Sign in
          </Button>
        </Link>
        <Button
          size={"sm"}
          className="rounded-full border-[#ffffff30] h-7 font-light"
        >
          Help
          <Headset />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

// vps/cloud-vps
//  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 31">
//   <path className="cls-1" d="M24.79,27.25h8.49c3.94,0,7.14-3.2,7.14-7.14,0-3.03-1.88-5.6-4.55-6.64-.09-.03-.15-.12-.16-.21-.36-3.95-3.67-7.05-7.72-7.05h0c-1.2,0-2.35.28-3.37.77-.1.05-.22.03-.29-.05-1.86-1.95-4.49-3.18-7.4-3.18-5.33,0-9.67,4.13-10.16,9.32,0,.1-.08.19-.18.22-2.92.9-5.03,3.61-5.03,6.82,0,3.94,3.2,7.14,7.14,7.14h1.78s7.01,0,7.01,0c1.5,0,2.72-1.22,2.72-2.72v-9.34c0-1.5-1.22-2.72-2.72-2.72h-3.89c-1.5,0-2.72,1.22-2.72,2.72v4.92c0,1.5,1.22,2.72,2.72,2.72h1.51c.55,0,1-.45,1-1,0-.55-.45-1-1-1h-1.51c-.4,0-.72-.32-.72-.72v-4.92c0-.4.32-.72.72-.72h3.89c.4,0,.72.32.72.72v9.34c0,.4-.32.72-.72.72h-7.01s-1.78,0-1.78,0c-1.42,0-2.7-.57-3.64-1.51-.93-.93-1.5-2.21-1.51-3.63h0c0-2.57,1.87-4.69,4.32-5.08.49-.08.84-.49.84-.99,0-2.27.92-4.34,2.41-5.85,1.49-1.51,3.54-2.44,5.8-2.44,2.65,0,5,1.25,6.51,3.21.2.25.49.39.79.39.19,0,.38-.05.55-.17.92-.61,2.01-.97,3.2-.97,1.59,0,3.03.64,4.07,1.69,1.04,1.04,1.68,2.48,1.69,4.07h0s0,.16,0,.16h0s0,.01,0,.01c0,.46.31.86.76.97,2.24.55,3.9,2.57,3.91,4.98h0s0,0,0,0h0s0,0,0,0c0,1.42-.57,2.7-1.51,3.64-.93.93-2.21,1.51-3.64,1.51h-8.49c-.4,0-.72-.32-.72-.72v-9.34c0-.4.32-.72.72-.72h3.89c.4,0,.72.32.72.72v4.92c0,.4-.32.72-.72.72h-1.51c-.55,0-1,.45-1,1,0,.55.45,1,1,1h1.51c1.5,0,2.72-1.22,2.72-2.72v-4.92c0-1.5-1.22-2.72-2.72-2.72h-3.89c-1.5,0-2.72,1.22-2.72,2.72v9.34c0,1.5,1.22,2.72,2.72,2.72Z"></path>
// </svg>
