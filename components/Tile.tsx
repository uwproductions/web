"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { urbanist } from "@/app/utils/font";
import classNames from "classnames";
import Link from "next/link";

type TileProps = {
  src: string;
  title: string;
  subtitle: string;
  href: string;
};

const Tile = ({ src, title, subtitle, href }: TileProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      href={href}
      className="flex flex-col items-center relative h-[400px] cursor-pointer max-w-[545px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={`image_${src}`}
        width={545}
        height={363}
        className="rounded-2xl"
      />
      <motion.div
        animate={{
          bottom: hovered ? 60 : 0,
          transition: {
            type: "spring", // Type of animation (e.g., "spring", "tween", "keyframes")
            stiffness: 250, // Adjust stiffness for spring animation
            damping: 30, // Adjust damping for spring animation
            ease: "easeInOut", // Easing function for smooth acceleration
          },
        }}
        className={classNames([
          urbanist.className,
          "absolute",
          "z-10",
          "bottom-0",
          "w-[490px]",
          "h-[100px]",
          "bg-white",
          "rounded-2xl",
          "flex",
          "flex-col",
          // "items-center",
          "justify-center",
          "px-10",
        ])}
      >
        <h2 className="text-2xl font-bold px-5 pt-5">{title}</h2>
        <p className="text-lg font-light px-5">{subtitle}</p>
      </motion.div>
    </Link>
  );
};

export default Tile;
