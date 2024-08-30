import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import emailjs from "@emailjs/browser";
import StyledButton from "./StyledButton";

const Contact = () => {
  const [success, setSuccess] = useState(false);
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
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }

    if (errors.name || errors.email || errors.message) {
      setFormErrors(() => ({ ...errors }));
      return;
    }
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
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess(false);
        }
      );
    setFormErrors({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="flex flex-col items-center justify-center lg:px-[8%]"
      id="contactSection"
    >
      <SectionTitle text="CONTACT ME" />
      <div className="form-container flex flex-col items-center justify-center gap-2 w-full p-10 max-w-[500px]">
        <form onSubmit={handleSubmit} className="form w-full">
          <div className="form-group">
            <label className="dark:text-[#00FF85] py-1" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              name="name"
            />
            {formErrors.name && (
              <div className="text-red-600  py-1">{formErrors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              value={formData.email}
              type="email"
              name="email"
            />
            {formErrors.email && (
              <div className="text-red-600  py-1">{formErrors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleInputChange}
              value={formData.message}
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            {formErrors.message && (
              <div className="text-red-600  py-1">{formErrors.message}</div>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <StyledButton type="submit" text="Send" />
          </div>
          {success && (
            <div className="text-green-500 text-center">
              Message sent successfully!
            </div>
          )}
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
        <p className="color-white text-center text-base ">
          corbicomar@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
