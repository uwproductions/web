"use client";

import React from "react";
import classNames from "classnames";

const Button = ({ variant = "primary", text = "", onClick = () => {} }) => {
  return (
    <button
      className={classNames({
        "bg-black text-white": variant === "primary",
        "bg-white text-black": variant === "secondary",
        'rounded-full p-4 font-bold transform transition hover:scale-105': true,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
