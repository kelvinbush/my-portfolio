import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <div className={"app__social"}>
      <a href={'https://github.com/kelvinbush'} target={'_blank'} rel="noreferrer">
        <VscGithub />
      </a>
      <a href={'https://www.linkedin.com/in/kelvinbushWachiye'} target={'_blank'} rel="noreferrer">
        <ImLinkedin />
      </a>
      <a href={"https://www.linkedin.com/in/kelvinbushWachiye"} target={'_blank'} rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
