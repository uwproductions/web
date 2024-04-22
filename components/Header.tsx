"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
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

  return (
    <div className={classNames(['fixed w-full top-0 flex p-5 z-10', {
      'bg-transparent text-white': !isScrolled,
      'bg-slate-200/75': isScrolled,
    }])}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/work">Work</Link>
    </div>
  );
};

export default Header;
