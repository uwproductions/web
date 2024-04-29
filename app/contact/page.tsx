import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex justify-center my-10 xl:px-0">
      <div className="flex xl:w-[1140px] gap-10">
        <div className="lg:w-[50%]">
          <h1 className="text-[30px]">Make an Appointment</h1>
          <form action="https://formspree.io/f/{form_id}" method="post">
            <fieldset>
              <div className="flex flex-col my-5">
                <label className="mb-1" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  className="border p-1 text-sm rounded"
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="mb-1" htmlFor="email-address">
                  Email Address
                </label>
                <input
                  className="border p-1 text-sm rounded"
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="mb-1" htmlFor="message">
                  Tell us about required service
                </label>
                <textarea
                  className="border p-1 text-sm rounded"
                  name="message"
                  cols={20}
                  rows={5}
                ></textarea>
              </div>
            </fieldset>
            <button className="bg-black text-white py-2 px-8 cursor-pointer  rounded-3xl">
              Next
            </button>
          </form>
        </div>
        <div className="lg:w-[50%] flex justify-end items-center">
          <Image
            className="rounded-2xl"
            alt="form_image"
            src={"/assets/footerImages/footerImage1.webp"}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
