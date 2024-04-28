"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type TileProps = {
  src: string;
  title: string;
  subtitle: string;
};

const Tile = ({ src, title, subtitle }: TileProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="flex flex-col items-center relative h-[400px] w-[40%]"
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
          "absolute",
          "z-10",
          "bottom-0",
          "w-[490px]",
          "h-[100px]",
          "bg-white",
          "rounded-2xl",
        ])}
      >
        <h2 className="text-2xl font-bold px-5 pt-5">{title}</h2>
        <p className="text-lg font-light px-5">{subtitle}</p>
      </motion.div>
    </div>
  );
};

export default Tile;
