import React, { useState } from "react";
import "./Footer.scss";
import MotionWrap from "../../wrapper/Motion";
import AppWrap from "../../wrapper/AppWrap";
import images from "../../contants";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:kelybush@gmail.com" className={"p-text"}>
            kelybush@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+254795778730" className={"p-text"}>
            +254795778730
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder={"Your name"}
              name={"name"}
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder={"Your email"}
              name={"email"}
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              name={"message"}
              className="p-text"
              value={message}
              placeholder={"Your Message"}
              onChange={handleInputChange}
            />
          </div>
          <button type={"button"} className={"p-text"} onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className={"head-text"}>Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
