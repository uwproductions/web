import React from "react";
import Tile from "./Tile";
import classNames from "classnames";
import { urbanist } from "@/app/utils/font";
import Tabs from "@/components/Tabs";
import projects from "@/app/utils/projects";

const items = [
  { label: "all", key: "all" },
  { label: "architecture", key: "architecture" },
  { label: "food", key: "food" },
  { label: "fashion", key: "fashion" },
  { label: "concert", key: "concert" },
];

const OurLatestWorks = ({
  showTabs,
  limit,
}: {
  showTabs?: boolean;
  limit?: number;
}) => {
  return (
    <div className="flex justify-center mb-40">
      <div className="container">
        <p
          className={classNames(
            [
              "text-[140px]",
              "font-bold",
              "font-semibold",
              "text-center",
              urbanist.className,
            ],
            {
              "mb-[80px]": !showTabs,
            }
          )}
        >
          our latest works
        </p>
        {showTabs && (
          <Tabs items={items} className="flex justify-center mb-[40px]" />
        )}
        <div className="flex flex-wrap gap-10">
          {projects.slice(0, limit || projects.length).map((tile) => (
            <Tile key={tile.title} {...tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestWorks;
