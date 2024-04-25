import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Logo from "./Logo";

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
    <div className="flex flex-col md:justify-center font-light gap-2.5 max-w-[30%] md:max-w-full">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={classNames(["text-white text-l md:text-2xl"])}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  const address = (
    <div className="flex flex-col gap-2.5 max-w-[70%] md:max-w-full text-white text-l md:text-2xl font-light">
      {/* <div className="flex flex-col gap-2.5"> */}
      <p>2/14, Sector L, Aashiyana</p>
      <p>Lucknow</p>
      <p>
        <a href="tel:+917754929269">7754929269</a>
      </p>
      <p>
        <a href="mailto:uwproductions7754@gmail.com">
          uwproductions7754@gmail.com
        </a>
      </p>
    </div>
    // <div></div>
    // </div>
  );

  return (
    <div className="py-8 md:py-20 px-7 sm:px-14 md:px-0 bg-black">
      <div
        className="md:flex md:pb-4 pb-8
      lg:justify-center md:justify-evenly lg:gap-16 border-b"
      >
        <div className="md:max-w-72">
          <header className="md:text-start text-center mb-8 text-white text-3xl">
            Follow me on Instagram
          </header>
          <div className="flex flex-wrap justify-evenly">
            {newArr.map((_, index) => (
              <div
                key={index}
                className="w-full 
              md:max-w-[calc(33.33%-20px)]
              h-80 md:max-h-20
              relative 
              mb-8 md:mb-4 md:mr-4 
              md:border md:border-slate-200"
              >
                <a href="https://www.instagram.com/ultrawide.productions/">
                  <Image
                    fill={true}
                    style={{ objectFit: "cover" }}
                    src={`/assets/footerImages/footerImage${index + 1}.webp`}
                    alt={`Image ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-evenly md:items-center md:gap-8 lg:gap-16">
          {address}
          {links}
        </div>
      </div>
      <Logo variant="secondary"/>
    </div>
  );
};

export default Footer;
