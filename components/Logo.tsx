import classNames from "classnames";
import React from "react";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary";
};

const Logo = ({ className, size = "sm", variant = "primary" }: LogoProps) => {
  const sizeMap = {
    sm: ["text-[24px]", "text-[19px]"],
    md: ["text-[48px]", "text-[38px]"],
    lg: ["text-[72px]", "text-[57px]"],
    xl: ["text-[96px]", "text-[76px]"],
  };
  return (
    <div
      className={classNames(["text-center h-[53px]", className], {
        "text-white": variant === "secondary",
        "text-black": variant === "primary",
      })}
    >
      <h2
        className={classNames([
          "font-bold",
          sizeMap[size as keyof typeof sizeMap][0],
        ])}
      >
        ULTRAWIDE
      </h2>
      <h3
        className={classNames([
          "leading-[5px]",
          sizeMap[size as keyof typeof sizeMap][1],
        ])}
      >
        PRODUCTIONS
      </h3>
    </div>
  );
};

export default Logo;
