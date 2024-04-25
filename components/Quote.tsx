import { urbanist } from "@/app/utils/font";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const Quote = () => {
  const strokes = (
    <>
      <Image
        width={230}
        height={25}
        alt="top_stroke"
        src={"/assets/quote/1.png"}
        className="mr-[175px]"
      />
      <Image
        width={250}
        height={7.5}
        alt="bottom_stroke"
        src={"/assets/quote/2.png"}
        className="mr-[160px]"
      />
    </>
  );
  return (
    <div className="flex flex-col items-center w-full p-[200px] text-4xl">
      <p
        className={classNames([
          urbanist.className,
          "font-[600]",
          "max-w-[800px]",
        ])}
      >
        You don’t love someone for their looks, or their clothes or their fancy
        car, but because they sing a song only you can hear.
      </p>
      {strokes}
    </div>
  );
};

export default Quote;
