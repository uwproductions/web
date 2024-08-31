"use client";

import { useForm, ValidationError } from "@formspree/react";
import classNames from "classnames";
import { urbanist } from "../utils/font";
import Image from "next/image";
import Button from "@/components/Button";
// import { useEffect } from "react";
// import { useEffect, useState } from "react";

const inputClass =
  "border border-black rounded-lg p-3 w-full outline-none border-opacity-50";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqynlej");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="flex justify-center my-40 p-5">
      <div className="container flex flex-col md:flex-row justify-between gap-20">
        <div className="flex flex-col w-full">
          <h2
            className={classNames([
              urbanist.className,
              "text-[60px]",
              "font-semibold",
              "leading-none",
              "mb-10",
            ])}
          >
            Make an Appointment
          </h2>
          <form
            onSubmit={handleSubmit}
            className={classNames([
              "flex",
              "flex-col",
              "gap-5",
              urbanist.className,
            ])}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" className={inputClass} required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={inputClass}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="number"
                name="phone"
                className={inputClass}
                required
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={inputClass}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button
              variant="primary"
              text="Submit"
              className="w-[150px]"
              type="submit"
              disabled={state.submitting}
            />
            <ValidationError errors={state.errors} />
          </form>
        </div>
        <div className="relative w-full h-[400px] md:h-auto">
          <Image
            fill
            objectFit="cover"
            className="rounded-2xl"
            alt="form_image"
            src={"/assets/work/concert/1/1.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
