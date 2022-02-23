import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import images from "../../contants";

const About = () => {
  const abouts = [
    {
      title: "Front-End Development",
      description: "I am a good web developer",
      imgUrl: images.about01,
    },
    {
      title: "Android Development",
      description: "I am a good web developer",
      imgUrl: images.about02,
    },
    {
      title: "Back-End Development",
      description: "I am a good web developer",
      imgUrl: images.about03,
    },
    {
      title: "Blockchain Development",
      description: "I am a good web developer",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Dev</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={"app__profile-item"}
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
