"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { urbanist } from "@/app/utils/font";

const homepageImages = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
];

const Banner = ({ title, src }: { title?: string; src?: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index of the current image
  const [scrollY, setScrollY] = useState(0);

  const images = src || homepageImages;

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollY(Math.floor(scrollY / 10));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex h-screen p-0 m-0 relative mb-40">
      <div className="absolute z-20 bottom-[30px] w-full flex justify-center">
        <motion.p
          className={classNames([
            urbanist.className,
            "container text-[60px] font-[600] text-white",
          ])}
          style={{
            opacity: (100 - scrollY * 2) / 100,
            paddingBottom: scrollY * 2,
          }}
        >
          {title}
        </motion.p>
      </div>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="object-cover"
            layout="fill"
            alt="banner"
            src={image}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Banner;
