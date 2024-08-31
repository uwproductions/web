import { urbanist } from "@/utils/font";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type AboutSectionProps = {
  heading: string;
  content: string;
  src: string;
  direction: string;
};

const AboutSection = ({
  heading,
  content,
  src,
  direction = "left",
}: AboutSectionProps) => {
  return (
    <div
      className={classNames(
        "container",
        "flex",
        "flex-col",
        "px-5",
        "md:px-10",
        "justify-between",
        "items-center",
        "mb-40",
        "gap-10",
        {
          "md:flex-row": direction === "left",
          "md:flex-row-reverse": direction === "right",
        }
      )}
    >
      <div className="max-w-[500px] flex flex-col gap-7">
        <p
          className={classNames([urbanist.className, "font-[600]", "text-4xl"])}
        >
          {heading}
        </p>
        <p className={classNames([urbanist.className])}>{content}</p>
      </div>
      <Image
        className="rounded-3xl"
        src={src}
        width={450}
        height={0}
        alt={src}
      />
    </div>
  );
};

export default AboutSection;
