import React from "react";
import Image from "next/image";

const Footer = () => {
  const newArr = Array(6).fill(null);

  return (
    <div className="px-36 py-12 bg-black">
      <div className="max-w-72">
        <header className="text-start px-2 mb-5 text-white text-3xl">
          Follow me on Instagram
        </header>
        <div className="flex flex-wrap justify-evenly">
          {newArr.map((_, index) => (
            <Image
              key={index}
              width={80}
              height={80}
              // className="w-20 h-20 object-cover mb-5"
              src={`/assets/footerImages/footerImage${index + 1}.webp`}
              // objectFit="cover"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
