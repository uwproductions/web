"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { urbanist } from "@/utils/font";
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
      className="flex flex-col items-center relative h-[400px] cursor-pointer max-w-[345px] sm:max-w-[545px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-[475px] h-[300px] sm:h-[363px] sm:w-[545px]">
        <Image
          src={src}
          alt={`image_${src}`}
          layout="fill"
          className="rounded-2xl max-h-[363px] object-cover object-top"
        />
      </div>
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
          "w-[300px]",
          "sm:w-[490px]",
          "h-[60px]",
          "sm:h-[100px]",
          "bg-white",
          "rounded-2xl",
          "flex",
          "flex-col",
          // "items-center",
          "justify-center",
          "px-10",
        ])}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-lg">{subtitle}</p>
          </div>
          {hovered && (
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="arrow-right"
              width="1.2em"
              height="1.2em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
            </svg>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default Tile;
