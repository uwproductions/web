import React from "react";
import Tile from "./Tile";

const HomeGrid = () => {
  const gridItems = [
    {
      title: "Title 1",
      subTitle: "Subtitle 1",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 2",
      subTitle: "Subtitle 2",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 3",
      subTitle: "Subtitle 3",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 4",
      subTitle: "Subtitle 4",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
  ];
  return (
    <div>
      {gridItems.map((tile) => (
        <Tile key={tile.title} {...tile} />
      ))}
    </div>
  );
};

export default HomeGrid;
