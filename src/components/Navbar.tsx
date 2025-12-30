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
        <Button
          size={"sm"}
          variant={"outline"}
          className="rounded-full border-[#ffffff30] h-7 font-light"
        >
          Sign in
        </Button>
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
