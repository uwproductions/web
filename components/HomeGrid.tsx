import React from "react";
import Tile from "./Tile";

const HomeGrid = () => {
  const gridItems = [
    {
      title: "Title 1",
      subtitle: "subtitle 1",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 2",
      subtitle: "subtitle 2",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 3",
      subtitle: "subtitle 3",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
    {
      title: "Title 4",
      subtitle: "subtitle 4",
      href: "/",
      src: "/assets/work/wedding/1/1.jpg",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center py-10">
      {gridItems.map((tile) => (
        <Tile key={tile.title} {...tile} />
      ))}
    </div>
  );
};

export default HomeGrid;
