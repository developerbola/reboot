import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Cloud VPS", path: "/vps" },
    { name: "Domains", path: "/domains" },
    { name: "Pricing", path: "/pricing" },
    { name: "Global Network", path: "/network" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/help" },
    { name: "Blog", path: "/blog" },
    { name: "Status", path: "/status" },
  ],
  Legal: [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "SLA", path: "/sla" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#ffffff05] pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-semibold mb-6"
          >
            <Logo />
            <span>Reboot</span>
          </Link>
          <p className="text-[#ffffff50] max-w-sm mb-8">
            Next-generation infrastructure for developers and enterprises. Built
            for performance, reliability, and global scale.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full border border-[#ffffff10] flex items-center justify-center text-[#ffffff40] hover:text-white hover:border-[#ffffff30] transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white font-medium mb-6">{title}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#ffffff50] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#ffffff05] pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#ffffff30]">
        <p>© 2025 Reboot Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Global Infrastructure</p>
          <p>99.99% Uptime Guarantee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
