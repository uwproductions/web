"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import classNames from "classnames";

const Header = () => {
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

  const activeClass = "text-black font-bold bg-white rounded-full";

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Work",
      href: "/work",
    },
  ];
  return (
    <>
      <div
        className={classNames([
          "fixed w-full top-0 flex p-5 z-10 transition gap-10 justify-center",
          {
            "bg-transparent text-white": !isScrolled,
            "bg-slate-200/75": isScrolled,
          },
        ])}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={classNames([
              "px-5 py-2 rounded-full transform transition hover:scale-105",
              {
                [activeClass]: location.pathname === link.href,
              },
            ])}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>UWProductions</div>
    </>
  );
};

export default Header;
