import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Logo from "./Logo";
import navLinks from "@/app/utils/navLinks";
import { urbanist } from "@/app/utils/font";

const Footer = () => {
  const newArr = Array(6).fill(null);

  const links = (
    <div className="flex flex-col md:justify-center font-light gap-1 max-w-[30%] md:max-w-full">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={classNames(["text-white text-sm md:text-md"])}
        >
          {link.name.toLowerCase()}
        </Link>
      ))}
    </div>
  );

  const address = (
    <div className="flex flex-col gap-1 max-w-[70%] md:max-w-full text-white text-sm md:text-md font-light">
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
  );

  return (
    <div className="py-8 md:py-20 px-7 sm:px-14 md:px-0 bg-black flex justify-center">
      <div className="lg:w-[1140px]">
        <div
          className="md:flex md:pb-4 pb-8
      lg:justify-between md:justify-evenly 
      lg:gap-16"
        >
          <div className="md:max-w-[30rem]">
            <header
              className={classNames([
                "md:text-start text-center mb-8 text-white text-3xl font-semibold text-[40px]",
                urbanist.className,
              ])}
            >
              Follow me on Instagram
            </header>
            <div className="flex flex-wrap justify-between gap-[1.5rem]">
              {newArr.map((_, index) => (
                <a
                  key={index}
                  className={classNames([
                    "w-full",
                    "md:max-w-[calc(33.33%-20px)]",
                    "h-80 md:max-h-20",
                    "relative",
                    "mb-2",
                    // "md:border md:border-slate-200",
                  ])}
                  href="https://www.instagram.com/ultrawide.productions/"
                >
                  <Image
                    style={{ objectFit: "cover" }}
                    src={`/assets/footerImages/footerImage${index + 1}.webp`}
                    alt={`Image ${index + 1}`}
                    width={120}
                    height={80}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-evenly md:items-center md:gap-8 lg:gap-16">
            {address}
            {links}
          </div>
        </div>
        <div className={classNames(["flex", "justify-center"])}>
          <div className={classNames(["w-full md:min-w-[800px]"])}>
            <div
              className={classNames([
                "flex",
                "justify-between",
                "items-center",
              ])}
            >
              <Logo
                variant="secondary"
                className={classNames(["text-start"])}
              />
              <div
                className={classNames(["text-white", "text-md", "text-end"])}
              >
                <p>© Ultrawide Productions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
