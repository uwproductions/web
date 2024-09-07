import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Quote from "@/components/Quote";
import React from "react";

const AboutSectionData = [
  {
    heading: "Create loyal customers that love your brand",
    content:
      "We understand that every client is unique, and we take the time to listen and understand your specific requirements. From the initial consultation to the final delivery of your images, we strive for excellence in every aspect of our work. We believe in building strong relationships with our clients, ensuring a comfortable and enjoyable experience throughout the entire process.",
    src: "/assets/about1.jpg",
    direction: "left",
  },
  {
    heading: "Tailored pricing plans designed for you",
    content:
      "Thank you for considering Ultrawide Productions for your photography needs. We look forward to working with you and capturing moments that will be cherished for generations to come. Contact us today to discuss your vision and let us create stunning imagery that tells your unique story.",
    src: "/assets/about2.jpg",
    direction: "right",
  },
];

const About = () => {
  return (
    <>
      <Banner src={["/assets/aboutBanner.jpg"]} />
      <div>
        <Quote text="Our team of skilled photographers is dedicated to delivering exceptional results that exceed your expectations and preserve memories that will last a lifetime." />
      </div>
      <div className="flex flex-col items-center">
        {AboutSectionData.map((data, index) => (
          <AboutSection key={index} {...data} />
        ))}
      </div>
    </>
  );
};

export default About;
