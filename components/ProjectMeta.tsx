import { urbanist } from "@/app/utils/font";
import classNames from "classnames";
import React from "react";

interface ProjectMetaProps {
  description: string;
  client: string;
  location: string;
  date: string;
}

const ProjectMeta = ({
  description,
  client,
  location,
  date,
}: ProjectMetaProps) => {
  return (
    <div className="flex justify-center px-[140px] mb-40">
      <div
        className={classNames([
          urbanist.className,
          "flex flex-col items-center max-w-[800px]",
        ])}
      >
        <p className={classNames(["font-[600]", "text-4xl"])}>{description}</p>
        <div className="flex justify-between w-full mt-10">
          <p>{client}</p>
          <p>{location}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;
