import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import "./Skills.scss";
import ReactTooltip from "react-tooltip";
import MotionWrap from "../../wrapper/Motion";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client
      .fetch(query)
      .then((data) => {
        setExperiences(data);
      })
      .catch((e) => console.log(e));

    client
      .fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className={"app__skills-list"}>
          {skills.map((skill) => (
            <motion.div
              className={"app__skills-item app__flex"}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt="icon" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={"app__skills-exp"}>
          {experiences?.map((experience) => (
            <motion.div
              className={"app__skills-exp-item"}
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className={"app__skills-exp-works"}>
                {experience.works?.map((work) => (
                  <>
                    <motion.div
                      className={"app__skills-exp-work"}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect={"solid"}
                      arrowColor={"#ffffff"}
                      className={"skills-tooltip"}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
