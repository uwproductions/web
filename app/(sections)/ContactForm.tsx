"use client";

import { useForm, ValidationError } from "@formspree/react";
import classNames from "classnames";
import { urbanist } from "../utils/font";
import Image from "next/image";
import Button from "@/components/Button";

const inputClass =
  "border border-black rounded-lg p-3 w-full outline-none border-opacity-50";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqynlej");

  const hasAlreadySubmitted = window.localStorage.getItem("hasSubmitted");

  if (state.succeeded || hasAlreadySubmitted) {
    return <p>Thanks for your submission!</p>;
  }
  console.log({ state });
  const isValid = () => {
    // TODO: add validation and submit animation
    // console.log({ state });
  };

  return (
    <div className="flex justify-center mb-40">
      <div className="container flex justify-between gap-20">
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
            onSubmit={() => handleSubmit}
            className={classNames([
              "flex",
              "flex-col",
              "gap-5",
              urbanist.className,
            ])}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" className={inputClass} />
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
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className={inputClass} />
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
        <div className="relative w-full">
          <Image
            fill
            objectFit="cover"
            className="rounded-2xl"
            alt="form_image"
            src={"/assets/contactForm.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
