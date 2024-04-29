import React from "react";
import Tile from "../../components/Tile";
import classNames from "classnames";
import { urbanist } from "@/app/utils/font";

const OurLatestWorks = () => {
  const gridItems = [
    {
      title: "Roaming the World’s Pathways",
      subtitle: "Subtitle 1",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Roaming the World’s Pathways",
      subtitle: "Subtitle 2",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Roaming the World’s Pathways",
      subtitle: "Subtitle 3",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Roaming the World’s Pathways",
      subtitle: "Subtitle 4",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="container">
        <p
          className={classNames([
            "text-[140px]",
            "font-bold",
            "font-semibold",
            "text-center",
            'mb-[80px]',
            urbanist.className,
          ])}
        >
          our latest works
        </p>
        <div className="flex flex-wrap gap-10">
          {gridItems.map((tile) => (
            <Tile key={tile.title} {...tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestWorks;
