import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const errors = { name: "", email: "", message: "" };
    if (!name) {
      errors.name = "Name is required";
      return;
    }
    if (!email) {
      errors.email = "Email is required";
      return;
    }
    if (!message) {
      errors.message = "Message is required";
      return;
    }

    setFormErrors(() => ({ ...errors }));
    emailjs
      .send(
        "service_q5suqyb",
        "template_n6wwlze",
        {
          from_email: formData.email,
          from_name: formData.name,
          message: formData.message,
        },
        { publicKey: "41j9gbSKyLr598-mT" }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="" id="contactSection">
      <SectionTitle text="CONTACT ME" />
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="text-[#00FF85] py-1" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleInputChange}
              value={formData.name}
              className="bg-slate-200 rounded-sm outline-none focus:outline-2 focus:outline-[#005AE0]  text-slate-950 h-8 px-2 text-sm"
              type="text"
              name="name"
            />
            {formErrors.name && (
              <div className="text-red-400 py-1">{formErrors.name}</div>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-[#00FF85] py-1" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleInputChange}
              value={formData.email}
              className="bg-slate-200 rounded-sm outline-none focus:outline-2 focus:outline-[#005AE0] text-slate-950 h-8 px-2 text-sm"
              type="email"
              name="email"
            />
            {formErrors.email && (
              <div className="text-red-400 py-1">{formErrors.email}</div>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-[#00FF85] py-1" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={handleInputChange}
              value={formData.message}
              className="bg-slate-200 rounded-sm outline-none focus:outline-2 focus:outline-[#005AE0]  text-slate-950 py-2 px-2 text-sm"
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            {formErrors.message && (
              <div className="text-red-400 py-1">{formErrors.message}</div>
            )}
          </div>
          <Button type="submit" text="Send" />
        </form>
        <div className="flex items-center justify-center gap-5 w-full p-5">
          <div className=" flex-grow bg-slate-500 h-[1px] max-w-20 rounded-full"></div>
          <span className="text-sm text-center font-bold">OR</span>
          <div className=" flex-grow bg-slate-500 h-[1px] max-w-20 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a target="_blank" href="https://github.com/OmarCorbic">
            <img className="w-8 h-8" src={github} alt="Github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/omar-%C4%8Dorbi%C4%87-684b40176/"
          >
            <img className="w-8 h-8" src={linkedin} alt="Github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
