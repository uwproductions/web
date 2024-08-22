"use client";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import projects from "@/utils/projects";
import Banner from "@/components/Banner";
import React, { useState } from "react";

interface WorkDetailProps {
  params: {
    id: string | number;
    category: string;
  };
}

const WorkDetail = ({ params: { id, category } }: WorkDetailProps) => {
  const [isOpen, setIsOpen] = useState<number>(0);

  const project = projects.find(
    (project) => project.href === `/work/${category}/${Number(id)}`
  );

  if (!project) {
    return <p>Project not found.</p>;
  }

  const { title, images, bannerImages } = project;

  const imagesObj = images.map((image) => {
    return { src: image, width: 800, height: 800 };
  });

  const imagesObjLightBox = images.map((image) => {
    return { src: image };
  });

  return (
    <>
      <Banner title={title} src={bannerImages} disableCycle />
      <div className="flex justify-center mb-40">
        <div className="container px-[10px] md:px-0">
          <ColumnsPhotoAlbum
            onClick={(e) => setIsOpen(e.index)}
            photos={imagesObj}
            columns={(containerWidth) => {
              if (containerWidth < 768) return 2;
              return 3;
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-center items-center h-full">
          <Lightbox
            index={isOpen}
            open={Boolean(isOpen)}
            close={() => setIsOpen(0)}
            slides={imagesObjLightBox}
          />
        </div>
      )}
    </>
  );
};

export default WorkDetail;
