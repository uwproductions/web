import projects from "@/app/utils/projects";
import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

interface WorkDetailProps {
  params: {
    id: string | number;
  };
}

const WorkDetail = ({ params: { id } }: WorkDetailProps) => {
  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  const { title, images, bannerImages } = project;

  return (
    <div>
      <Banner title={title} src={bannerImages} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              className="h-full w-auto"
              src={image}
              layout="fill"
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDetail;
