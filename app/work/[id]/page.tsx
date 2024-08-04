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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-[50px] mx-[20px]">
        {images.map((image, index) => (
          <div className="relative w-[350px] md:w-full h-[350px] md:h-[450px]">
            <Image
              className="rounded-lg"
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
