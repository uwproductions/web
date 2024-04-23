"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Logo from "./Logo";

const activeClass = "text-white font-bold bg-black rounded-full";

const Header = () => {
  const location = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our Work",
      href: "/work",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const links = (
    <div className="flex gap-10 justify-center font-bold">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={classNames([
            "px-5 py-2 rounded-full transform transition hover:scale-105",
            {
              [activeClass]: location === link.href,
            },
          ])}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="fixed w-full top-0 z-10">
      {isScrolled ? (
        <motion.div
          className="p-3 flex justify-center transition bg-[#FFFFFFC9] text-black"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.1 }}
        >
          <div className="flex justify-between items-center container">
            <Logo variant="primary" />
            {links}
          </div>
        </motion.div>
      ) : (
        <div className="p-5 transition flex-col justify-between items-center bg-transparent text-white">
          {links}
          <Logo variant="secondary" size="xl" />
        </div>
      )}
    </div>
  );
};

export default Header;
