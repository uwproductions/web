"use client";

import React from "react";
import classNames from "classnames";

const Button = ({
  className = "",
  variant = "primary",
  text = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames({
        "bg-black text-white": variant === "primary",
        "bg-white text-black": variant === "secondary",
        "rounded-full py-4 px-6 font-bold transform transition hover:scale-105": true,
        [className]: true,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
