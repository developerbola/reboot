import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Headset, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "VPS", path: "/vps" },
  { name: "Domains", path: "/domains" },
  { name: "Plans", path: "/plans" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0a0a0a]">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-xl">
          <Logo />
          Reboot
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-light transition-colors",
                    isActive
                      ? "text-blue-400"
                      : "text-white/60 hover:text-white"
                  )
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-1">
          <Link to="/login">
            <Button
              size="sm"
              variant="outline"
              className="h-7 rounded-full border-white/30 font-light"
            >
              Sign in
            </Button>
          </Link>

          <Button
            size="sm"
            className="h-7 rounded-full font-light"
          >
            Help
            <Headset className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-sm",
                    isActive
                      ? "text-blue-400"
                      : "text-white/70"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-white/10!"
                >
                  Sign in
                </Button>
              </Link>

              <Button size="sm" className="flex-1 rounded-full">
                Help
                <Headset className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
