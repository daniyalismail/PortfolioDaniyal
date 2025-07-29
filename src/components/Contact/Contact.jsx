import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "./contact.css";
export default function Contact() {
  const form = useRef();
  const [issending, setissending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setissending(true);
    emailjs
      .sendForm(
        "service_1p7tlxg",
        "template_9j6fi7s",
        form.current,
        "_cTNs4hv-NnpoMT6Y"
      )
      .then(
        () => {
          setissending(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setissending(false);
          toast.error("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };
  return (
    <div className="text-white w-screen flex flex-col justify-center items-center">
    <ToastContainer/>
      <h1 className="text-4xl font-semibold text-center">Get <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">In</span> Touch</h1>
      <div className=" contact-outer flex w-[90%] justify-center ">
        <div className=" contact-inner-1 flex mt-3 flex-col gap-4 w-[40%]">
          <h2 className="text-3xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="w-[90%]">
            If you have any questions or inquiries, feel free to reach out!
          </p>
          <div
            className="flex
      transition-all duration-300 delay-150 ease-in-out  hover:-translate-y-1 hover:scale-110"
          >
            <a
              className="flex gap-2 items-center"
              href="mailto:Daniyalismail19@gmail.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-xl"
              />
              <p>Daniyalismail19@gmail.com</p>
            </a>
          </div>
          <div
            className="flex gap-2 items-center
      transition-all duration-300 delay-150 ease-in-out  hover:-translate-y-1 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-blue-500 text-xl"
            />
            <p>+92335-5577990</p>
          </div>
          <div
            className="flex gap-2 items-center
      transition-all duration-300 delay-150 ease-in-out  hover:-translate-y-1 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-blue-500 text-xl"
            />
            <p>Karachi,Pakistan</p>
          </div>
        </div>
        <form className=" form w-[40%]" ref={form} onSubmit={sendEmail}>
          <div className="w-full mt-3 flex flex-col gap-4">
            <p>Your Name</p>
            <input
              name="username"
              className="p-2 rounded-md bg-gray-800 border border-gray-700"
              type="text"
              placeholder="Enter your name"
            />
            <p>Your Email</p>
            <input
              name="useremail"
              className="p-2 rounded-md bg-gray-800 border border-gray-700"
              type="email"
              placeholder="Enter your email"
            />
            <p>Write Your Message Here</p>
            <textarea
              name="usermessage"
              rows={5}
              className=" p-2 rounded-md bg-gray-800 border border-gray-700"
              placeholder="Enter your message"
            ></textarea>
            <button
              disabled={issending}
              type="submit"
              className={`transition-all duration-300 delay-150 ease-in-out   hover:-translate-y-1 hover:scale-110
        bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md cursor-pointer ${issending ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            >
              {issending ? <span>Sending... ⏳</span> : <span>Submit Message</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
