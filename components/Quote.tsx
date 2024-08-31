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
      className="mr-0 md:mr-[260px]"
    />
    <Image
      width={250}
      height={7.5}
      alt="bottom_stroke"
      src={"/assets/quote/2.png"}
      className="mr-0 md:mr-[250px]"
    />
  </>
);

type QuoteProps = {
  text: string;
  showVector?: boolean;
};

const Quote = ({ text, showVector = false }: QuoteProps) => {
  return (
    <div className="flex justify-center mx-5 md:px-10 mb-20 md:mb-40">
      <div
        className={classNames(["flex", "flex-col", "items-center"], {
          "max-w-[800px]": showVector,
          container: !showVector,
        })}
      >
        <p
          className={classNames([
            urbanist.className,
            "font-[600]",
            "md:text-4xl",
            "text-2xl",
          ])}
        >
          {text}
        </p>
        {showVector && (
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
