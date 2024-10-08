"use client";

import React, { useState } from "react";
import Tile from "./Tile";
import classNames from "classnames";
import { urbanist } from "@/utils/font";
import Tabs from "@/components/Tabs";
import projects from "@/utils/projects";

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
  const [activeProjects, setActiveProjects] = useState(projects);

  const handleActiveProjects = (key?: string) => {
    if (key === "all" || !key) {
      setActiveProjects(projects);
    } else {
      const activeProjects = projects.filter((project) =>
        project.src.toLowerCase().includes(key.toLowerCase())
      );
      setActiveProjects(activeProjects);
    }
  };

  return (
    <div className="flex justify-center mb-40">
      <div className="container">
        <p
          className={classNames(
            "text-[50px]",
            "sm:text-[70px]",
            "lg:text-[100px]",
            "font-bold",
            "font-semibold",
            "text-center",
            urbanist.className,
            {
              "mb-[80px]": !showTabs,
            }
          )}
        >
          our latest works
        </p>
        {showTabs && (
          <Tabs
            items={items}
            showActiveProjects={handleActiveProjects}
            className="flex justify-center mb-[40px]"
          />
        )}
        <div className="flex flex-wrap gap-8 justify-center xl:justify-between">
          {activeProjects
            .slice(0, limit || activeProjects.length)
            .map((tile) => (
              <Tile key={tile.href} {...tile} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestWorks;
