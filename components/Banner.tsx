import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

const Banner = () => {

  return (
    <div className="flex h-screen p-0 m-0">
      <Image
        objectFit="cover"
        fill
        alt="banner"
        src="/assets/banner.jpg"
        // style={{ overflow: "hidden" }}
      />
    </div>
  );
};

export default Banner;
