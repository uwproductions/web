import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const Footer = () => {
  const newArr = Array(6).fill(null);
  const navLinks = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "our work",
      href: "/work",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];

  const links = (
    <div className="flex flex-col justify-center font-light gap-2.5">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={classNames(["text-white text-2xl"])}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="px-36 py-20 bg-black flex justify-center gap-16">
      <div className="max-w-72">
        <header className="text-start mb-5 text-white text-3xl">
          Follow me on Instagram
        </header>
        <div className="flex flex-wrap justify-evenly">
          {newArr.map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 relative mb-4 mr-4 border border-slate-600"
            >
              <Image
                // width={80}
                // height={80}
                fill={true}
                style={{ objectFit: "cover" }}
                src={`/assets/footerImages/footerImage${index + 1}.webp`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      {links}
    </div>
  );
};

export default Footer;
