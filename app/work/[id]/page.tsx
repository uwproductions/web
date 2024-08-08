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
    <>
      <Banner title={title} src={bannerImages} />
      <div className="flex justify-center mb-40">
        <div className="container columns-2 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <Image
                className="rounded-lg"
                src={image}
                alt={`Project image ${index + 1}`}
                width={300} // Set a consistent width or remove if the masonry grid is responsive
                height={400} // Adjust based on your needs or use `layout="intrinsic"`
                // layout="intrinsic"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
