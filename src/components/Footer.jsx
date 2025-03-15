import React from "react";

import { FaX, FaDiscord, FaGithub, FaTwitch } from "react-icons/fa6";

const links = [
  {
    id: "1",
    icon: <FaDiscord />,
    href: "https://discord.com/",
  },
  {
    id: "2",
    icon: <FaX />,
    href: "https://x.com/",
  },
  {
    id: "3",
    icon: <FaGithub />,
    href: "https://github.com/",
  },
  {
    id: "4",
    icon: <FaTwitch />,
    href: "https://www.twitch.tv/",
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Zentry 2024. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
