import projects from "@/app/utils/projects";
import Banner from "@/components/Banner";
import React from "react";

interface WorkDetailProps {
  params: {
    id: string | number;
  };
}

const WorkDetail = ({ params: { id } }: WorkDetailProps) => {
  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return null;
  }

  const { title } = project;
  return (
    <div>
      <Banner title={title} />
    </div>
  );
};

export default WorkDetail;
