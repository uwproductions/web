import { urbanist } from "@/utils/font";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const strokes = (
  <>
    <Image
      width={230}
      height={25}
      alt="top_stroke"
      src={"/assets/quote/1.png"}
      className="mr-[260px]"
    />
    <Image
      width={250}
      height={7.5}
      alt="bottom_stroke"
      src={"/assets/quote/2.png"}
      className="mr-[250px]"
    />
  </>
);

const Quote = () => {
  return (
    <div className="flex justify-center px-[140px] mb-40">
      <div className="flex flex-col items-center max-w-[800px]">
        <p
          className={classNames([urbanist.className, "font-[600]", "text-4xl"])}
        >
          You don’t love someone for their looks, or their clothes or their
          fancy car, but because they sing a song only you can hear.
        </p>
        {true && (
          <>
            {strokes}
            <Button className="self-start mt-10" text="Let's work together" />
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
