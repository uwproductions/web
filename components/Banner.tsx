"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { urbanist } from "@/utils/font";

const homepageImages = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
];

type BannerProps = {
  title?: string;
  src?: string[];
  disableCycle?: boolean;
};

const Banner = ({ title, src, disableCycle }: BannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index of the current image

  const images = src || homepageImages;

  useEffect(() => {
    if (!disableCycle) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="flex h-screen p-0 m-0 relative mb-40">
      <div className="absolute z-20 bottom-[30px] w-full flex justify-center">
        <motion.p
          className={classNames([
            urbanist.className,
            "container text-[60px] font-[600] text-white",
          ])}
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
            className="object-cover object-top"
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
