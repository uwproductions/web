"use client";

import React from "react";
import classNames from "classnames";

const Button = ({ variant = "primary", text = "", ...props }) => {
  return (
    <button
      {...props}
      className={classNames({
        [props.className]: true,
        "bg-black text-white": variant === "primary",
        "bg-white text-black": variant === "secondary",
        "rounded-full py-4 px-6 font-bold transform transition hover:scale-105":
          true,
      })}
    >
      {text}
    </button>
  );
};

export default Button;
