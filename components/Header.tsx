import Link from "next/link";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/work">Work</Link>
      <Button text="Click me asdad" variant="primary"/>
    </div>
  );
};

export default Header;
