import React from "react";
import Image from "next/image";

import image1 from "../public/assets/footerImages/footerImage1.webp";
import image2 from "../public/assets/footerImages/footerImage2.webp";
import image3 from "../public/assets/footerImages/footerImage3.webp";
import image4 from "../public/assets/footerImages/footerImage4.webp";
import image5 from "../public/assets/footerImages/footerImage5.webp";
import image6 from "../public/assets/footerImages/footerImage6.webp";

const Footer = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="px-36 py-12 bg-black">
      <div className="max-w-72">
        <header className="text-start px-2 mb-5 text-white text-3xl">
          Follow me on Instagram
        </header>
        <div className="flex flex-wrap justify-evenly">
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image1}
            alt="Image 1"
          />
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image2}
            alt="Image 1"
          />
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image3}
            alt="Image 1"
          />
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image4}
            alt="Image 1"
          />
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image5}
            alt="Image 1"
          />
          <Image
            className="w-20 h-20 object-cover mb-5"
            src={image6}
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
